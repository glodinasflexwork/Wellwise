import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if survey response already exists for this email
    const existingResponse = await prisma.surveyResponse.findFirst({
      where: { email: data.email }
    })

    if (existingResponse) {
      return NextResponse.json(
        { error: 'A survey response already exists for this email address' },
        { status: 409 }
      )
    }

    // Create survey response
    const surveyResponse = await prisma.surveyResponse.create({
      data: {
        email: data.email,
        name: data.name || null,
        company: data.company || null,
        role: data.role || null,
        companySize: data.companySize || null,
        industry: data.industry || null,
        
        // Problem validation
        burnoutExperience: data.burnoutExperience || null,
        stressLevel: data.stressLevel || null,
        financialStress: data.financialStress || null,
        sustainabilityConcern: data.sustainabilityConcern || null,
        currentSolutions: data.currentSolutions || [],
        
        // Solution validation
        integratedSolution: data.integratedSolution || null,
        mostValuableFeature: data.mostValuableFeature || null,
        paymentWillingness: data.paymentWillingness || null,
        priceRange: data.priceRange || null,
        
        // Implementation
        implementationTime: data.implementationTime || null,
        decisionMakers: data.decisionMakers || [],
        evaluationCriteria: data.evaluationCriteria || [],
        
        // Additional feedback
        additionalFeatures: data.additionalFeatures || null,
        concerns: data.concerns || null,
        feedback: data.feedback || null,
      }
    })

    // Send thank you email (optional - can be implemented later)
    try {
      // Email sending logic would go here
      console.log('Survey response submitted:', surveyResponse.id)
    } catch (emailError) {
      console.error('Failed to send thank you email:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Survey response submitted successfully',
      id: surveyResponse.id
    })

  } catch (error) {
    console.error('Survey submission error:', error)
    
    return NextResponse.json(
      { error: 'Failed to submit survey response. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Get survey statistics (for admin/analytics)
    const totalResponses = await prisma.surveyResponse.count()
    
    const responsesByRole = await prisma.surveyResponse.groupBy({
      by: ['role'],
      _count: {
        role: true
      },
      where: {
        role: {
          not: null
        }
      }
    })

    const responsesByCompanySize = await prisma.surveyResponse.groupBy({
      by: ['companySize'],
      _count: {
        companySize: true
      },
      where: {
        companySize: {
          not: null
        }
      }
    })

    const averageStressLevel = await prisma.surveyResponse.aggregate({
      _avg: {
        stressLevel: true
      },
      where: {
        stressLevel: {
          not: null
        }
      }
    })

    return NextResponse.json({
      totalResponses,
      responsesByRole,
      responsesByCompanySize,
      averageStressLevel: averageStressLevel._avg.stressLevel
    })

  } catch (error) {
    console.error('Survey stats error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch survey statistics' },
      { status: 500 }
    )
  }
}

