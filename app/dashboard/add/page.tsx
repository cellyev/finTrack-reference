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
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Add Entry</h1>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Entry Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <button
              onClick={() => handleTypeChange('expense')}
              className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                type === 'expense'
                  ? 'border-primary bg-primary/10'
                  : 'border-secondary bg-secondary/50'
              }`}
            >
              <p className="text-2xl mb-2">💸</p>
              <p className="font-semibold">Expense</p>
            </button>
            <button
              onClick={() => handleTypeChange('income')}
              className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                type === 'income'
                  ? 'border-primary bg-primary/10'
                  : 'border-secondary bg-secondary/50'
              }`}
            >
              <p className="text-2xl mb-2">💰</p>
              <p className="font-semibold">Income</p>
            </button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  selectedCategory === cat.name
                    ? 'border-primary bg-primary/10'
                    : 'border-secondary bg-secondary/50'
                }`}
              >
                <p className="text-2xl mb-2">{cat.icon}</p>
                <p className="text-xs font-medium">{cat.name}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="What did you spend on?"
                className="border-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="flex items-center">
                <span className="text-2xl mr-2">$</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="border-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                className="border-primary/20"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <textarea
                id="notes"
                placeholder="Add any additional notes..."
                className="w-full px-4 py-2 border border-primary/20 rounded-lg bg-background resize-none"
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Save Entry
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
