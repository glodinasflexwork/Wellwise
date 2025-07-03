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

function arrayToString(arr: string[] | null): string {
  if (!arr || arr.length === 0) return '';
  return arr.join('; ');
}

function escapeCSV(value: unknown): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
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

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'survey';

    if (type === 'survey') {
      // Export survey responses
      const surveyResponses = await prisma.surveyResponse.findMany({
        orderBy: { createdAt: 'desc' }
      });

      const csvHeaders = [
        'ID',
        'Email',
        'Name',
        'Company',
        'Role',
        'Company Size',
        'Industry',
        'Burnout Experience',
        'Stress Level (1-10)',
        'Financial Stress',
        'Sustainability Concern',
        'Current Solutions',
        'Integrated Solution Interest',
        'Most Valuable Feature',
        'Payment Willingness',
        'Price Range',
        'Implementation Time',
        'Decision Makers',
        'Evaluation Criteria',
        'Additional Features',
        'Concerns',
        'Feedback',
        'Created At'
      ].join(',');

      const csvRows = surveyResponses.map(response => [
        escapeCSV(response.id),
        escapeCSV(response.email),
        escapeCSV(response.name),
        escapeCSV(response.company),
        escapeCSV(response.role),
        escapeCSV(response.companySize),
        escapeCSV(response.industry),
        escapeCSV(response.burnoutExperience),
        escapeCSV(response.stressLevel),
        escapeCSV(response.financialStress),
        escapeCSV(response.sustainabilityConcern),
        escapeCSV(arrayToString(response.currentSolutions)),
        escapeCSV(response.integratedSolution),
        escapeCSV(response.mostValuableFeature),
        escapeCSV(response.paymentWillingness),
        escapeCSV(response.priceRange),
        escapeCSV(response.implementationTime),
        escapeCSV(arrayToString(response.decisionMakers)),
        escapeCSV(arrayToString(response.evaluationCriteria)),
        escapeCSV(response.additionalFeatures),
        escapeCSV(response.concerns),
        escapeCSV(response.feedback),
        escapeCSV(response.createdAt.toISOString())
      ].join(','));

      const csvContent = [csvHeaders, ...csvRows].join('\n');

      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="wellwise-survey-responses-${new Date().toISOString().split('T')[0]}.csv"`
        }
      });

    } else if (type === 'emails') {
      // Export email signups
      const emailSignups = await prisma.emailSignup.findMany({
        orderBy: { createdAt: 'desc' }
      });

      const csvHeaders = [
        'ID',
        'Email',
        'Source',
        'Created At'
      ].join(',');

      const csvRows = emailSignups.map(signup => [
        escapeCSV(signup.id),
        escapeCSV(signup.email),
        escapeCSV(signup.source),
        escapeCSV(signup.createdAt.toISOString())
      ].join(','));

      const csvContent = [csvHeaders, ...csvRows].join('\n');

      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="wellwise-email-signups-${new Date().toISOString().split('T')[0]}.csv"`
        }
      });

    } else {
      return NextResponse.json(
        { error: 'Invalid export type' },
        { status: 400 }
      );
    }

  } catch (err) {
    console.error('Error exporting data:', err);
    return NextResponse.json(
      { error: 'Failed to export data' },
      { status: 500 }
    );
  }
}

