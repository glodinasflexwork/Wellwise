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
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setMessage(
          data.message || 
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
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a>
              <a href="#problem" className="text-gray-600 hover:text-teal-600 transition-colors">Problem</a>
              <a href="#solution" className="text-gray-600 hover:text-teal-600 transition-colors">Solution</a>
              <a href="/survey" className="text-gray-600 hover:text-teal-600 transition-colors">Survey</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
              <button 
                onClick={() => document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Get Early Access
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-teal-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a>
                <a href="#problem" className="text-gray-600 hover:text-teal-600 transition-colors">Problem</a>
                <a href="#solution" className="text-gray-600 hover:text-teal-600 transition-colors">Solution</a>
                <a href="/survey" className="text-gray-600 hover:text-teal-600 transition-colors">Survey</a>
                <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors text-left"
                >
                  Get Early Access
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            Coming Soon - Join the Waitlist
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The AI-Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Wellbeing Ecosystem
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            WellWise integrates mental health, financial wellness, and sustainability into one intelligent platform. 
            Transform how you and your organization thrive in body, mind, and money.
          </p>

          <div id="email-signup" className="max-w-md mx-auto mb-16">
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  required
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to WellWise!</h3>
                <p className="text-gray-600">{message}</p>
              </div>
            )}

            {!isSubmitted && message && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{message}</p>
              </div>
            )}
          </div>

          {/* Survey CTA */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Help Shape WellWise</h3>
            <p className="text-gray-600 mb-6">
              Take our 5-minute market research survey and help us build the perfect solution for your needs.
            </p>
            <a 
              href="/survey"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              Take Survey
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">€617B</div>
              <div className="text-gray-600">Annual cost of burnout in EU</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">76%</div>
              <div className="text-gray-600">Professionals experience burnout</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">68%</div>
              <div className="text-gray-600">Live paycheck-to-paycheck</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Triple Crisis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern professionals face unprecedented challenges across health, finances, and sustainability - 
              with fragmented solutions that fail to address the interconnected nature of these problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mental Health Crisis</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  76% report workplace burnout
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Rising anxiety and depression
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Work-life balance deteriorating
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Limited access to mental health support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Stress</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  68% live paycheck-to-paycheck
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Rising cost of living pressure
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Lack of financial literacy
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Complex, fragmented financial tools
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sustainability Gap</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  83% want to live sustainably
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Lack of actionable guidance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Climate anxiety increasing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  ESG compliance complexity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The WellWise Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The first integrated platform that seamlessly combines mental health, financial wellness, 
              and sustainability through AI-powered insights and personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Intelligent Wellbeing</h3>
              <p className="text-gray-600 mb-6">AI-powered mental and physical health coaching</p>
              <ul className="space-y-2 text-gray-600">
                <li>24/7 AI wellness coach</li>
                <li>Burnout prediction & prevention</li>
                <li>Personalized interventions</li>
                <li>Mood & stress tracking</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Smart Financial Wellness</h3>
              <p className="text-gray-600 mb-6">Personalized financial planning and guidance</p>
              <ul className="space-y-2 text-gray-600">
                <li>Automated budgeting</li>
                <li>Investment recommendations</li>
                <li>Debt optimization</li>
                <li>Financial stress alerts</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sustainable Living</h3>
              <p className="text-gray-600 mb-6">Environmental impact tracking and optimization</p>
              <ul className="space-y-2 text-gray-600">
                <li>Carbon footprint tracking</li>
                <li>Sustainable choice nudges</li>
                <li>ESG goal setting</li>
                <li>Impact measurement</li>
              </ul>
            </div>
          </div>

          {/* AI Coach Demo */}
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Meet Sage, Your AI Wellness Coach</h3>
              <p className="text-gray-600">Personalized guidance across all three pillars of wellbeing</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 mb-2">
                    "I notice your stress levels have been elevated this week, and your spending on comfort purchases has increased. 
                    Let's work on a 5-minute mindfulness exercise and review your budget goals. Also, choosing that bike commute 
                    yesterday reduced your carbon footprint by 2.3kg CO₂ - great choice!"
                  </p>
                  <div className="text-sm text-gray-500">Sage • Just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why WellWise?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only platform that understands the interconnected nature of your wellbeing, finances, and environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">Cross-domain intelligence that connects your health, wealth, and sustainability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">GDPR-compliant, ethical AI with complete data transparency and control</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Everyone</h3>
              <p className="text-gray-600">Individual and enterprise solutions that scale from personal use to organizations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable Impact</h3>
              <p className="text-gray-600">Clear ROI metrics and impact measurement for individuals and organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Wellbeing?</h2>
          <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
            Join the waitlist to be among the first to experience the future of integrated wellness, financial health, and sustainability.
          </p>
          <button 
            onClick={() => document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
          >
            Get Early Access
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interested in partnerships, investment opportunities, or early access? 
              We'd love to hear from you.
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

