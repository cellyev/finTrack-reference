import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-primary/20 text-center">
        <CardHeader className="space-y-4">
          <div className="text-6xl">🔍</div>
          <div>
            <CardTitle className="text-4xl">404</CardTitle>
            <p className="text-muted-foreground mt-2">Page Not Found</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
          <Link href="/dashboard">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Back to Dashboard
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Go Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
