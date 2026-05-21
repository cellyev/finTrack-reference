'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const faqs = [
  {
    question: 'How do I add a transaction?',
    answer:
      'Click the "Add Entry" button in the sidebar or on your dashboard to create a new expense or income entry. Choose a category, enter the amount, and save.',
  },
  {
    question: 'How can I set a budget?',
    answer:
      'Go to the Budget section and click "New Budget" to set spending limits for different categories. You&apos;ll receive alerts when you approach your limit.',
  },
  {
    question: 'How do I create a savings goal?',
    answer:
      'Navigate to the Goals section and click "New Goal". Set your target amount, due date, and start saving. Track your progress as you add money toward your goal.',
  },
  {
    question: 'Can I export my data?',
    answer:
      'Yes! Go to Settings and enable "Data export" to download your financial data in CSV format.',
  },
  {
    question: 'How is my data secured?',
    answer:
      'We use industry-standard encryption and secure servers to protect your financial information. Your data is never shared with third parties.',
  },
  {
    question: 'Is FinTrack free?',
    answer:
      'Yes! FinTrack is completely free for all students. We don&apos;t charge any subscription fees or require a credit card.',
  },
]

export default function HelpCenterPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">Find answers to common questions</p>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search help articles..."
          className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-background"
        />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button className="p-4 rounded-lg border border-primary/20 bg-secondary/50 hover:bg-secondary transition-all text-left">
          <p className="text-2xl mb-2">💳</p>
          <p className="text-sm font-medium">Getting Started</p>
        </button>
        <button className="p-4 rounded-lg border border-primary/20 bg-secondary/50 hover:bg-secondary transition-all text-left">
          <p className="text-2xl mb-2">📊</p>
          <p className="text-sm font-medium">Analytics</p>
        </button>
        <button className="p-4 rounded-lg border border-primary/20 bg-secondary/50 hover:bg-secondary transition-all text-left">
          <p className="text-2xl mb-2">🔒</p>
          <p className="text-sm font-medium">Security</p>
        </button>
        <button className="p-4 rounded-lg border border-primary/20 bg-secondary/50 hover:bg-secondary transition-all text-left">
          <p className="text-2xl mb-2">📞</p>
          <p className="text-sm font-medium">Contact</p>
        </button>
      </div>

      {/* FAQs */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <Card key={index} className="border-primary/20">
            <CardContent className="pt-6">
              <details className="group">
                <summary className="font-semibold cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{faq.answer}</p>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Support */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle>Didn&apos;t find your answer?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Our support team is here to help! Contact us through any of these channels:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              📧 Email Support
            </Button>
            <Button variant="outline" className="w-full">
              💬 Live Chat
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
