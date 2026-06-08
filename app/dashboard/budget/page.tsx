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
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Budget</h1>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">Manage your spending across categories</p>
        </div>
        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          <PlusCircle className="w-4 h-4" />
          New Budget
        </Button>
      </div>

      {/* Overall Budget Summary */}
      <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Monthly Budget Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Total Spent</p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold">${totalSpent}</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Total Budget</p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">${totalBudget}</p>
            </div>
            <div>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Remaining</p>
              <p className={`text-xl md:text-2xl lg:text-3xl font-bold ${totalBudget - totalSpent > 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.abs(totalBudget - totalSpent)}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs md:text-sm">
              <span>{Math.round(percentageSpent)}% spent</span>
              <span className="text-muted-foreground">{Math.round(100 - percentageSpent)}% remaining</span>
            </div>
            <Progress 
              value={percentageSpent} 
              className="h-2 md:h-3"
            />
          </div>
        </CardContent>
      </Card>

      {/* Budget Categories */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Category Breakdown</h2>
        <div className="space-y-3 md:space-y-4">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.budget) * 100
            const isOverBudget = budget.spent > budget.budget

            return (
              <Card key={budget.category} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4 md:pt-6">
                  <div className="space-y-3 md:space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 md:gap-3 min-w-0">
                        <span className="text-lg md:text-3xl flex-shrink-0">{budget.icon}</span>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm md:text-lg">{budget.category}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">
                            ${budget.spent} of ${budget.budget}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                        <p className={`text-lg md:text-2xl font-bold min-w-[50px] text-right ${isOverBudget ? 'text-red-600' : 'text-primary'}`}>
                          {Math.round(percentage)}%
                        </p>
                        <Button variant="ghost" size="sm" className="p-1 md:p-2">
                          <MoreVertical className="w-3 md:w-4 h-3 md:h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <Progress
                      value={Math.min(percentage, 100)}
                      className="h-2 md:h-3"
                    />

                    {/* Footer with status */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs md:text-sm">
                      {isOverBudget ? (
                        <p className="text-red-600 font-medium">
                          Over budget by ${budget.spent - budget.budget}
                        </p>
                      ) : (
                        <p className="text-muted-foreground">
                          ${budget.budget - budget.spent} available
                        </p>
                      )}
                      <Button variant="outline" size="sm" className="gap-1 md:gap-2 text-xs md:text-sm">
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
          <CardTitle className="text-base md:text-lg">Budget Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 md:space-y-3">
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
            <p className="text-xs md:text-sm">Set realistic budgets based on your average spending</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
            <p className="text-xs md:text-sm">Review your budgets weekly to stay on track</p>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
            <p className="text-xs md:text-sm">Adjust categories if your spending patterns change</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
