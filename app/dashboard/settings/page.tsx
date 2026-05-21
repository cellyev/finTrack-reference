'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Palette, Lock, Bell, Info } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [theme, setTheme] = useState('light')
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState('en')

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Customize your FinTrack experience</p>
      </div>

      {/* Display Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Display Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label className="text-base font-semibold">Theme</Label>
            <p className="text-sm text-muted-foreground">Choose your preferred color theme</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'light', label: 'Light', icon: '☀️' },
                { id: 'dark', label: 'Dark', icon: '🌙' },
                { id: 'auto', label: 'Auto', icon: '🔄' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-center ${
                    theme === t.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-background hover:bg-secondary'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{t.icon}</span>
                  <p className="font-medium text-sm">{t.label}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t space-y-3">
            <Label className="text-base font-semibold">Currency</Label>
            <p className="text-sm text-muted-foreground">Set your default currency</p>
            <select 
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground"
            >
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>CAD (C$)</option>
              <option>AUD (A$)</option>
            </select>
          </div>

          <div className="pt-4 border-t space-y-3">
            <Label className="text-base font-semibold">Language</Label>
            <p className="text-sm text-muted-foreground">Select your language</p>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-background text-foreground"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Privacy & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-lg">🔐</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Add extra security to your account</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-lg">📊</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Data Export</p>
                <p className="text-xs text-muted-foreground">Download your financial data</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-lg">👁️</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Analytics Tracking</p>
                <p className="text-xs text-muted-foreground">Help us improve with usage data</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div>
              <p className="font-semibold text-sm">Budget Alerts</p>
              <p className="text-xs text-muted-foreground">When you approach spending limits</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div>
              <p className="font-semibold text-sm">Goal Milestones</p>
              <p className="text-xs text-muted-foreground">Celebrate your saving achievements</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div>
              <p className="font-semibold text-sm">Weekly Reports</p>
              <p className="text-xs text-muted-foreground">Your spending summary every week</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div>
              <p className="font-semibold text-sm">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Get updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            About
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <span className="text-muted-foreground">App Version</span>
            <span className="font-medium bg-primary/10 px-3 py-1 rounded-lg text-sm">1.0.0</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <span className="text-muted-foreground">Last Updated</span>
            <span className="font-medium">May 2024</span>
          </div>
          <Button variant="outline" className="w-full">
            Check for Updates
          </Button>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t">
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
          Save Settings
        </Button>
      </div>
    </div>
  )
}
