'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, ArrowLeft, User, Building, Heart, Send } from 'lucide-react'

interface SurveyData {
  // Personal info
  email: string
  name: string
  company: string
  role: string
  companySize: string
  industry: string
  
  // Problem validation
  burnoutExperience: string
  stressLevel: number
  financialStress: string
  sustainabilityConcern: string
  currentSolutions: string[]
  
  // Solution validation
  integratedSolution: string
  mostValuableFeature: string
  paymentWillingness: string
  priceRange: string
  
  // Implementation
  implementationTime: string
  decisionMakers: string[]
  evaluationCriteria: string[]
  
  // Additional feedback
  additionalFeatures: string
  concerns: string
  feedback: string
}

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  
  const [formData, setFormData] = useState<SurveyData>({
    email: '',
    name: '',
    company: '',
    role: '',
    companySize: '',
    industry: '',
    burnoutExperience: '',
    stressLevel: 5,
    financialStress: '',
    sustainabilityConcern: '',
    currentSolutions: [],
    integratedSolution: '',
    mostValuableFeature: '',
    paymentWillingness: '',
    priceRange: '',
    implementationTime: '',
    decisionMakers: [],
    evaluationCriteria: [],
    additionalFeatures: '',
    concerns: '',
    feedback: ''
  })

  const totalSteps = 5

  const handleInputChange = (field: keyof SurveyData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field: keyof SurveyData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setMessage('Thank you for your valuable feedback!')
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Survey submission error:', error)
      setMessage('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your feedback is invaluable in helping us build WellWise. We&apos;ll keep you updated on our progress!
          </p>
          <Link 
            href="/"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/wellwise_logo.png" alt="WellWise Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-teal-700">WellWise</span>
          </div>
          <div className="text-sm text-gray-600">
            Market Research Survey
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-teal-700">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">About You</h2>
                    <p className="text-gray-600">Help us understand your background</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO/Founder</option>
                      <option value="hr">HR Director/Manager</option>
                      <option value="wellness">Wellness/Benefits Manager</option>
                      <option value="finance">Finance Director/CFO</option>
                      <option value="operations">Operations Manager</option>
                      <option value="employee">Employee</option>
                      <option value="consultant">Consultant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => handleInputChange('companySize', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance/Banking</option>
                      <option value="consulting">Consulting</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="education">Education</option>
                      <option value="government">Government</option>
                      <option value="nonprofit">Non-profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Problem Validation */}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Current Challenges</h2>
                    <p className="text-gray-600">Tell us about the problems you&apos;re facing</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How often do you or your team experience burnout or high stress?
                    </label>
                    <div className="space-y-2">
                      {['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="burnoutExperience"
                            value={option.toLowerCase()}
                            checked={formData.burnoutExperience === option.toLowerCase()}
                            onChange={(e) => handleInputChange('burnoutExperience', e.target.value)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current stress level (1 = Very Low, 10 = Very High): {formData.stressLevel}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={formData.stressLevel}
                      onChange={(e) => handleInputChange('stressLevel', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Very Low</span>
                      <span>Very High</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How significant is financial stress for you/your organization?
                    </label>
                    <div className="space-y-2">
                      {['Not a concern', 'Minor concern', 'Moderate concern', 'Major concern', 'Critical issue'].map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="financialStress"
                            value={option.toLowerCase()}
                            checked={formData.financialStress === option.toLowerCase()}
                            onChange={(e) => handleInputChange('financialStress', e.target.value)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How important is sustainability/environmental impact to you/your organization?
                    </label>
                    <div className="space-y-2">
                      {['Not important', 'Somewhat important', 'Important', 'Very important', 'Critical priority'].map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="sustainabilityConcern"
                            value={option.toLowerCase()}
                            checked={formData.sustainabilityConcern === option.toLowerCase()}
                            onChange={(e) => handleInputChange('sustainabilityConcern', e.target.value)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What solutions do you currently use? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Employee wellness programs',
                        'Mental health apps',
                        'Financial planning tools',
                        'Budgeting apps',
                        'Sustainability tracking',
                        'HR wellness platforms',
                        'Meditation apps',
                        'Fitness programs',
                        'Financial advisors',
                        'ESG reporting tools',
                        'None',
                        'Other'
                      ].map((solution) => (
                        <label key={solution} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.currentSolutions.includes(solution)}
                            onChange={(e) => handleArrayChange('currentSolutions', solution, e.target.checked)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{solution}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Solution Validation */}
            {currentStep === 3 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">WellWise Solution</h2>
                    <p className="text-gray-600">Your thoughts on our integrated approach</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-teal-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-teal-900 mb-2">WellWise Overview</h3>
                    <p className="text-teal-800">
                      WellWise is an AI-powered platform that integrates mental health & wellbeing, 
                      financial wellness, and sustainability tracking into one unified solution for 
                      individuals and organizations.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How valuable would an integrated solution like WellWise be for you/your organization?
                    </label>
                    <div className="space-y-2">
                      {['Not valuable', 'Somewhat valuable', 'Valuable', 'Very valuable', 'Extremely valuable'].map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="integratedSolution"
                            value={option.toLowerCase()}
                            checked={formData.integratedSolution === option.toLowerCase()}
                            onChange={(e) => handleInputChange('integratedSolution', e.target.value)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Which feature would be most valuable to you?
                    </label>
                    <div className="space-y-2">
                      {[
                        'AI-powered wellness coaching',
                        'Burnout prediction and prevention',
                        'Automated financial planning',
                        'Sustainability impact tracking',
                        'Integrated dashboard and insights',
                        'Team/organizational analytics',
                        'Personalized recommendations',
                        'ESG reporting capabilities'
                      ].map((feature) => (
                        <label key={feature} className="flex items-center">
                          <input
                            type="radio"
                            name="mostValuableFeature"
                            value={feature}
                            checked={formData.mostValuableFeature === feature}
                            onChange={(e) => handleInputChange('mostValuableFeature', e.target.value)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Would you be willing to pay for a solution like WellWise?
                    </label>
                    <div className="space-y-2">
                      {['Definitely not', 'Probably not', 'Maybe', 'Probably yes', 'Definitely yes'].map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="paymentWillingness"
                            value={option.toLowerCase()}
                            checked={formData.paymentWillingness === option.toLowerCase()}
                            onChange={(e) => handleInputChange('paymentWillingness', e.target.value)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What would be a reasonable price range per user per month?
                    </label>
                    <div className="space-y-2">
                      {['€0-10', '€11-25', '€26-50', '€51-100', '€100+', 'Would need custom pricing'].map((range) => (
                        <label key={range} className="flex items-center">
                          <input
                            type="radio"
                            name="priceRange"
                            value={range}
                            checked={formData.priceRange === range}
                            onChange={(e) => handleInputChange('priceRange', e.target.value)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Implementation */}
            {currentStep === 4 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Implementation</h2>
                    <p className="text-gray-600">How would you implement WellWise?</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How quickly would you want to implement a solution like WellWise?
                    </label>
                    <div className="space-y-2">
                      {['Immediately', 'Within 1-3 months', 'Within 6 months', 'Within a year', 'No specific timeline'].map((time) => (
                        <label key={time} className="flex items-center">
                          <input
                            type="radio"
                            name="implementationTime"
                            value={time.toLowerCase()}
                            checked={formData.implementationTime === time.toLowerCase()}
                            onChange={(e) => handleInputChange('implementationTime', e.target.value)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Who would be involved in the decision-making process? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'CEO/Executive team',
                        'HR Director',
                        'Finance/CFO',
                        'IT/Technology team',
                        'Wellness/Benefits manager',
                        'Operations manager',
                        'Employee representatives',
                        'Procurement team',
                        'Legal/Compliance',
                        'Just myself'
                      ].map((decision) => (
                        <label key={decision} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.decisionMakers.includes(decision)}
                            onChange={(e) => handleArrayChange('decisionMakers', decision, e.target.checked)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{decision}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What would be the most important evaluation criteria? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Cost/ROI',
                        'Ease of use',
                        'Data security/privacy',
                        'Integration capabilities',
                        'Proven results/case studies',
                        'Customer support',
                        'Customization options',
                        'Scalability',
                        'Compliance features',
                        'Mobile accessibility',
                        'Reporting capabilities',
                        'AI accuracy'
                      ].map((criteria) => (
                        <label key={criteria} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.evaluationCriteria.includes(criteria)}
                            onChange={(e) => handleArrayChange('evaluationCriteria', criteria, e.target.checked)}
                            className="mr-3 text-teal-600"
                          />
                          <span className="text-gray-700">{criteria}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Additional Feedback */}
            {currentStep === 5 && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Final Thoughts</h2>
                    <p className="text-gray-600">Help us make WellWise even better</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What additional features would you like to see in WellWise?
                    </label>
                    <textarea
                      value={formData.additionalFeatures}
                      onChange={(e) => handleInputChange('additionalFeatures', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Describe any features or capabilities you'd like to see..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What concerns or hesitations would you have about using WellWise?
                    </label>
                    <textarea
                      value={formData.concerns}
                      onChange={(e) => handleInputChange('concerns', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Share any concerns about privacy, implementation, cost, etc..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Any other feedback or suggestions?
                    </label>
                    <textarea
                      value={formData.feedback}
                      onChange={(e) => handleInputChange('feedback', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="We'd love to hear your thoughts..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </button>

              {message && (
                <div className="text-red-600 text-sm text-center">
                  {message}
                </div>
              )}

              {currentStep < totalSteps ? (
                <button
                  onClick={nextStep}
                  disabled={!formData.email}
                  className="flex items-center bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !formData.email}
                  className="flex items-center bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  {isLoading ? 'Submitting...' : 'Submit Survey'}
                  <Send className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

