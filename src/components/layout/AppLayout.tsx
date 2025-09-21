import * as React from "react";
import { cn } from "@/lib/utils";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
  showBottomNav?: boolean;
  showHeader?: boolean;
}

const AppLayout = React.forwardRef<HTMLDivElement, AppLayoutProps>(
  ({ children, className, showBottomNav = true, showHeader = true }, ref) => {
    return (
      <div ref={ref} className={cn("min-h-screen bg-background", className)}>
        {showHeader && <Header />}
        
        <main className={cn(
          "flex-1",
          showHeader && "pt-0",
          showBottomNav && "pb-16 md:pb-0"
        )}>
          {children}
        </main>
        
        {showBottomNav && <BottomNavigation />}
      </div>
    );
  }
);
AppLayout.displayName = "AppLayout";

export { AppLayout };