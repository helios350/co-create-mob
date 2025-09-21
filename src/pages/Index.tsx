import { useNavigate } from 'react-router-dom';
import { AppLayout, Container, Section, Button, Card, CardContent } from "@/components";
import { BookOpen, Users, Brain, Eye } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <AppLayout showBottomNav={false}>
      <Section variant="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold font-heading">
              Read the Room
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master the art of reading body language and understanding human psychology through interactive lessons and practical scenarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-medium" onClick={() => navigate('/auth')}>
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="font-medium" onClick={() => navigate('/auth')}>
                Sign In
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Facial Expressions", description: "Decode emotions through micro-expressions", color: "text-blue-600" },
              { icon: Users, title: "Body Language", description: "Understand posture and gestures", color: "text-green-600" },
              { icon: Brain, title: "Psychology", description: "Learn the science behind behavior", color: "text-purple-600" },
              { icon: BookOpen, title: "Practical Tips", description: "Apply knowledge in real situations", color: "text-orange-600" }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                  <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-8">Ready to start your journey?</h2>
            <Button size="lg" onClick={() => navigate('/auth')}>
              Create Free Account
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Already have an account? <button onClick={() => navigate('/auth')} className="text-primary hover:underline">Sign in here</button>
            </p>
          </div>
        </Container>
      </Section>
    </AppLayout>
  );
};

export default Index;
