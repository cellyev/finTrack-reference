'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

export default function EditGoalPage() {
  const router = useRouter()
  const [goal, setGoal] = useState({
    name: 'Summer Vacation',
    target: 2000,
    saved: 1200,
    dueDate: '2024-08-01',
  })

  const percentage = (goal.saved / goal.target) * 100

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Edit Goal</h1>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Goal Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Goal Name</Label>
            <Input
              id="name"
              value={goal.name}
              onChange={(e) => setGoal({ ...goal, name: e.target.value })}
              className="border-primary/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="target">Target Amount</Label>
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <Input
                  id="target"
                  type="number"
                  value={goal.target}
                  onChange={(e) => setGoal({ ...goal, target: Number(e.target.value) })}
                  className="border-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={goal.dueDate}
                onChange={(e) => setGoal({ ...goal, dueDate: e.target.value })}
                className="border-primary/20"
              />
            </div>
          </div>

          <div className="space-y-4 p-4 bg-secondary/50 rounded-lg">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Current Progress</span>
                <span className="text-sm font-semibold">{Math.round(percentage)}%</span>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Saved</p>
                <p className="text-lg font-bold">${goal.saved}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Remaining</p>
                <p className="text-lg font-bold">${goal.target - goal.saved}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="addSavings">Add Savings</Label>
            <div className="flex gap-2">
              <Input
                id="addSavings"
                type="number"
                placeholder="Amount"
                className="border-primary/20"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Add
              </Button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 bg-red-50 dark:bg-red-950">
        <CardHeader>
          <CardTitle className="text-red-700 dark:text-red-400">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">
            Delete This Goal
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
