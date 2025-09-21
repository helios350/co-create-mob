import * as React from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { Home, BookOpen, Search, TrendingUp, User } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Modules", href: "/modules", icon: BookOpen },
  { label: "Search", href: "/search", icon: Search },
  { label: "Progress", href: "/progress", icon: TrendingUp },
  { label: "Profile", href: "/profile", icon: User },
];

interface BottomNavigationProps extends React.HTMLAttributes<HTMLElement> {}

const BottomNavigation = React.forwardRef<HTMLElement, BottomNavigationProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border md:hidden",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors min-w-0 flex-1",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )
              }
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    );
  }
);
BottomNavigation.displayName = "BottomNavigation";

export { BottomNavigation };