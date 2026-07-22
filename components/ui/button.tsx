import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow hover:shadow-[0_0_50px_-8px_rgba(124,58,237,0.6)] hover:-translate-y-0.5",
        outline:
          "border border-white/15 bg-white/[0.03] text-zinc-100 hover:border-primary-400/60 hover:bg-white/[0.06]",
        ghost: "text-zinc-300 hover:text-white hover:bg-white/[0.05]",
        link: "text-primary-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
