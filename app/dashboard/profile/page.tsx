'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Edit, Lock, Trash2, TrendingUp } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="space-y-8 max-w-3xl">
      {/* Profile Header */}
      <div>
        <h1 className="text-4xl font-bold">Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your account and financial information</p>
      </div>

      {/* User Card */}
      <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center ring-4 ring-primary/20">
              <span className="text-4xl">👤</span>
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">Student Account • Member since January 2024</p>
              <Button variant="outline" size="sm" className="mt-2 gap-2">
                <Edit className="w-3 h-3" />
                Edit Profile Photo
              </Button>
            </div>
          </div>

          <div className="space-y-4 border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" className="border-primary/20" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" defaultValue="john@university.edu" className="border-primary/20" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Input id="university" defaultValue="State University" className="border-primary/20" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" className="border-primary/20" />
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Financial Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Financial Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xs text-muted-foreground font-medium mb-1">Member Since</p>
              <p className="text-lg font-bold">Jan 2024</p>
              <p className="text-xs text-muted-foreground mt-1">5 months ago</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xs text-muted-foreground font-medium mb-1">Transactions</p>
              <p className="text-lg font-bold">127</p>
              <p className="text-xs text-muted-foreground mt-1">Tracked entries</p>
            </div>
            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
              <p className="text-xs text-muted-foreground font-medium mb-1">Total Saved</p>
              <p className="text-lg font-bold text-accent">$2,450</p>
              <p className="text-xs text-muted-foreground mt-1">All time</p>
            </div>
            <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
              <p className="text-xs text-muted-foreground font-medium mb-1">Avg Savings/Month</p>
              <p className="text-lg font-bold text-green-600">$420</p>
              <p className="text-xs text-muted-foreground mt-1">Month average</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20 w-4 h-4" />
              <div>
                <p className="font-medium text-sm">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Receive alerts about your account</p>
              </div>
            </label>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20 w-4 h-4" />
              <div>
                <p className="font-medium text-sm">Budget Alerts</p>
                <p className="text-xs text-muted-foreground">Get notified when approaching limits</p>
              </div>
            </label>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-primary/20 w-4 h-4" />
              <div>
                <p className="font-medium text-sm">Weekly Reports</p>
                <p className="text-xs text-muted-foreground">Summary of your spending activity</p>
              </div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
        <CardHeader>
          <CardTitle className="text-red-700 dark:text-red-400">Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start gap-2 border-red-300 text-red-600 hover:bg-red-100 dark:hover:bg-red-950">
            <Lock className="w-4 h-4" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2 border-red-300 text-red-600 hover:bg-red-100 dark:hover:bg-red-950">
            <Trash2 className="w-4 h-4" />
            Delete Account
          </Button>
          <p className="text-xs text-muted-foreground">
            Deleting your account will permanently remove all your data. This action cannot be undone.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
