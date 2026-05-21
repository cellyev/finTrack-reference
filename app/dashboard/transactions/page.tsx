'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const transactions = [
  { id: 1, desc: 'Coffee Shop', category: 'Food', amount: -5.5, date: '2024-05-20', icon: '☕' },
  { id: 2, desc: 'Bus Pass', category: 'Transport', amount: -2.5, date: '2024-05-20', icon: '🚌' },
  { id: 3, desc: 'Part-time Job', category: 'Income', amount: 150, date: '2024-05-19', icon: '💼' },
  { id: 4, desc: 'Movie Tickets', category: 'Entertainment', amount: -20, date: '2024-05-19', icon: '🎬' },
  { id: 5, desc: 'Grocery Store', category: 'Food', amount: -45, date: '2024-05-18', icon: '🛒' },
]

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          + Add Transaction
        </Button>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search transactions..." className="border-primary/20" />
        <select className="px-4 py-2 rounded-lg border border-primary/20 bg-background">
          <option>All Categories</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Entertainment</option>
        </select>
      </div>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary/80 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{tx.icon}</div>
                  <div>
                    <p className="font-medium">{tx.desc}</p>
                    <p className="text-xs text-muted-foreground">{tx.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      tx.amount > 0 ? 'text-green-600' : 'text-foreground'
                    }`}
                  >
                    {tx.amount > 0 ? '+' : ''} ${Math.abs(tx.amount).toFixed(2)}
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
