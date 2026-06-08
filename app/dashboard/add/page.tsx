'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const expenseCategories = [
  { name: 'Food', icon: '🍔' },
  { name: 'Transport', icon: '🚗' },
  { name: 'Entertainment', icon: '🎬' },
  { name: 'Shopping', icon: '🛍️' },
  { name: 'Education', icon: '📚' },
  { name: 'Health', icon: '💊' },
  { name: 'Subscriptions', icon: '📱' },
  { name: 'Other', icon: '📦' },
]

const incomeCategories = [
  { name: 'Salary', icon: '💼' },
  { name: 'Freelance', icon: '💻' },
  { name: 'Scholarship', icon: '🎓' },
  { name: 'Bonus', icon: '🎁' },
  { name: 'Investment', icon: '📈' },
  { name: 'Gift', icon: '🎉' },
  { name: 'Refund', icon: '↩️' },
  { name: 'Other', icon: '📦' },
]

export default function AddEntryPage() {
  const router = useRouter()
  const [type, setType] = useState<'expense' | 'income'>('expense')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = type === 'expense' ? expenseCategories : incomeCategories

  const handleTypeChange = (newType: 'expense' | 'income') => {
    setType(newType)
    setSelectedCategory(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Add Entry</h1>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Entry Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 md:gap-4">
            <button
              onClick={() => handleTypeChange('expense')}
              className={`flex-1 p-3 md:p-4 rounded-lg border-2 transition-all ${
                type === 'expense'
                  ? 'border-primary bg-primary/10'
                  : 'border-secondary bg-secondary/50'
              }`}
            >
              <p className="text-xl md:text-2xl mb-1 md:mb-2">💸</p>
              <p className="font-semibold text-sm md:text-base">Expense</p>
            </button>
            <button
              onClick={() => handleTypeChange('income')}
              className={`flex-1 p-3 md:p-4 rounded-lg border-2 transition-all ${
                type === 'income'
                  ? 'border-primary bg-primary/10'
                  : 'border-secondary bg-secondary/50'
              }`}
            >
              <p className="text-xl md:text-2xl mb-1 md:mb-2">💰</p>
              <p className="font-semibold text-sm md:text-base">Income</p>
            </button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`p-2 md:p-4 rounded-lg border-2 text-center transition-all ${
                  selectedCategory === cat.name
                    ? 'border-primary bg-primary/10'
                    : 'border-secondary bg-secondary/50'
                }`}
              >
                <p className="text-lg md:text-2xl mb-1">{cat.icon}</p>
                <p className="text-xs font-medium line-clamp-1">{cat.name}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm md:text-base">Description</Label>
              <Input
                id="description"
                placeholder="What did you spend on?"
                className="border-primary/20 text-sm md:text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm md:text-base">Amount</Label>
              <div className="flex items-center">
                <span className="text-xl md:text-2xl mr-2">$</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="border-primary/20 text-sm md:text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm md:text-base">Date</Label>
              <Input
                id="date"
                type="date"
                className="border-primary/20 text-sm md:text-base"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm md:text-base">Notes (Optional)</Label>
              <textarea
                id="notes"
                placeholder="Add any additional notes..."
                className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-primary/20 rounded-lg bg-background resize-none"
                rows={3}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-4">
              <Button variant="outline" className="sm:flex-1 text-sm md:text-base" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" className="sm:flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base">
                Save Entry
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
