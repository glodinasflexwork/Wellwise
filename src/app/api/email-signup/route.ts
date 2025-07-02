import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingSignup = await prisma.emailSignup.findUnique({
      where: { email }
    })

    if (existingSignup) {
      return NextResponse.json(
        { message: 'Email already registered', alreadyExists: true },
        { status: 200 }
      )
    }

    // Create new email signup
    const emailSignup = await prisma.emailSignup.create({
      data: {
        email,
        source: source || 'website'
      }
    })

    // Send welcome email via Mailtrap
    try {
      await sendWelcomeEmail(email)
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't fail the signup if email sending fails
    }

    return NextResponse.json(
      { 
        message: 'Successfully signed up for early access!',
        id: emailSignup.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Email signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function sendWelcomeEmail(email: string) {
  const response = await fetch(process.env.MAILTRAP_API_URL!, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: {
        email: process.env.EMAIL_FROM,
        name: process.env.EMAIL_FROM_NAME
      },
      to: [{ email }],
      subject: 'Welcome to WellWise - You\'re on the list!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #008080; margin: 0;">WellWise</h1>
            <p style="color: #666; margin: 5px 0;">AI-Powered Wellbeing Ecosystem</p>
          </div>
          
          <h2 style="color: #333;">Welcome to the Future of Wellbeing! 🎉</h2>
          
          <p style="color: #555; line-height: 1.6;">
            Thank you for joining the WellWise early access list! You're now part of an exclusive group 
            that will be among the first to experience the revolutionary platform that integrates:
          </p>
          
          <ul style="color: #555; line-height: 1.8;">
            <li><strong>Mental Health & Wellbeing</strong> - AI-powered coaching and burnout prevention</li>
            <li><strong>Financial Wellness</strong> - Smart budgeting and investment guidance</li>
            <li><strong>Sustainability</strong> - Environmental impact tracking and optimization</li>
          </ul>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #008080; margin-top: 0;">What's Next?</h3>
            <p style="color: #555; margin-bottom: 0;">
              We're working hard to bring WellWise to life. You'll be the first to know when we launch, 
              and you'll get exclusive early access to all features. Stay tuned for updates!
            </p>
          </div>
          
          <p style="color: #555; line-height: 1.6;">
            In the meantime, follow our journey and connect with us:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://www.wellwise.nl" style="background: #008080; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Visit WellWise
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 14px; text-align: center;">
            You're receiving this email because you signed up for early access to WellWise.<br>
            If you didn't sign up, you can safely ignore this email.
          </p>
        </div>
      `,
      text: `
Welcome to WellWise!

Thank you for joining our early access list! You're now part of an exclusive group that will be among the first to experience our revolutionary AI-powered wellbeing ecosystem.

WellWise integrates:
- Mental Health & Wellbeing - AI-powered coaching and burnout prevention
- Financial Wellness - Smart budgeting and investment guidance  
- Sustainability - Environmental impact tracking and optimization

What's Next?
We're working hard to bring WellWise to life. You'll be the first to know when we launch, and you'll get exclusive early access to all features.

Visit us at: https://www.wellwise.nl

Best regards,
The WellWise Team
      `
    })
  })

  if (!response.ok) {
    throw new Error(`Failed to send email: ${response.statusText}`)
  }

  return response.json()
}

