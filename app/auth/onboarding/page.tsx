'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const steps = [
  {
    title: 'Financial Profile',
    description: 'Tell us about your financial situation',
    fields: [
      { name: 'monthlyIncome', label: 'Monthly Income', type: 'number', placeholder: '$0' },
      { name: 'savingsGoal', label: 'Monthly Savings Goal', type: 'number', placeholder: '$0' },
    ],
  },
  {
    title: 'Spending Categories',
    description: 'Select your main spending categories',
    categories: [
      'Food & Dining',
      'Transportation',
      'Entertainment',
      'Shopping',
      'Subscriptions',
      'Education',
    ],
  },
  {
    title: 'Budget Setup',
    description: 'Set your initial budget limits',
    fields: [
      { name: 'foodBudget', label: 'Food & Dining Budget', type: 'number', placeholder: '$0' },
      { name: 'transportBudget', label: 'Transportation Budget', type: 'number', placeholder: '$0' },
    ],
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push('/dashboard')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const step = steps[currentStep]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-primary/20">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{step.title}</h2>
              <p className="text-muted-foreground mt-1">{step.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-primary">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {step.fields && (
            <div className="space-y-4">
              {step.fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="border-primary/20"
                  />
                </div>
              ))}
            </div>
          )}

          {step.categories && (
            <div className="grid grid-cols-2 gap-3">
              {step.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    selectedCategories.includes(category)
                      ? 'border-primary bg-primary/10'
                      : 'border-secondary bg-secondary/50'
                  }`}
                >
                  <p className="font-medium text-sm">{category}</p>
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
              className="flex-1"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {currentStep === steps.length - 1 ? 'Complete Setup' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
