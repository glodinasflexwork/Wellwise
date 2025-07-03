'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, DollarSign, Leaf, Brain, Users, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Mail, Phone, Globe, Menu, X } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [contactLoading, setContactLoading] = useState(false)
  const [contactMessage, setContactMessage] = useState('')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/email-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          source: 'hero' 
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setMessage(data.alreadyExists ? 
          'You&apos;re already on our list!' : 
          'Thank you! Check your email for confirmation.'
        )
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Email signup error:', error)
      setMessage('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) return

    setContactLoading(true)
    setContactMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })

      const data = await response.json()

      if (response.ok) {
        setContactSubmitted(true)
        setContactMessage('Thank you! Your message has been sent successfully.')
        setContactForm({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        })
      } else {
        setContactMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setContactMessage('Network error. Please try again or email us directly.')
    } finally {
      setContactLoading(false)
    }
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-teal-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/images/wellwise_logo.png" alt="WellWise Logo" width={40} height={40} />
              <span className="text-2xl font-bold text-teal-700">WellWise</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a>
              <a href="#problem" className="text-gray-600 hover:text-teal-600 transition-colors">Problem</a>
              <a href="#solution" className="text-gray-600 hover:text-teal-600 transition-colors">Solution</a>
              <a href="/survey" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">Survey</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
            </nav>
            
            {/* Desktop CTA Button */}
            <button 
              onClick={() => {
                const emailSection = document.querySelector('form');
                emailSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get Early Access
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-teal-100">
              <nav className="flex flex-col space-y-4 pt-4">
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#problem" 
                  className="text-gray-600 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Problem
                </a>
                <a 
                  href="#solution" 
                  className="text-gray-600 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solution
                </a>
                <a 
                  href="/survey" 
                  className="text-gray-600 hover:text-teal-600 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Survey
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-teal-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button 
                  onClick={() => {
                    const emailSection = document.querySelector('form');
                    emailSection?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors text-left"
                >
                  Get Early Access
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6 inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
            Coming Soon - Join the Waitlist
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The AI-Powered
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Wellbeing Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            WellWise integrates mental health, financial wellness, and sustainability into one intelligent platform. 
            Transform how you and your organization thrive in body, mind, and money.
          </p>
          
          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-12">
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-gray-400 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
                  required
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white px-8 py-3 rounded-lg transition-colors"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                <CheckCircle className="inline-block w-5 h-5 mr-2" />
                {message || 'Thank you! We&apos;ll notify you when WellWise launches.'}
              </div>
            )}
            {!isSubmitted && message && (
              <div className="mt-3 text-red-600 text-sm text-center">
                {message}
              </div>
            )}
          </div>
          
          {/* Survey CTA */}
          <div className="mt-8 mb-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-teal-100 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Shape WellWise</h3>
            <p className="text-gray-600 mb-4">
              Take our 5-minute market research survey and help us build the perfect solution for your needs.
            </p>
            <a 
              href="/survey"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Take Survey
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">€617B</div>
              <div className="text-gray-600">Annual cost of burnout in EU</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">76%</div>
              <div className="text-gray-600">Professionals experience burnout</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">68%</div>
              <div className="text-gray-600">Live paycheck-to-paycheck</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Triple Crisis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern professionals face unprecedented challenges across health, finances, and sustainability - 
              with fragmented solutions that fail to address the interconnected nature of these problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-4">Mental Health Crisis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 76% report workplace burnout</li>
                <li>• Rising anxiety and depression</li>
                <li>• Work-life balance deteriorating</li>
                <li>• Limited access to mental health support</li>
              </ul>
            </div>

            <div className="border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-700 mb-4">Financial Stress</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 68% live paycheck-to-paycheck</li>
                <li>• Rising cost of living pressure</li>
                <li>• Lack of financial literacy</li>
                <li>• Complex, fragmented financial tools</li>
              </ul>
            </div>

            <div className="border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Sustainability Gap</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 83% want to live sustainably</li>
                <li>• Lack of actionable guidance</li>
                <li>• Climate anxiety increasing</li>
                <li>• ESG compliance complexity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The WellWise Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The first integrated platform that seamlessly combines mental health, financial wellness, 
              and sustainability through AI-powered insights and personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="border border-teal-200 rounded-lg p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Intelligent Wellbeing</h3>
              <p className="text-gray-600 mb-4">AI-powered mental and physical health coaching</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />24/7 AI wellness coach</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Burnout prediction & prevention</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Personalized interventions</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Mood & stress tracking</li>
              </ul>
            </div>

            <div className="border border-blue-200 rounded-lg p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Smart Financial Wellness</h3>
              <p className="text-gray-600 mb-4">Personalized financial planning and guidance</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Automated budgeting</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Investment recommendations</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Debt optimization</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-500 mr-2" />Financial stress alerts</li>
              </ul>
            </div>

            <div className="border border-green-200 rounded-lg p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainable Living</h3>
              <p className="text-gray-600 mb-4">Environmental impact tracking and optimization</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Carbon footprint tracking</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Sustainable choice nudges</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />ESG goal setting</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Impact measurement</li>
              </ul>
            </div>
          </div>

          {/* AI Coach Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Sage, Your AI Wellness Coach</h3>
              <p className="text-gray-600">Personalized guidance across all three pillars of wellbeing</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800">
                      &quot;I notice your stress levels have been elevated this week, and your spending on comfort purchases has increased. 
                      Let&apos;s work on a 5-minute mindfulness exercise and review your budget goals. Also, choosing that bike commute 
                      yesterday reduced your carbon footprint by 2.3kg CO₂ - great choice!&quot;
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">Sage • Just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why WellWise?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only platform that understands the interconnected nature of your wellbeing, 
              finances, and environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">Cross-domain intelligence that connects your health, wealth, and sustainability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">GDPR-compliant, ethical AI with complete data transparency and control</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Everyone</h3>
              <p className="text-gray-600">Individual and enterprise solutions that scale from personal use to organizations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Measurable Impact</h3>
              <p className="text-gray-600">Clear ROI metrics and impact measurement for individuals and organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Wellbeing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the waitlist to be among the first to experience the future of integrated wellness, 
            financial health, and sustainability.
          </p>
          
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-white text-teal-600 hover:bg-gray-100 disabled:bg-gray-200 px-8 py-3 rounded-lg transition-colors flex items-center"
                >
                  {isLoading ? 'Joining...' : 'Get Early Access'}
                  {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                </button>
              </form>
            ) : (
              <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-white">
                <CheckCircle className="inline-block w-5 h-5 mr-2" />
                {message || 'You&apos;re on the list! We&apos;ll be in touch soon.'}
              </div>
            )}
            {!isSubmitted && message && (
              <div className="mt-3 text-red-200 text-sm text-center">
                {message}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interested in partnerships, investment opportunities, or early access? 
              We&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Send us a Message</h3>
                
                {!contactSubmitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="Your full name"
                          required
                          disabled={contactLoading}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="your@email.com"
                          required
                          disabled={contactLoading}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={contactForm.company}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="Your company"
                          disabled={contactLoading}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          disabled={contactLoading}
                        >
                          <option value="">Select a topic</option>
                          <option value="investment">Investment Opportunity</option>
                          <option value="partnership">Partnership</option>
                          <option value="early-access">Early Access</option>
                          <option value="media">Media Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-vertical"
                        placeholder="Tell us about your interest in WellWise..."
                        required
                        disabled={contactLoading}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactLoading}
                      className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white px-8 py-4 rounded-lg transition-colors font-semibold flex items-center justify-center"
                    >
                      {contactLoading ? 'Sending...' : 'Send Message'}
                      {!contactLoading && <ArrowRight className="w-5 h-5 ml-2" />}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600 mb-6">
                      {contactMessage || 'Thank you for reaching out. We&apos;ll get back to you within 24 hours.'}
                    </p>
                    <button
                      onClick={() => {
                        setContactSubmitted(false)
                        setContactMessage('')
                      }}
                      className="text-teal-600 hover:text-teal-700 font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

                {!contactSubmitted && contactMessage && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{contactMessage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/images/wellwise_logo.png" alt="WellWise Logo" width={32} height={32} />
              <span className="text-xl font-bold">WellWise</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 WellWise. Building the future of integrated wellbeing.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

