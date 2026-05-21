'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function SettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* Display Settings */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Display</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
            </div>
            <select className="px-4 py-2 rounded-lg border border-primary/20 bg-background">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Currency</p>
              <p className="text-sm text-muted-foreground">Set your default currency</p>
            </div>
            <select className="px-4 py-2 rounded-lg border border-primary/20 bg-background">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Language</p>
              <p className="text-sm text-muted-foreground">Choose your language</p>
            </div>
            <select className="px-4 py-2 rounded-lg border border-primary/20 bg-background">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20" />
              <span>Two-factor authentication</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-primary/20" />
              <span>Data export</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20" />
              <span>Analytics tracking</span>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20" />
              <span>Budget alerts</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20" />
              <span>Goal milestones</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-primary/20" />
              <span>Weekly reports</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20" />
              <span>Email notifications</span>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* App Version */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">App Version</span>
            <span className="font-medium">1.0.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Last Updated</span>
            <span className="font-medium">May 2024</span>
          </div>
          <Button variant="outline" className="w-full mt-4">
            Check for Updates
          </Button>
        </CardContent>
      </Card>

      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Save Settings
      </Button>
    </div>
  )
}
