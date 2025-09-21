import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "gradient" | "muted";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    const variantClasses = {
      default: "bg-background",
      gradient: "bg-gradient-subtle",
      muted: "bg-muted/30"
    };
    
    const paddingClasses = {
      none: "",
      sm: "py-4",
      md: "py-8",
      lg: "py-12",
      xl: "py-16"
    };

    return (
      <section
        ref={ref}
        className={cn(variantClasses[variant], paddingClasses[padding], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };