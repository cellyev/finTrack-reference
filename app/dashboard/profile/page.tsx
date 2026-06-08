'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Edit, Lock, Trash2, TrendingUp } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="space-y-4 md:space-y-6 lg:space-y-8 max-w-3xl">
      {/* Profile Header */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Profile</h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">Manage your account and financial information</p>
      </div>

      {/* User Card */}
      <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
            <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-primary/30 flex items-center justify-center ring-4 ring-primary/20 flex-shrink-0">
              <span className="text-2xl md:text-4xl">👤</span>
            </div>
            <div className="flex-1">
              <p className="text-lg md:text-xl font-semibold">John Doe</p>
              <p className="text-xs md:text-sm text-muted-foreground">Student Account • Member since January 2024</p>
              <Button variant="outline" size="sm" className="mt-2 gap-2 text-xs md:text-sm">
                <Edit className="w-3 h-3" />
                Edit Profile Photo
              </Button>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 border-t pt-4 md:pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-1 md:space-y-2">
                <Label htmlFor="name" className="text-xs md:text-sm">Full Name</Label>
                <Input id="name" defaultValue="John Doe" className="border-primary/20 text-sm md:text-base" />
              </div>

              <div className="space-y-1 md:space-y-2">
                <Label htmlFor="email" className="text-xs md:text-sm">Email Address</Label>
                <Input id="email" defaultValue="john@university.edu" className="border-primary/20 text-sm md:text-base" />
              </div>

              <div className="space-y-1 md:space-y-2">
                <Label htmlFor="university" className="text-xs md:text-sm">University</Label>
                <Input id="university" defaultValue="State University" className="border-primary/20 text-sm md:text-base" />
              </div>

              <div className="space-y-1 md:space-y-2">
                <Label htmlFor="phone" className="text-xs md:text-sm">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" className="border-primary/20 text-sm md:text-base" />
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Financial Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
            <TrendingUp className="w-4 md:w-5 h-4 md:h-5" />
            Financial Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xs text-muted-foreground font-medium mb-1">Member Since</p>
              <p className="text-lg md:text-xl font-bold">Jan 2024</p>
              <p className="text-xs text-muted-foreground mt-1">5 months ago</p>
            </div>
            <div className="p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xs text-muted-foreground font-medium mb-1">Transactions</p>
              <p className="text-lg md:text-xl font-bold">127</p>
              <p className="text-xs text-muted-foreground mt-1">Tracked entries</p>
            </div>
            <div className="p-3 md:p-4 bg-accent/5 rounded-lg border border-accent/20">
              <p className="text-xs text-muted-foreground font-medium mb-1">Total Saved</p>
              <p className="text-lg md:text-xl font-bold text-accent">$2,450</p>
              <p className="text-xs text-muted-foreground mt-1">All time</p>
            </div>
            <div className="p-3 md:p-4 bg-green-500/5 rounded-lg border border-green-500/20">
              <p className="text-xs text-muted-foreground font-medium mb-1">Avg Savings/Month</p>
              <p className="text-lg md:text-xl font-bold text-green-600">$420</p>
              <p className="text-xs text-muted-foreground mt-1">Month average</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 md:space-y-3">
          <div className="flex items-start sm:items-center justify-start sm:justify-between p-2 md:p-3 bg-secondary/50 rounded-lg gap-2">
            <label className="flex items-center gap-2 md:gap-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20 w-4 h-4" />
              <div>
                <p className="font-medium text-xs md:text-sm">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Receive alerts about your account</p>
              </div>
            </label>
          </div>
          <div className="flex items-start sm:items-center justify-start sm:justify-between p-2 md:p-3 bg-secondary/50 rounded-lg gap-2">
            <label className="flex items-center gap-2 md:gap-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20 w-4 h-4" />
              <div>
                <p className="font-medium text-xs md:text-sm">Budget Alerts</p>
                <p className="text-xs text-muted-foreground">Get notified when approaching limits</p>
              </div>
            </label>
          </div>
          <div className="flex items-start sm:items-center justify-start sm:justify-between p-2 md:p-3 bg-secondary/50 rounded-lg gap-2">
            <label className="flex items-center gap-2 md:gap-3">
              <input type="checkbox" className="rounded border-primary/20 w-4 h-4" />
              <div>
                <p className="font-medium text-xs md:text-sm">Weekly Reports</p>
                <p className="text-xs text-muted-foreground">Summary of your spending activity</p>
              </div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
        <CardHeader>
          <CardTitle className="text-red-700 dark:text-red-400 text-lg md:text-xl">Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 md:space-y-3">
          <Button variant="outline" className="w-full justify-start gap-2 border-red-300 text-red-600 hover:bg-red-100 dark:hover:bg-red-950 text-xs md:text-sm">
            <Lock className="w-3 md:w-4 h-3 md:h-4" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2 border-red-300 text-red-600 hover:bg-red-100 dark:hover:bg-red-950 text-xs md:text-sm">
            <Trash2 className="w-3 md:w-4 h-3 md:h-4" />
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
