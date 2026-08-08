import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-violet-600 text-white shadow-[0_0_15px] shadow-violet-500/30 border border-violet-500/50 hover:bg-violet-700 hover:shadow-violet-500/50",
        destructive: "bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_15px] shadow-red-500/20 hover:bg-red-500/20",
        outline: "border border-violet-500/50 bg-transparent shadow-[0_0_15px] shadow-violet-500/20 hover:bg-violet-500/10 hover:shadow-violet-500/40 text-violet-100",
        secondary: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px] shadow-indigo-500/20 hover:bg-indigo-500/20",
        ghost: "hover:bg-white/5 hover:text-slate-200 text-slate-400",
        link: "text-violet-400 underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white border border-indigo-400/50 shadow-[0_0_15px] shadow-indigo-500/40 hover:opacity-90 animate-gradient-x bg-[length:200%_auto] hover:shadow-indigo-500/60"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
