'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts'
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react'

const categoryData = [
  { name: 'Food', value: 400, fill: '#10b981' },
  { name: 'Transport', value: 300, fill: '#059669' },
  { name: 'Entertainment', value: 200, fill: '#047857' },
  { name: 'Shopping', value: 150, fill: '#065f46' },
  { name: 'Other', value: 100, fill: '#064e3b' },
]

const monthlyData = [
  { month: 'Jan', income: 2000, expenses: 1500 },
  { month: 'Feb', income: 2000, expenses: 1700 },
  { month: 'Mar', income: 2500, expenses: 1400 },
  { month: 'Apr', income: 2000, expenses: 1600 },
  { month: 'May', income: 2500, expenses: 1850 },
]

const savingsData = [
  { month: 'Jan', savings: 500 },
  { month: 'Feb', savings: 300 },
  { month: 'Mar', savings: 1100 },
  { month: 'Apr', savings: 400 },
  { month: 'May', savings: 650 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">Analytics</h1>
        <p className="text-xs md:text-sm text-muted-foreground">Track your spending patterns and financial trends</p>
      </div>

      {/* Time Period Filter */}
      <div className="flex flex-wrap gap-1 md:gap-2">
        <Button variant="outline" size="sm" className="text-xs md:text-sm">This Month</Button>
        <Button variant="outline" size="sm" className="text-xs md:text-sm">Last 3 Months</Button>
        <Button variant="outline" size="sm" className="text-xs md:text-sm">Last 6 Months</Button>
        <Button variant="outline" size="sm" className="text-xs md:text-sm">This Year</Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground flex items-center justify-between">
              Total Spent
              <ArrowDown className="w-3 md:w-4 h-3 md:h-4 text-green-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold">$1,850</div>
            <p className="text-xs text-muted-foreground mt-1">-2.5% vs last month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground flex items-center justify-between">
              Total Income
              <ArrowUp className="w-3 md:w-4 h-3 md:h-4 text-green-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-accent">$2,500</div>
            <p className="text-xs text-muted-foreground mt-1">+5% vs last month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Net Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-600">$650</div>
            <p className="text-xs text-muted-foreground mt-1">+12% vs last month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground">Savings Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">26%</div>
            <p className="text-xs text-muted-foreground mt-1">Target: 30%</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Savings Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={savingsData}>
                <defs>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: `1px solid var(--border)`,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="savings"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSavings)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Income vs Expenses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
              <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--card)',
                  border: `1px solid var(--border)`,
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="income" fill="var(--accent)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expenses" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Insights */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
            <TrendingUp className="w-4 md:w-5 h-4 md:h-5" />
            Financial Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-xs md:text-sm">Your savings rate is 26%, which is above the average. Keep it up!</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-xs md:text-sm">Food spending increased by $100 compared to last month. Consider meal planning.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-xs md:text-sm">You&apos;re on track to reach your $3000 emergency fund goal in 5 months.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
