import { AppLayout, Container, Section, Button, Card, CardContent } from '@/components';
import { AlertTriangle, Home, RefreshCw, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  error?: Error;
  resetError?: () => void;
}

export default function ErrorPage({ error, resetError }: ErrorPageProps) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  const handleRetry = () => {
    if (resetError) {
      resetError();
    } else {
      window.location.reload();
    }
  };

  return (
    <AppLayout showBottomNav={false}>
      <Section variant="muted" padding="xl" className="min-h-screen flex items-center">
        <Container size="md">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-destructive/10 rounded-full">
                <AlertTriangle className="h-16 w-16 text-destructive" />
              </div>
            </div>
            
            <h1 className="text-3xl font-heading font-bold mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We encountered an unexpected error. Don't worry, this usually happens due to a 
              temporary issue and can be resolved quickly.
            </p>

            {error && (
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-left">Error Details:</h3>
                  <div className="bg-muted p-4 rounded-lg text-left">
                    <code className="text-sm text-destructive break-all">
                      {error.message}
                    </code>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={handleRetry} size="lg" className="flex items-center">
                <RefreshCw className="mr-2 h-5 w-5" />
                Try Again
              </Button>
              <Button variant="outline" size="lg" onClick={handleGoHome} className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Go to Dashboard
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <MessageCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact our support team if the problem persists
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Home className="h-8 w-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-heading font-semibold mb-2">Continue Learning</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Go back to your dashboard and continue where you left off
                  </p>
                  <Button variant="outline" className="w-full" onClick={handleGoHome}>
                    Dashboard
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-card rounded-lg">
              <h3 className="font-semibold mb-2">What you can try:</h3>
              <ul className="text-sm text-muted-foreground space-y-1 text-left max-w-md mx-auto">
                <li>• Refresh the page or try again</li>
                <li>• Check your internet connection</li>
                <li>• Clear your browser cache</li>
                <li>• Try using a different browser</li>
                <li>• Contact support if the issue persists</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </AppLayout>
  );
}