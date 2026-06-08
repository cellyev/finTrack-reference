'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { PlusCircle, Calendar, Target } from 'lucide-react'

const goals = [
  { name: 'Summer Vacation', target: 2000, saved: 1200, dueDate: '2024-08-01', icon: '✈️', milestones: [
    { amount: 500, date: '2024-06-01', completed: true },
    { amount: 1000, date: '2024-07-01', completed: true },
    { amount: 1500, date: '2024-07-15', completed: false },
    { amount: 2000, date: '2024-08-01', completed: false },
  ]},
  { name: 'New Laptop', target: 1500, saved: 800, dueDate: '2024-09-01', icon: '💻', milestones: [
    { amount: 500, date: '2024-07-01', completed: true },
    { amount: 1000, date: '2024-08-01', completed: false },
    { amount: 1500, date: '2024-09-01', completed: false },
  ]},
  { name: 'Emergency Fund', target: 3000, saved: 1500, dueDate: '2024-12-01', icon: '🆘', milestones: [
    { amount: 1000, date: '2024-08-01', completed: true },
    { amount: 2000, date: '2024-10-01', completed: false },
    { amount: 3000, date: '2024-12-01', completed: false },
  ]},
]

export default function GoalsPage() {
  return (
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Savings Goals</h1>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">Track your progress toward financial goals</p>
        </div>
        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          <PlusCircle className="w-4 h-4" />
          New Goal
        </Button>
      </div>

      {/* Goal Cards */}
      <div className="space-y-4 md:space-y-6">
        {goals.map((goal) => {
          const percentage = (goal.saved / goal.target) * 100
          const remaining = goal.target - goal.saved
          const daysLeft = Math.ceil((new Date(goal.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
          const monthsLeft = Math.ceil(daysLeft / 30)

          return (
            <Card key={goal.name} className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="pt-4 md:pt-6">
                <div className="space-y-4 md:space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                    <span className="text-3xl md:text-4xl flex-shrink-0">{goal.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-base md:text-lg font-semibold">{goal.name}</p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-1 text-xs md:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Target className="w-3 md:w-4 h-3 md:h-4" />
                          <span>${goal.target}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 md:w-4 h-3 md:h-4" />
                          <span>{monthsLeft} months left</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl md:text-3xl font-bold text-primary">${goal.saved}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">${remaining.toFixed(2)} to go</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="font-medium">{Math.round(percentage)}% Complete</span>
                      <span className="text-muted-foreground">${goal.saved} saved</span>
                    </div>
                    <Progress value={percentage} className="h-2 md:h-3" />
                  </div>

                  {/* Milestones */}
                  <div>
                    <p className="text-xs md:text-sm font-semibold mb-2 md:mb-3">Milestones</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      {goal.milestones.map((milestone, idx) => (
                        <div key={idx} className={`p-2 md:p-3 rounded-lg border-2 text-center transition-all ${
                          milestone.completed 
                            ? 'bg-primary/10 border-primary' 
                            : 'bg-muted/50 border-muted'
                        }`}>
                          <p className="text-xs md:text-sm font-medium">${milestone.amount}</p>
                          <p className="text-xs text-muted-foreground">{new Date(milestone.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                          {milestone.completed && <p className="text-xs text-primary font-semibold mt-1">✓ Done</p>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 md:pt-4 border-t">
                    <Button variant="outline" className="sm:flex-1 text-xs md:text-sm" size="sm">
                      Edit Goal
                    </Button>
                    <Button className="sm:flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm" size="sm">
                      Add Savings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Goal Tips */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Tips for Success</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 md:space-y-3">
          <div className="flex items-start gap-2 md:gap-3">
            <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
            <p className="text-xs md:text-sm">Set realistic goals with specific end dates to stay motivated</p>
          </div>
          <div className="flex items-start gap-2 md:gap-3">
            <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
            <p className="text-xs md:text-sm">Break down large goals into smaller milestones for better tracking</p>
          </div>
          <div className="flex items-start gap-2 md:gap-3">
            <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
            <p className="text-xs md:text-sm">Review progress regularly and adjust your savings plan if needed</p>
          </div>
          <div className="flex items-start gap-2 md:gap-3">
            <span className="text-primary font-bold text-lg flex-shrink-0">•</span>
            <p className="text-xs md:text-sm">Automate savings contributions to stay consistent</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
