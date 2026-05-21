'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ProfilePage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>

      {/* Profile Info */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">Student Account</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="John Doe" className="border-primary/20" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" defaultValue="john@university.edu" className="border-primary/20" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="university">University</Label>
            <Input id="university" defaultValue="State University" className="border-primary/20" />
          </div>

          <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
            Update Profile
          </Button>
        </CardContent>
      </Card>

      {/* Financial Summary */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Member Since</p>
              <p className="font-semibold">January 2024</p>
            </div>
            <div className="p-3 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Total Transactions</p>
              <p className="font-semibold">127</p>
            </div>
            <div className="p-3 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Total Saved</p>
              <p className="font-semibold">$2,450</p>
            </div>
            <div className="p-3 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground">Avg Monthly Savings</p>
              <p className="font-semibold">$420</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20" />
              <span>Email notifications</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" defaultChecked className="rounded border-primary/20" />
              <span>Budget alerts</span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-primary/20" />
              <span>Weekly reports</span>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-red-200 bg-red-50 dark:bg-red-950">
        <CardHeader>
          <CardTitle className="text-red-700 dark:text-red-400">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">
            Change Password
          </Button>
          <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
