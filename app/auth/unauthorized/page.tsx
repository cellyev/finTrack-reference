import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-primary/20 text-center">
        <CardHeader className="space-y-4">
          <div className="text-6xl">🔐</div>
          <div>
            <CardTitle className="text-3xl">Access Denied</CardTitle>
            <p className="text-muted-foreground mt-2">You need to sign in first</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This page requires authentication. Please sign in to access FinTrack and manage your finances.
          </p>
          <Link href="/auth/login">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="outline" className="w-full">
              Create Account
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
