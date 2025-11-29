"use client"

import { useState } from "react"
import Header from "@/components/header"
import WelcomeSection from "@/components/welcome-section"
import HospitalityDetails from "@/components/hospitality-details"
import HelpSection from "@/components/help-section"
import Footer from "@/components/footer"

export default function Home() {
  // Sample guest data - In production, this would come from QR code scan or URL params
  const [guestData] = useState({
    name: "Ayomide",
    hotelName: "Eko Hotel & Suites",
    hotelAddress: "Plot 1435 Adetokunbo Ademola Street, Victoria Island 106104, Lagos",
    roomNumber: "2847",
    checkInDate: "December 10, 2026",
    checkOutDate: "December 12, 2026",
    checkInTime: "3:00 PM",
    helpLine: "+234 1 2717 0000",
    contactName: "Chioma Nwankwo",
    hotelLat: 6.426,
    hotelLng: 3.423,
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col px-4 md:px-8 py-6 md:py-12 max-w-2xl mx-auto w-full">
        <WelcomeSection guestName={guestData.name} />
        <HospitalityDetails guestData={guestData} />
        <HelpSection helpLine={guestData.helpLine} contactName={guestData.contactName} />
      </div>
      <Footer />
    </main>
  )
}
