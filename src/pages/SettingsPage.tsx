import { useState } from 'react';
import { AppLayout, Container, Section, Button, Card, CardContent, CardHeader, CardTitle, Label, RadioGroup, RadioGroupItem, Checkbox } from '@/components';
import { Settings, Bell, Shield, Palette, HelpCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [quizFrequency, setQuizFrequency] = useState('daily');
  const [learningTime, setLearningTime] = useState('15');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [reminderNotifications, setReminderNotifications] = useState(true);

  const handleSaveSettings = () => {
    // Will implement settings save logic later
    console.log('Settings saved');
  };

  return (
    <AppLayout>
      <Section padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <h1 className="text-3xl font-heading font-bold">Settings</h1>
              </div>
              <p className="text-muted-foreground">
                Customize your learning experience and account preferences
              </p>
            </div>

            <div className="space-y-8">
              {/* Learning Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Learning Preferences</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Quiz Frequency</Label>
                      <p className="text-sm text-muted-foreground mb-3">
                        How often would you like to take quizzes?
                      </p>
                      <RadioGroup value={quizFrequency} onValueChange={setQuizFrequency}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="daily" id="daily" />
                          <Label htmlFor="daily">Daily</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weekly" id="weekly" />
                          <Label htmlFor="weekly">Weekly</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="module" id="module" />
                          <Label htmlFor="module">After each module</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Daily Learning Goal</Label>
                      <p className="text-sm text-muted-foreground mb-3">
                        How much time do you want to spend learning each day?
                      </p>
                      <RadioGroup value={learningTime} onValueChange={setLearningTime}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10" id="10min" />
                          <Label htmlFor="10min">10 minutes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="15" id="15min" />
                          <Label htmlFor="15min">15 minutes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="30" id="30min" />
                          <Label htmlFor="30min">30 minutes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="60" id="60min" />
                          <Label htmlFor="60min">60+ minutes</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive updates about your progress and new content
                      </p>
                    </div>
                    <Checkbox
                      checked={emailNotifications}
                      onCheckedChange={(checked) => setEmailNotifications(checked === true)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about achievements and reminders
                      </p>
                    </div>
                    <Checkbox
                      checked={pushNotifications}
                      onCheckedChange={(checked) => setPushNotifications(checked === true)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base font-medium">Learning Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Daily reminders to complete your learning goals
                      </p>
                    </div>
                    <Checkbox
                      checked={reminderNotifications}
                      onCheckedChange={(checked) => setReminderNotifications(checked === true)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Appearance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-5 w-5" />
                    <span>Appearance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Theme</Label>
                      <p className="text-sm text-muted-foreground mb-3">
                        Choose your preferred color theme
                      </p>
                      <RadioGroup defaultValue="system">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="light" id="light" />
                          <Label htmlFor="light">Light</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dark" id="dark" />
                          <Label htmlFor="dark">Dark</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="system" id="system" />
                          <Label htmlFor="system">System</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy & Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Privacy & Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Download My Data
                  </Button>
                  <Button variant="destructive" className="w-full justify-start">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5" />
                    <span>Help & Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Help Center
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Privacy Policy
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Terms of Service
                  </Button>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button onClick={handleSaveSettings} size="lg">
                  Save Settings
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </AppLayout>
  );
}