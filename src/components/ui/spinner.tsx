import { cn } from "@/lib/utils"

interface SpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function Spinner({ className, size = "md" }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-muted border-t-primary",
        sizeClasses[size],
        className
      )}
    />
  )
}

interface LoadingSpinnerProps {
  text?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function LoadingSpinner({ text = "Loading...", size = "md", className }: LoadingSpinnerProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <Spinner size={size} />
      {text && (
        <p className="text-muted-foreground animate-pulse">
          {text}
        </p>
      )}
    </div>
  )
}

interface FullPageSpinnerProps {
  text?: string
}

export function FullPageSpinner({ text = "Loading..." }: FullPageSpinnerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <LoadingSpinner text={text} size="lg" />
    </div>
  )
}
