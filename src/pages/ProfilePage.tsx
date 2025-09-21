import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AppLayout, Container, Section, Button, Card, CardContent, CardHeader, CardTitle, Input, Label, Badge } from '@/components';
import { User, Settings, Trophy, BookOpen, Clock, TrendingUp, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.user_metadata?.display_name || '');

  const handleSaveProfile = () => {
    // Will implement profile update logic later
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved.",
    });
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Sign Out Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <AppLayout>
      <Section padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-heading font-bold mb-2">Profile</h1>
              <p className="text-muted-foreground">
                Manage your account settings and view your learning progress
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Account Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="bg-muted"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input
                        id="displayName"
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                      />
                    </div>

                    <div className="flex justify-between">
                      <div className="space-x-2">
                        {isEditing ? (
                          <>
                            <Button onClick={handleSaveProfile}>Save Changes</Button>
                            <Button variant="outline" onClick={() => setIsEditing(false)}>
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <Button onClick={() => setIsEditing(true)}>
                            Edit Profile
                          </Button>
                        )}
                      </div>
                      <Button variant="outline" onClick={handleSignOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="h-5 w-5" />
                      <span>Learning Preferences</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Quiz Frequency</Label>
                        <p className="text-sm text-muted-foreground">Daily</p>
                      </div>
                      <div>
                        <Label>Daily Learning Goal</Label>
                        <p className="text-sm text-muted-foreground">15 minutes</p>
                      </div>
                      <div>
                        <Label>Notifications</Label>
                        <p className="text-sm text-muted-foreground">All enabled</p>
                      </div>
                      <div>
                        <Label>Learning Goals</Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="secondary">Professional</Badge>
                          <Badge variant="secondary">Personal</Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline">Edit Preferences</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Stats Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5" />
                      <span>Learning Stats</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">Lessons Completed</p>
                    </div>

                    <div className="text-center p-4 bg-accent/5 rounded-lg">
                      <Trophy className="h-8 w-8 mx-auto mb-2 text-accent" />
                      <p className="text-2xl font-bold">85%</p>
                      <p className="text-sm text-muted-foreground">Average Quiz Score</p>
                    </div>

                    <div className="text-center p-4 bg-orange-500/5 rounded-lg">
                      <Clock className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                      <p className="text-2xl font-bold">3.5h</p>
                      <p className="text-sm text-muted-foreground">Total Study Time</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Trophy className="h-8 w-8 text-accent" />
                      <div>
                        <p className="font-medium">First Quiz Passed</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium">Module Complete</p>
                        <p className="text-xs text-muted-foreground">1 week ago</p>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      View All Achievements
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </AppLayout>
  );
}