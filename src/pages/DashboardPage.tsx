import { AppLayout, Container, Section, Button, Card, CardContent, CardHeader, CardTitle, ProgressBar, Badge } from '@/components';
import { BookOpen, Trophy, Flame, Clock, TrendingUp, Brain, Users, Eye, Target } from 'lucide-react';

export default function DashboardPage() {
  return (
    <AppLayout>
      <Section padding="lg">
        <Container>
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-muted-foreground">
              Ready to continue your journey in reading body language?
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Learning Streak</p>
                    <p className="text-2xl font-bold">7 days</p>
                  </div>
                  <Flame className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Lessons Completed</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Quiz Average</p>
                    <p className="text-2xl font-bold">85%</p>
                  </div>
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Time Spent</p>
                    <p className="text-2xl font-bold">3.5h</p>
                  </div>
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Continue Learning Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-heading font-semibold mb-4">Continue Learning</h2>
              <Card className="shadow-glow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Eye className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Understanding Micro-Expressions</h3>
                        <p className="text-sm text-muted-foreground">Facial Expressions Module</p>
                      </div>
                    </div>
                    <Badge>In Progress</Badge>
                  </div>
                  <ProgressBar value={65} className="mb-4" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn to identify the subtle facial expressions that reveal true emotions.
                  </p>
                  <Button>Continue Lesson</Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold mb-4">Recent Achievements</h2>
              <div className="space-y-3">
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3">
                      <Trophy className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium">First Quiz Passed</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3">
                      <Flame className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">7-Day Streak</p>
                        <p className="text-xs text-muted-foreground">Today</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Module Complete</p>
                        <p className="text-xs text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Learning Modules */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading font-semibold">Learning Modules</h2>
              <Button variant="outline">View All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Facial Expressions",
                  progress: 65,
                  lessons: 8,
                  completed: 5,
                  color: "text-blue-600"
                },
                {
                  icon: Users,
                  title: "Body Language",
                  progress: 30,
                  lessons: 10,
                  completed: 3,
                  color: "text-green-600"
                },
                {
                  icon: Brain,
                  title: "Psychology",
                  progress: 0,
                  lessons: 12,
                  completed: 0,
                  color: "text-purple-600"
                },
                {
                  icon: Target,
                  title: "Practical Tips",
                  progress: 0,
                  lessons: 15,
                  completed: 0,
                  color: "text-orange-600"
                }
              ].map((module, index) => (
                <Card key={index} className="hover:shadow-glow transition-all duration-300 cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <module.icon className={`h-8 w-8 ${module.color}`} />
                      {module.progress > 0 && <Badge variant="secondary">Active</Badge>}
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{module.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {module.completed} of {module.lessons} lessons completed
                    </p>
                    <ProgressBar value={module.progress} className="mb-4" />
                    <Button 
                      variant={module.progress > 0 ? "default" : "outline"} 
                      size="sm" 
                      className="w-full"
                    >
                      {module.progress > 0 ? "Continue" : "Start Module"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </AppLayout>
  );
}