import { Phone, User } from "lucide-react"

interface HelpSectionProps {
  helpLine: string
  contactName: string
}

export default function HelpSection({ helpLine, contactName }: HelpSectionProps) {
  return (
    <section className="mb-8 mt-6">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">Need Assistance?</h3>

      <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Phone className="w-5 h-5 text-accent" />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Helpline</p>
            <p className="text-base md:text-lg font-bold text-foreground">
              <a href={`tel:${helpLine}`} className="hover:text-accent transition-colors">
                {helpLine}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-accent" />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Contact Person (NBC Team)
            </p>
            <p className="text-base md:text-lg font-bold text-foreground">{contactName}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
