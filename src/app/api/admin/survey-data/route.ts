import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';

// Verify admin authentication
function verifyAdminToken(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value;
  
  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    return decoded;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const admin = verifyAdminToken(request);
    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get all survey responses
    const surveyResponses = await prisma.surveyResponse.findMany({
      orderBy: { createdAt: 'desc' }
    });

    // Get email signups
    const emailSignups = await prisma.emailSignup.findMany({
      orderBy: { createdAt: 'desc' }
    });

    // Calculate analytics
    const analytics = {
      totalSurveyResponses: surveyResponses.length,
      totalEmailSignups: emailSignups.length,
      responsesByDay: {} as Record<string, number>,
      signupsByDay: {} as Record<string, number>,
      industryBreakdown: {} as Record<string, number>,
      companySizeBreakdown: {} as Record<string, number>,
      stressLevelAverage: 0,
      paymentWillingnessBreakdown: {} as Record<string, number>,
      mostRequestedFeatures: {} as Record<string, number>
    };

    // Process survey data for analytics
    let totalStressLevel = 0;
    let stressLevelCount = 0;

    surveyResponses.forEach(response => {
      // Group by day
      const day = response.createdAt.toISOString().split('T')[0];
      analytics.responsesByDay[day] = (analytics.responsesByDay[day] || 0) + 1;

      // Industry breakdown
      if (response.industry) {
        analytics.industryBreakdown[response.industry] = 
          (analytics.industryBreakdown[response.industry] || 0) + 1;
      }

      // Company size breakdown
      if (response.companySize) {
        analytics.companySizeBreakdown[response.companySize] = 
          (analytics.companySizeBreakdown[response.companySize] || 0) + 1;
      }

      // Stress level average
      if (response.stressLevel) {
        totalStressLevel += response.stressLevel;
        stressLevelCount++;
      }

      // Payment willingness
      if (response.paymentWillingness) {
        analytics.paymentWillingnessBreakdown[response.paymentWillingness] = 
          (analytics.paymentWillingnessBreakdown[response.paymentWillingness] || 0) + 1;
      }

      // Most valuable features
      if (response.mostValuableFeature) {
        analytics.mostRequestedFeatures[response.mostValuableFeature] = 
          (analytics.mostRequestedFeatures[response.mostValuableFeature] || 0) + 1;
      }
    });

    // Calculate average stress level
    if (stressLevelCount > 0) {
      analytics.stressLevelAverage = Math.round((totalStressLevel / stressLevelCount) * 10) / 10;
    }

    // Process email signups by day
    emailSignups.forEach(signup => {
      const day = signup.createdAt.toISOString().split('T')[0];
      analytics.signupsByDay[day] = (analytics.signupsByDay[day] || 0) + 1;
    });

    return NextResponse.json({
      surveyResponses,
      emailSignups,
      analytics
    });

  } catch (err) {
    console.error('Error fetching survey data:', err);
    return NextResponse.json(
      { error: 'Failed to fetch survey data' },
      { status: 500 }
    );
  }
}

