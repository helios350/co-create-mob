import { AppLayout, Container, Section, Button, Card, CardContent } from '@/components';
import { WifiOff, RefreshCw, BookOpen, Download } from 'lucide-react';

export default function OfflinePage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <AppLayout showBottomNav={false}>
      <Section variant="muted" padding="xl" className="min-h-screen flex items-center">
        <Container size="md">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-muted rounded-full">
                <WifiOff className="h-16 w-16 text-muted-foreground" />
              </div>
            </div>
            
            <h1 className="text-3xl font-heading font-bold mb-4">
              You're Offline
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              It looks like you've lost your internet connection. Don't worry - you can still access 
              some content that's been saved to your device.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading font-semibold mb-2">Cached Lessons</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access previously downloaded lesson content
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    View Offline Content
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Download className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-heading font-semibold mb-2">Download for Offline</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download lessons when connected for offline access
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    Manage Downloads
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleRetry} size="lg" className="flex items-center">
                <RefreshCw className="mr-2 h-5 w-5" />
                Try Again
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                Go Back
              </Button>
            </div>

            <div className="mt-8 p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">Connection Tips:</h3>
              <ul className="text-sm text-muted-foreground space-y-1 text-left max-w-md mx-auto">
                <li>• Check your Wi-Fi or mobile data connection</li>
                <li>• Make sure airplane mode is turned off</li>
                <li>• Try moving to an area with better signal</li>
                <li>• Restart your browser or app</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </AppLayout>
  );
}