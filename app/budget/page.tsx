'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Edit, MoreVertical, PlusCircle } from 'lucide-react'

const budgets = [
  { category: 'Food', spent: 350, budget: 400, icon: '🍔', trend: 'down' },
  { category: 'Transport', spent: 120, budget: 150, icon: '🚗', trend: 'stable' },
  { category: 'Entertainment', spent: 180, budget: 200, icon: '🎬', trend: 'down' },
  { category: 'Shopping', spent: 210, budget: 200, icon: '🛍️', trend: 'up' },
  { category: 'Subscriptions', spent: 45, budget: 50, icon: '📱', trend: 'stable' },
]

export default function BudgetPage() {
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0)
  const totalBudget = budgets.reduce((sum, b) => sum + b.budget, 0)
  const percentageSpent = (totalSpent / totalBudget) * 100

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Budget</h1>
          <p className="text-muted-foreground mt-1">Manage your spending across categories</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          <PlusCircle className="w-4 h-4" />
          New Budget
        </Button>
      </div>

      {/* Overall Budget Summary */}
      <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
        <CardHeader>
          <CardTitle>Monthly Budget Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
              <p className="text-3xl font-bold">${totalSpent}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Budget</p>
              <p className="text-3xl font-bold text-primary">${totalBudget}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Remaining</p>
              <p className={`text-3xl font-bold ${totalBudget - totalSpent > 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.abs(totalBudget - totalSpent)}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{Math.round(percentageSpent)}% spent</span>
              <span className="text-muted-foreground">{Math.round(100 - percentageSpent)}% remaining</span>
            </div>
            <Progress 
              value={percentageSpent} 
              className="h-3"
            />
          </div>
        </CardContent>
      </Card>

      {/* Budget Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Category Breakdown</h2>
        <div className="space-y-4">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.budget) * 100
            const isOverBudget = budget.spent > budget.budget

            return (
              <Card key={budget.category} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{budget.icon}</span>
                        <div>
                          <p className="font-semibold text-lg">{budget.category}</p>
                          <p className="text-sm text-muted-foreground">
                            ${budget.spent} of ${budget.budget}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className={`text-2xl font-bold min-w-[60px] text-right ${isOverBudget ? 'text-red-600' : 'text-primary'}`}>
                          {Math.round(percentage)}%
                        </p>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <Progress
                      value={Math.min(percentage, 100)}
                      className="h-3"
                    />

                    {/* Footer with status */}
                    <div className="flex items-center justify-between text-sm">
                      {isOverBudget ? (
                        <p className="text-red-600 font-medium">
                          Over budget by ${budget.spent - budget.budget}
                        </p>
                      ) : (
                        <p className="text-muted-foreground">
                          ${budget.budget - budget.spent} available
                        </p>
                      )}
                      <Button variant="outline" size="sm" className="gap-2">
                        <Edit className="w-3 h-3" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Budget Tips */}
      <Card className="bg-accent/5 border-accent/20">
        <CardHeader>
          <CardTitle className="text-base">Budget Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <p className="text-sm">Set realistic budgets based on your average spending</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <p className="text-sm">Review your budgets weekly to stay on track</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <p className="text-sm">Adjust categories if your spending patterns change</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
