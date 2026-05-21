'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const goals = [
  { name: 'Summer Vacation', target: 2000, saved: 1200, dueDate: '2024-08-01', icon: '✈️' },
  { name: 'New Laptop', target: 1500, saved: 800, dueDate: '2024-09-01', icon: '💻' },
  { name: 'Emergency Fund', target: 3000, saved: 1500, dueDate: '2024-12-01', icon: '🆘' },
]

export default function GoalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Savings Goals</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          + New Goal
        </Button>
      </div>

      {/* Goal Cards */}
      <div className="space-y-4">
        {goals.map((goal) => {
          const percentage = (goal.saved / goal.target) * 100
          const remaining = goal.target - goal.saved

          return (
            <Card key={goal.name} className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{goal.icon}</span>
                    <div>
                      <p className="text-lg font-semibold">{goal.name}</p>
                      <p className="text-sm text-muted-foreground">Due {goal.dueDate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">${goal.saved}</p>
                    <p className="text-sm text-muted-foreground">of ${goal.target}</p>
                  </div>
                </div>

                <Progress value={percentage} className="h-2 mb-2" />

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {Math.round(percentage)}% Complete
                  </p>
                  <p className="text-sm font-medium">
                    ${remaining.toFixed(2)} to go
                  </p>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button variant="outline" className="flex-1 text-sm">
                    Edit
                  </Button>
                  <Button variant="outline" className="flex-1 text-sm">
                    Add Savings
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Goal Tips */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-base">Tips for Success</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="text-primary font-bold">•</span>
            <p className="text-sm">Set realistic goals with specific end dates</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-primary font-bold">•</span>
            <p className="text-sm">Break down large goals into smaller milestones</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-primary font-bold">•</span>
            <p className="text-sm">Track progress regularly to stay motivated</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
