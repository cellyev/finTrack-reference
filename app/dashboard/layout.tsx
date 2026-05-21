'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/dashboard/transactions', label: 'Transactions', icon: '📝' },
    { href: '/dashboard/add', label: 'Add Entry', icon: '➕' },
    { href: '/dashboard/reports', label: 'Reports', icon: '📋' },
    { href: '/dashboard/analytics', label: 'Analytics', icon: '📈' },
    { href: '/dashboard/budget', label: 'Budget', icon: '💰' },
    { href: '/dashboard/goals', label: 'Goals', icon: '🎯' },
    { href: '/dashboard/profile', label: 'Profile', icon: '👤' },
    { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
    { href: '/dashboard/notifications', label: 'Notifications', icon: '🔔' },
    { href: '/dashboard/help', label: 'Help', icon: '❓' },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          {sidebarOpen && <h1 className="font-bold text-lg text-sidebar-foreground">FinTrack</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-sidebar-accent rounded-lg"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                sidebarOpen
                  ? 'hover:bg-sidebar-accent'
                  : 'hover:bg-sidebar-accent justify-center'
              } text-sidebar-foreground hover:text-sidebar-primary`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              // Handle logout
            }}
          >
            {sidebarOpen ? 'Logout' : '🚪'}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
