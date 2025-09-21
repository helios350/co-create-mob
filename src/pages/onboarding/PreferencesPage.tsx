import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Button, Card, CardContent, CardHeader, CardTitle, RadioGroup, RadioGroupItem, Label } from '@/components';
import { BookOpen, ArrowRight, ArrowLeft, Clock, Bell, Target } from 'lucide-react';

export default function PreferencesPage() {
  const [quizFrequency, setQuizFrequency] = useState('daily');
  const [learningTime, setLearningTime] = useState('15');
  const [notifications, setNotifications] = useState('all');
  const navigate = useNavigate();

  const handleComplete = () => {
    // Store preferences in localStorage for now - will integrate with profiles later
    const preferences = {
      quizFrequency,
      learningTime: parseInt(learningTime),
      notifications
    };
    localStorage.setItem('onboarding_preferences', JSON.stringify(preferences));
    navigate('/dashboard');
  };

  return (
    <Section variant="gradient" padding="xl" className="min-h-screen">
      <Container size="md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-heading font-bold mb-2">
            Set your learning preferences
          </h1>
          <p className="text-muted-foreground">
            Customize your learning experience to match your schedule and goals
          </p>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <div className="w-8 h-2 bg-primary rounded-full"></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Step 2 of 2</p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-center">Learning Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Quiz Frequency */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Quiz Frequency</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                How often would you like to take quizzes to test your knowledge?
              </p>
              <RadioGroup value={quizFrequency} onValueChange={setQuizFrequency}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily">Daily - Quick daily reinforcement</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly">Weekly - Comprehensive weekly reviews</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="module" id="module" />
                  <Label htmlFor="module">After each module - Test after completing lessons</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Daily Learning Time */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Daily Learning Goal</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                How much time do you want to spend learning each day?
              </p>
              <RadioGroup value={learningTime} onValueChange={setLearningTime}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10" id="10min" />
                  <Label htmlFor="10min">10 minutes - Quick bite-sized sessions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="15" id="15min" />
                  <Label htmlFor="15min">15 minutes - Recommended for beginners</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="30" id="30min" />
                  <Label htmlFor="30min">30 minutes - Deep dive sessions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="60" id="60min" />
                  <Label htmlFor="60min">60+ minutes - Intensive learning</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Notifications */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Notification Preferences</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                How would you like to be reminded about your learning goals?
              </p>
              <RadioGroup value={notifications} onValueChange={setNotifications}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All notifications - Daily reminders and achievements</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="achievements" id="achievements" />
                  <Label htmlFor="achievements">Achievements only - When you complete milestones</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none">None - I'll check in when I want to learn</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/onboarding/goals')}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              
              <Button 
                onClick={handleComplete}
                className="flex items-center"
              >
                Complete Setup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}