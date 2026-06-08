'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MessageSquare, Mail, Phone, BookOpen, Shield, BarChart3, Zap } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How do I add a transaction?',
    answer:
      'Click the "Add Entry" button in the sidebar or on your dashboard to create a new expense or income entry. Choose a category, enter the amount, date, and optional notes. Click save to add it to your transactions list.',
    category: 'Getting Started',
  },
  {
    question: 'How can I set a budget?',
    answer:
      'Go to the Budget section and click "New Budget" to set spending limits for different categories. You&apos;ll receive alerts when you approach your limit, helping you stay on track.',
    category: 'Budgeting',
  },
  {
    question: 'How do I create a savings goal?',
    answer:
      'Navigate to the Goals section and click "New Goal". Set your target amount, due date, and milestones. You can track your progress as you add money toward your goal.',
    category: 'Goals',
  },
  {
    question: 'Can I export my data?',
    answer:
      'Yes! Go to Settings and enable "Data export" to download your financial data in CSV format. This allows you to backup or analyze your data elsewhere.',
    category: 'Data & Privacy',
  },
  {
    question: 'How is my data secured?',
    answer:
      'We use industry-standard encryption and secure servers to protect your financial information. Your data is encrypted both in transit and at rest, and never shared with third parties.',
    category: 'Security',
  },
  {
    question: 'Is FinTrack free?',
    answer:
      'Yes! FinTrack is completely free for all students. We don&apos;t charge any subscription fees or require a credit card. All features are available to you at no cost.',
    category: 'Billing',
  },
]

const categories = [
  { id: 'getting-started', label: 'Getting Started', icon: BookOpen, description: 'Learn the basics' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, description: 'Understand your data' },
  { id: 'security', label: 'Security', icon: Shield, description: 'Keep data safe' },
  { id: 'features', label: 'Features', icon: Zap, description: 'Explore features' },
]

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 md:space-y-3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Help Center</h1>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground">Find answers to common questions and get support</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search help articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9 md:pl-12 py-4 md:py-6 text-sm md:text-base border-primary/20"
        />
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-base md:text-lg font-bold mb-2 md:mb-4">Browse by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`p-2 md:p-4 rounded-lg border-2 transition-all text-center ${
              selectedCategory === 'all'
                ? 'border-primary bg-primary/10'
                : 'border-border bg-background hover:bg-secondary'
            }`}
          >
            <p className="text-lg md:text-2xl mb-1">📚</p>
            <p className="text-xs md:text-sm font-medium">All</p>
          </button>
          {categories.map(cat => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.label)}
                className={`p-2 md:p-4 rounded-lg border-2 transition-all text-center ${
                  selectedCategory === cat.label
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-background hover:bg-secondary'
                }`}
              >
                <Icon className="w-4 md:w-6 h-4 md:h-6 mx-auto mb-1" />
                <p className="text-xs md:text-sm font-medium line-clamp-1">{cat.label}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
          Frequently Asked Questions {searchTerm && `(${filteredFaqs.length})`}
        </h2>

        {filteredFaqs.length === 0 ? (
          <Card className="text-center py-8 md:py-12">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">🔍</div>
            <p className="text-xs md:text-sm text-muted-foreground">No articles match your search</p>
            <p className="text-xs text-muted-foreground mt-2">Try different keywords or browse categories</p>
          </Card>
        ) : (
          <div className="space-y-2 md:space-y-3">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4 md:pt-6">
                  <details className="group">
                    <summary className="font-semibold cursor-pointer flex items-center justify-between hover:text-primary transition-colors text-sm md:text-base">
                      <span className="text-left">{faq.question}</span>
                      <span className="group-open:rotate-180 transition-transform text-primary flex-shrink-0 ml-2">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t space-y-2 md:space-y-3">
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                      <div className="inline-block px-2 md:px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
                        {faq.category}
                      </div>
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Support Section */}
      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg md:text-2xl">Didn&apos;t find your answer?</CardTitle>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">Our support team is here to help you 24/7</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
            <Card className="bg-background border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6 text-center">
                <Mail className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-2 md:mb-3 text-primary" />
                <p className="font-semibold text-sm md:text-base mb-1 md:mb-2">Email Support</p>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">support@fintrack.com</p>
                <Button variant="outline" className="w-full gap-2 text-xs md:text-sm">
                  <Mail className="w-3 md:w-4 h-3 md:h-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6 text-center">
                <MessageSquare className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-2 md:mb-3 text-accent" />
                <p className="font-semibold text-sm md:text-base mb-1 md:mb-2">Live Chat</p>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">Chat with our team</p>
                <Button variant="outline" className="w-full gap-2 text-xs md:text-sm">
                  <MessageSquare className="w-3 md:w-4 h-3 md:h-4" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 md:pt-6 text-center">
                <Phone className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-2 md:mb-3 text-green-600" />
                <p className="font-semibold text-sm md:text-base mb-1 md:mb-2">Call Us</p>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">1-800-FINTRACK</p>
                <Button variant="outline" className="w-full gap-2 text-xs md:text-sm">
                  <Phone className="w-3 md:w-4 h-3 md:h-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Community */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Join Our Community</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs md:text-sm text-muted-foreground mb-4">
            Connect with other students, share tips, and learn best practices for managing your finances.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-xs md:text-sm">
            <MessageSquare className="w-3 md:w-4 h-3 md:h-4" />
            Join Community Forum
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
