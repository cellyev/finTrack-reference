'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const notifications = [
  {
    id: 1,
    title: 'Budget Alert',
    message: 'You&apos;ve reached 80% of your food budget',
    time: '2 hours ago',
    icon: '⚠️',
    read: false,
  },
  {
    id: 2,
    title: 'Goal Milestone',
    message: 'You&apos;ve saved 50% toward your vacation goal!',
    time: '1 day ago',
    icon: '🎉',
    read: true,
  },
  {
    id: 3,
    title: 'Weekly Report',
    message: 'Your weekly spending report is ready',
    time: '3 days ago',
    icon: '📊',
    read: true,
  },
  {
    id: 4,
    title: 'Income Received',
    message: 'You received $150 from your part-time job',
    time: '1 week ago',
    icon: '💰',
    read: true,
  },
]

export default function NotificationsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline" className="text-sm">
          Mark all as read
        </Button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`border-primary/20 cursor-pointer hover:bg-secondary/50 transition-all ${
              !notification.read ? 'bg-primary/5' : ''
            }`}
          >
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">{notification.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 rounded-full bg-primary mt-1 ml-2 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full">
        View older notifications
      </Button>
    </div>
  )
}
