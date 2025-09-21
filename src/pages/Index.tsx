import { AppLayout, Container, Section, Button, Card, CardContent, ProgressBar, Badge, LoadingSpinner } from "@/components";
import { BookOpen, Users, Brain, Eye } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
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
              <Button size="lg" className="font-medium">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                Learn More
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

      <Section variant="muted" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Design System Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              
              {/* Button Variants */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Button Variants</h3>
                  <div className="space-y-3">
                    <Button className="w-full">Primary Button</Button>
                    <Button variant="secondary" className="w-full">Secondary</Button>
                    <Button variant="accent" className="w-full">Accent</Button>
                    <Button variant="gradient" className="w-full">Gradient</Button>
                    <Button variant="outline" className="w-full">Outline</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Progress & Badges */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Progress & Status</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Learning Progress</span>
                        <span className="text-sm">75%</span>
                      </div>
                      <ProgressBar value={75} variant="default" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Quiz Score</span>
                        <span className="text-sm">90%</span>
                      </div>
                      <ProgressBar value={90} variant="success" />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Badge>Beginner</Badge>
                      <Badge variant="secondary">In Progress</Badge>
                      <Badge variant="destructive">Needs Review</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Loading States */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Loading States</h3>
                  <div className="space-y-4">
                    <LoadingSpinner size="sm" />
                    <LoadingSpinner size="md" />
                    <LoadingSpinner size="lg" />
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </Container>
      </Section>
    </AppLayout>
  );
};

export default Index;
