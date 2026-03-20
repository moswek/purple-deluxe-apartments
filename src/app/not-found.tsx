import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
        <Frown className="h-24 w-24 text-primary/50 mb-4" />
      <h1 className="text-6xl font-headline font-bold text-primary mb-2">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
      <p className="max-w-md text-lg text-muted-foreground mb-8">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          <Home className="mr-2 h-5 w-5" />
          Go Back to Homepage
        </Link>
      </Button>
    </div>
  );
}
