import { useNavigate } from 'react-router-dom';
import { Container, Section, Button, Card, CardContent } from '@/components';
import { BookOpen, Brain, Users, Eye, Target } from 'lucide-react';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Section variant="gradient" padding="xl" className="min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <BookOpen className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-heading font-bold mb-4">
            Welcome to Read the Room
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the art of reading body language and understanding human psychology through 
            interactive lessons, practical scenarios, and evidence-based techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Eye,
              title: "Facial Expressions",
              description: "Decode emotions through micro-expressions and facial cues",
              color: "text-blue-600"
            },
            {
              icon: Users,
              title: "Body Language", 
              description: "Understand posture, gestures, and spatial communication",
              color: "text-green-600"
            },
            {
              icon: Brain,
              title: "Psychology Insights",
              description: "Learn the science behind human behavior patterns",
              color: "text-purple-600"
            },
            {
              icon: Target,
              title: "Practical Application",
              description: "Apply skills in real-world scenarios and situations",
              color: "text-orange-600"
            }
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

        <div className="bg-card rounded-lg p-8 shadow-elegant mb-8">
          <h2 className="text-2xl font-heading font-bold text-center mb-6">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm">Identify and interpret facial expressions accurately</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm">Read body language and posture signals</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm">Understand proxemics and personal space</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm">Apply psychology principles in daily interactions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm">Improve communication and social awareness</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm">Practice with real-world scenarios and case studies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => navigate('/onboarding/goals')} className="px-8">
            Get Started
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes about 2 minutes to set up your learning preferences
          </p>
        </div>
      </Container>
    </Section>
  );
}