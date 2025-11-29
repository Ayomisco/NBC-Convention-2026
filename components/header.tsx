export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img src="/nbclogo.png" alt="NBC Logo" width={80} height={80} />

          {/* NBC Logo Placeholder */}
          {/* <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-lg">NBC</div> */}
          <div>
            {/* <h1 className="text-xl md:text-2xl font-bold">NBC</h1> */}
            <p className="text-xs md:text-sm text-primary-foreground/80">2026 Annual Convention</p>
          </div>
        </div>
      </div>
    </header>
  )
}
