'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const balanceData = [
  { month: 'Jan', balance: 2400 },
  { month: 'Feb', balance: 1398 },
  { month: 'Mar', balance: 9800 },
  { month: 'Apr', balance: 3908 },
  { month: 'May', balance: 4800 },
]

const categoryData = [
  { name: 'Food', value: 400 },
  { name: 'Transport', value: 300 },
  { name: 'Entertainment', value: 200 },
  { name: 'Shopping', value: 150 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
          + Add Entry
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-primary">$5,240</div>
            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold">$1,850</div>
            <p className="text-xs text-muted-foreground mt-1">Spent so far</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-primary">$3,500</div>
            <p className="text-xs text-muted-foreground mt-1">Monthly income</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">Active goals</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Balance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={balanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: `1px solid var(--border)`,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  dot={{ fill: 'var(--primary)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: `1px solid var(--border)`,
                  }}
                />
                <Bar dataKey="value" fill="var(--primary)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 md:space-y-4">
            {[
              { desc: 'Coffee Shop', category: 'Food', amount: '-$5.50', date: 'Today' },
              { desc: 'Bus Pass', category: 'Transport', amount: '-$2.50', date: 'Today' },
              { desc: 'Part-time Job', category: 'Income', amount: '+$150', date: 'Yesterday' },
              { desc: 'Movie Tickets', category: 'Entertainment', amount: '-$20', date: 'Yesterday' },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-2 md:p-3 bg-secondary/50 rounded-lg">
                <div className="min-w-0">
                  <p className="font-medium text-sm md:text-base truncate">{tx.desc}</p>
                  <p className="text-xs text-muted-foreground">{tx.category}</p>
                </div>
                <div className="text-right ml-2">
                  <p className={`font-semibold text-sm md:text-base ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-foreground'}`}>
                    {tx.amount}
                  </p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
