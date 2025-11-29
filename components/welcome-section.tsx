export default function WelcomeSection({ guestName }: { guestName: string }) {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border-l-4 border-accent">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Welcome, <span className="text-accent">{guestName}</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">to the 2026 Annual Convention</p>
        <p className="text-sm text-muted-foreground mt-3">
          We're delighted to have you here. Below are your hospitality details to ensure a comfortable stay.
        </p>
      </div>
    </section>
  )
}
