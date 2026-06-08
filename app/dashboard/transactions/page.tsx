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
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Transactions</h1>
        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
          + Add Transaction
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
        <Input 
          placeholder="Search transactions..." 
          className="border-primary/20 text-sm md:text-base flex-1" 
        />
        <select className="px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-primary/20 bg-background min-w-[140px]">
          <option>All Categories</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Entertainment</option>
        </select>
      </div>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 md:space-y-3">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-3 md:p-4 bg-secondary/50 rounded-lg hover:bg-secondary/80 transition-all gap-2"
              >
                <div className="flex items-center gap-2 md:gap-4 min-w-0">
                  <div className="text-lg md:text-2xl flex-shrink-0">{tx.icon}</div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm md:text-base truncate">{tx.desc}</p>
                    <p className="text-xs text-muted-foreground">{tx.category}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                    className={`font-semibold text-sm md:text-base ${
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
