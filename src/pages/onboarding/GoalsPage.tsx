import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, Button, Card, CardContent, CardHeader, CardTitle, Checkbox } from '@/components';
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';

const learningGoals = [
  {
    id: 'professional',
    title: 'Professional Development',
    description: 'Improve workplace communication and leadership skills'
  },
  {
    id: 'personal',
    title: 'Personal Growth',
    description: 'Enhance social awareness and interpersonal relationships'
  },
  {
    id: 'academic',
    title: 'Academic Study',
    description: 'Learn psychology and behavioral science concepts'
  },
  {
    id: 'sales',
    title: 'Sales & Negotiation',
    description: 'Better understand clients and improve persuasion skills'
  },
  {
    id: 'parenting',
    title: 'Parenting & Family',
    description: 'Understand children and family member behavior better'
  },
  {
    id: 'dating',
    title: 'Dating & Relationships',
    description: 'Improve romantic and social relationship skills'
  }
];

export default function GoalsPage() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleGoalToggle = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleContinue = () => {
    // Store goals in localStorage for now - will integrate with profiles later
    localStorage.setItem('onboarding_goals', JSON.stringify(selectedGoals));
    navigate('/onboarding/preferences');
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
            What are your learning goals?
          </h1>
          <p className="text-muted-foreground">
            Select the areas you'd like to focus on to personalize your learning experience
          </p>
          
          {/* Progress indicator */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <div className="w-8 h-2 bg-muted rounded-full"></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Step 1 of 2</p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-center">Choose Your Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningGoals.map((goal) => (
                <label
                  key={goal.id}
                  className={`flex items-start space-x-3 p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    selectedGoals.includes(goal.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Checkbox
                    checked={selectedGoals.includes(goal.id)}
                    onChange={() => handleGoalToggle(goal.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={() => navigate('/onboarding/welcome')}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              
              <Button 
                onClick={handleContinue}
                disabled={selectedGoals.length === 0}
                className="flex items-center"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {selectedGoals.length === 0 && (
              <p className="text-sm text-muted-foreground text-center mt-4">
                Please select at least one learning goal to continue
              </p>
            )}
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}