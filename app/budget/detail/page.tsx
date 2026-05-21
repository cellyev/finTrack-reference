'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

export default function BudgetDetailPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Food Budget</h1>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
        <CardContent className="pt-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-xs text-muted-foreground">Spent</p>
              <p className="text-2xl font-bold">$350</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Budget</p>
              <p className="text-2xl font-bold text-primary">$400</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Remaining</p>
              <p className="text-2xl font-bold text-green-600">$50</p>
            </div>
          </div>

          <Progress value={87.5} className="h-3" />
          <p className="text-sm text-muted-foreground mt-2">87.5% of budget used</p>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Edit Budget</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="budget">Monthly Budget Limit</Label>
            <div className="flex items-center">
              <span className="mr-2">$</span>
              <Input id="budget" type="number" defaultValue="400" className="border-primary/20" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="alert">Alert at (%)</Label>
            <Input id="alert" type="number" defaultValue="80" className="border-primary/20" />
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Recent Transactions in This Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[
            { desc: 'Coffee Shop', amount: '-$5.50', date: 'Today' },
            { desc: 'Grocery Store', amount: '-$45', date: 'Yesterday' },
            { desc: 'Restaurant', amount: '-$35.50', date: '2 days ago' },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium">{tx.desc}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <p className="font-semibold">{tx.amount}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
