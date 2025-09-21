import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/auth/AuthPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import WelcomePage from "./pages/onboarding/WelcomePage";
import GoalsPage from "./pages/onboarding/GoalsPage";
import PreferencesPage from "./pages/onboarding/PreferencesPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import OfflinePage from "./pages/utility/OfflinePage";
import ErrorPage from "./pages/utility/ErrorPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            
            {/* Onboarding Routes */}
            <Route path="/onboarding/welcome" element={<ProtectedRoute><WelcomePage /></ProtectedRoute>} />
            <Route path="/onboarding/goals" element={<ProtectedRoute><GoalsPage /></ProtectedRoute>} />
            <Route path="/onboarding/preferences" element={<ProtectedRoute><PreferencesPage /></ProtectedRoute>} />
            
            {/* Protected App Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            
            {/* Utility Routes */}
            <Route path="/offline" element={<OfflinePage />} />
            <Route path="/error" element={<ErrorPage />} />
            
            {/* Redirects */}
            <Route path="/modules" element={<Navigate to="/dashboard" replace />} />
            <Route path="/search" element={<Navigate to="/dashboard" replace />} />
            <Route path="/progress" element={<Navigate to="/dashboard" replace />} />
            
            {/* 404 - Keep this last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
