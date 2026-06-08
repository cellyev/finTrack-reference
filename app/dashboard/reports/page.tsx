'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const weeklyData = [
  { day: 'Mon', spent: 150 },
  { day: 'Tue', spent: 200 },
  { day: 'Wed', spent: 120 },
  { day: 'Thu', spent: 180 },
  { day: 'Fri', spent: 250 },
  { day: 'Sat', spent: 300 },
  { day: 'Sun', spent: 100 },
]

const categoryBreakdown = [
  { category: 'Food', amount: 450, percentage: 45 },
  { category: 'Transport', amount: 200, percentage: 20 },
  { category: 'Entertainment', amount: 150, percentage: 15 },
  { category: 'Other', amount: 200, percentage: 20 },
]

export default function WeeklyReportPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Weekly Report</h1>
        <Button variant="outline" className="w-full sm:w-auto text-xs md:text-sm">Generate PDF</Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Card className="border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Week Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl md:text-3xl font-bold">$1,300</p>
            <p className="text-xs text-muted-foreground mt-1">May 14 - 20, 2024</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Daily Average</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl md:text-3xl font-bold">$186</p>
            <p className="text-xs text-green-600 mt-1">-5% from last week</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Highest Day</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl md:text-3xl font-bold">Saturday</p>
            <p className="text-xs text-muted-foreground mt-1">$300 spent</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl md:text-3xl font-bold">27</p>
            <p className="text-xs text-muted-foreground mt-1">Total for the week</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Daily Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: `1px solid var(--border)`,
                  }}
                />
                <Bar dataKey="spent" fill="var(--primary)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 md:space-y-3">
              {categoryBreakdown.map((cat) => (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs md:text-sm font-medium">{cat.category}</p>
                    <p className="text-xs md:text-sm font-semibold">${cat.amount}</p>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Weekly Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 md:space-y-3">
          <div className="flex items-start gap-2 md:gap-3">
            <span className="text-lg md:text-xl flex-shrink-0">💡</span>
            <p className="text-xs md:text-sm">
              Your spending was 5% lower this week compared to last week. Keep it up!
            </p>
          </div>
          <div className="flex items-start gap-2 md:gap-3">
            <span className="text-lg md:text-xl flex-shrink-0">🎯</span>
            <p className="text-xs md:text-sm">Food spending is your largest category. Consider meal planning to save more.</p>
          </div>
          <div className="flex items-start gap-2 md:gap-3">
            <span className="text-lg md:text-xl flex-shrink-0">📊</span>
            <p className="text-xs md:text-sm">You&apos;re on track to meet your monthly budget goal!</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
        <Button variant="outline" className="sm:flex-1 text-xs md:text-sm">
          Email Report
        </Button>
        <Button className="sm:flex-1 bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm">
          Save as PDF
        </Button>
      </div>
    </div>
  )
}
