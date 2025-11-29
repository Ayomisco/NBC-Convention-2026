import type { ReactNode } from "react"

interface DetailCardProps {
  icon: ReactNode
  label: string
  value: string
  subtext?: string
  isClickable?: boolean
}

export default function DetailCard({ icon, label, value, subtext, isClickable }: DetailCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-5 border-b-2 border-accent ${
        isClickable ? "cursor-pointer hover:bg-muted/50" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="text-accent mt-1">{icon}</div>
        <div className="flex-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
          <p className="text-base md:text-lg font-bold text-foreground mt-1">{value}</p>
          {subtext && <p className="text-xs text-muted-foreground mt-2">{subtext}</p>}
          {isClickable && <p className="text-xs text-accent font-medium mt-2">Click to view on map →</p>}
        </div>
      </div>
    </div>
  )
}
