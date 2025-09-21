import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  variant?: "default" | "accent" | "success";
  size?: "sm" | "md" | "lg";
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, max = 100, showLabel = false, variant = "default", size = "md", ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    const variantClasses = {
      default: "bg-primary",
      accent: "bg-accent",
      success: "bg-success"
    };
    
    const sizeClasses = {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-3"
    };

    return (
      <div
        ref={ref}
        className={cn("w-full bg-muted rounded-full overflow-hidden", sizeClasses[size], className)}
        {...props}
      >
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out rounded-full",
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
        {showLabel && (
          <div className="mt-1 text-xs text-muted-foreground text-center">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);
ProgressBar.displayName = "ProgressBar";

export { ProgressBar };