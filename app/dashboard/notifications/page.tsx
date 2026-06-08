'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertCircle, Zap, TrendingUp, DollarSign, Archive, Check } from 'lucide-react'
import { useState } from 'react'

const notificationCategories = [
  { id: 'alerts', label: 'Alerts', icon: AlertCircle },
  { id: 'milestones', label: 'Milestones', icon: Zap },
  { id: 'reports', label: 'Reports', icon: TrendingUp },
  { id: 'transactions', label: 'Transactions', icon: DollarSign },
]

const notifications = [
  {
    id: 1,
    title: 'Budget Alert',
    message: 'You&apos;ve reached 80% of your food budget for this month',
    time: '2 hours ago',
    category: 'alerts',
    read: false,
  },
  {
    id: 2,
    title: 'Goal Milestone',
    message: 'Congratulations! You&apos;ve saved 50% toward your vacation goal!',
    time: '1 day ago',
    category: 'milestones',
    read: true,
  },
  {
    id: 3,
    title: 'Weekly Report',
    message: 'Your weekly spending report is ready. View your spending patterns and insights',
    time: '3 days ago',
    category: 'reports',
    read: true,
  },
  {
    id: 4,
    title: 'Income Received',
    message: 'You received $150 from your part-time job on May 20',
    time: '1 week ago',
    category: 'transactions',
    read: true,
  },
  {
    id: 5,
    title: 'Subscription Charged',
    message: 'Your Netflix subscription ($15.99) has been charged',
    time: '2 weeks ago',
    category: 'transactions',
    read: true,
  },
]

export default function NotificationsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filter, setFilter] = useState('all')

  const filteredNotifications = notifications.filter(n => {
    if (activeCategory === 'all') return filter === 'all' ? true : filter === 'unread' ? !n.read : n.read
    if (filter === 'all') return n.category === activeCategory
    if (filter === 'unread') return n.category === activeCategory && !n.read
    if (filter === 'read') return n.category === activeCategory && n.read
    return true
  })

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Notifications</h1>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">Stay updated with your financial activity</p>
        </div>
        {unreadCount > 0 && (
          <div className="bg-primary text-primary-foreground px-2 md:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
            {unreadCount} unread
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-1 md:gap-2">
        <Button variant={activeCategory === 'all' ? 'default' : 'outline'} size="sm" className="text-xs md:text-sm" onClick={() => setActiveCategory('all')}>
          All
        </Button>
        {notificationCategories.map(cat => {
          const Icon = cat.icon
          return (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className="gap-1 md:gap-2 text-xs md:text-sm"
            >
              <Icon className="w-3 md:w-4 h-3 md:h-4" />
              {cat.label}
            </Button>
          )
        })}
      </div>

      {/* Filter and Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-secondary/50 p-2 md:p-3 rounded-lg">
        <div className="flex gap-1 md:gap-2">
          <Button variant={filter === 'all' ? 'default' : 'ghost'} size="sm" className="text-xs md:text-sm" onClick={() => setFilter('all')}>
            All
          </Button>
          <Button variant={filter === 'unread' ? 'default' : 'ghost'} size="sm" className="text-xs md:text-sm" onClick={() => setFilter('unread')}>
            Unread
          </Button>
          <Button variant={filter === 'read' ? 'default' : 'ghost'} size="sm" className="text-xs md:text-sm" onClick={() => setFilter('read')}>
            Read
          </Button>
        </div>
        <Button variant="outline" size="sm" className="gap-1 md:gap-2 text-xs md:text-sm">
          <Check className="w-3 md:w-4 h-3 md:h-4" />
          Mark all as read
        </Button>
      </div>

      {/* Notifications List */}
      <div className="space-y-2 md:space-y-3">
        {filteredNotifications.length === 0 ? (
          <Card className="text-center py-8 md:py-12">
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">📭</div>
            <p className="text-xs md:text-sm text-muted-foreground">No notifications to display</p>
          </Card>
        ) : (
          filteredNotifications.map((notification) => {
            const Icon = notificationCategories.find(c => c.id === notification.category)?.icon || AlertCircle
            
            return (
              <Card
                key={notification.id}
                className={`cursor-pointer hover:shadow-md transition-all border-l-4 ${
                  !notification.read
                    ? 'border-l-primary bg-primary/5 hover:bg-primary/10'
                    : 'border-l-border bg-background'
                }`}
              >
                <CardContent className="pt-3 md:pt-4">
                  <div className="flex items-start gap-2 md:gap-4">
                    {/* Icon */}
                    <div className={`w-8 md:w-10 h-8 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      !notification.read
                        ? 'bg-primary/20'
                        : 'bg-secondary/50'
                    }`}>
                      <Icon className="w-4 md:w-5 h-4 md:h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className={`font-semibold text-xs md:text-sm ${!notification.read ? 'text-foreground' : 'text-foreground'}`}>
                            {notification.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                    </div>

                    {/* Actions */}
                    <Button variant="ghost" size="sm" className="flex-shrink-0 p-1">
                      <Archive className="w-3 md:w-4 h-3 md:h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>

      {/* Load More */}
      {filteredNotifications.length > 0 && (
        <Button variant="outline" className="w-full text-xs md:text-sm">
          Load older notifications
        </Button>
      )}
    </div>
  )
}
