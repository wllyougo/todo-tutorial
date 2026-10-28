interface ControlRowProps {
  label: string
  children: React.ReactNode
}

export function ControlRow({ label, children }: ControlRowProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-xs font-medium text-muted-foreground">
        {label}
      </span>
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
        {children}
      </div>
    </div>
  )
}
