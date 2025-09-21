import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof Icons;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, ...props }, ref) => {
    const LucideIcon = Icons[name] as React.ComponentType<LucideProps>;

    if (!LucideIcon) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }

    return (
      <LucideIcon
        ref={ref}
        className={cn("h-4 w-4", className)}
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";

export { Icon };