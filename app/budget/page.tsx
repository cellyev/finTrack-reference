'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const budgets = [
  { category: 'Food', spent: 350, budget: 400, icon: '🍔' },
  { category: 'Transport', spent: 120, budget: 150, icon: '🚗' },
  { category: 'Entertainment', spent: 180, budget: 200, icon: '🎬' },
  { category: 'Shopping', spent: 210, budget: 200, icon: '🛍️' },
  { category: 'Subscriptions', spent: 45, budget: 50, icon: '📱' },
]

export default function BudgetPage() {
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0)
  const totalBudget = budgets.reduce((sum, b) => sum + b.budget, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Budget</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          + New Budget
        </Button>
      </div>

      {/* Overall Budget */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
        <CardHeader>
          <CardTitle>Monthly Budget Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <p className="text-3xl font-bold">${totalSpent}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Of Budget</p>
              <p className="text-3xl font-bold text-primary">${totalBudget}</p>
            </div>
          </div>
          <Progress value={(totalSpent / totalBudget) * 100} className="h-3" />
          <p className="text-sm text-muted-foreground">
            {totalBudget - totalSpent > 0
              ? `$${totalBudget - totalSpent} remaining`
              : `$${Math.abs(totalBudget - totalSpent)} over budget`}
          </p>
        </CardContent>
      </Card>

      {/* Individual Budgets */}
      <div className="space-y-4">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.budget) * 100
          const isOverBudget = budget.spent > budget.budget

          return (
            <Card key={budget.category} className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{budget.icon}</span>
                    <div>
                      <p className="font-semibold">{budget.category}</p>
                      <p className="text-sm text-muted-foreground">
                        ${budget.spent} of ${budget.budget}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${isOverBudget ? 'text-red-600' : 'text-primary'}`}>
                      {Math.round(percentage)}%
                    </p>
                  </div>
                </div>
                <Progress
                  value={Math.min(percentage, 100)}
                  className="h-2"
                />
                {isOverBudget && (
                  <p className="text-xs text-red-600 mt-2">
                    Over budget by ${budget.spent - budget.budget}
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
