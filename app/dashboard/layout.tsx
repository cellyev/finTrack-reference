'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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

  const bottomNavItems = navItems.slice(0, 5)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile, visible on lg and up */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 z-50 flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-sidebar-accent/20 rounded-lg text-sidebar-foreground"
          aria-label="Close sidebar"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="p-4 md:p-6 border-b border-sidebar-border">
          <h1 className="text-xl md:text-2xl font-bold text-sidebar-primary">FinTrack</h1>
          <p className="text-xs md:text-sm text-sidebar-foreground/60">Financial Freedom</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 md:p-4 space-y-1 md:space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg hover:bg-sidebar-accent/20 transition-colors text-sidebar-foreground hover:text-sidebar-primary text-sm md:text-base"
            >
              <span className="text-lg md:text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full lg:w-auto pb-20 lg:pb-0">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-card border-b border-border sticky top-0 z-30">
          <h1 className="text-lg font-bold text-foreground">FinTrack</h1>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-muted rounded-lg text-foreground"
            aria-label="Open sidebar"
          >
            ☰
          </button>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6">
          {children}
        </main>
      </div>

      {/* Bottom Navigation for Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border flex justify-around z-40">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setSidebarOpen(false)}
            className="flex-1 flex flex-col items-center justify-center py-2 px-2 hover:bg-muted transition-colors text-foreground hover:text-primary"
            aria-label={item.label}
          >
            <span className="text-xl md:text-2xl">{item.icon}</span>
            <span className="text-xs mt-1 text-center line-clamp-1">{item.label.split(' ')[0]}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
