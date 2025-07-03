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
            
export default function Test() { return <div>test</div> }
