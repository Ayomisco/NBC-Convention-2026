"use client"

import { useState } from "react"
import DetailCard from "./detail-card"
import MapModal from "./map-modal"
import { MapPin, Building2, Calendar, Clock } from "lucide-react"

interface GuestData {
  hotelName: string
  hotelAddress: string
  roomNumber: string
  checkInDate: string
  checkOutDate: string
  checkInTime: string
  hotelLat: number
  hotelLng: number
}

export default function HospitalityDetails({ guestData }: { guestData: GuestData }) {
  const [showMap, setShowMap] = useState(false)

  return (
    <>
      <section className="mb-8">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">Your Hospitality Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Hotel Card - Clickable */}
          <button onClick={() => setShowMap(true)} className="text-left hover:shadow-lg transition-shadow">
            <DetailCard
              icon={<Building2 className="w-5 h-5" />}
              label="Hotel"
              value={guestData.hotelName}
              subtext={guestData.hotelAddress}
              isClickable
            />
          </button>

          {/* Room Number */}
          <DetailCard icon={<MapPin className="w-5 h-5" />} label="Room Number" value={guestData.roomNumber} />

          {/* Check-in Date */}
          <DetailCard icon={<Calendar className="w-5 h-5" />} label="Check-in Date" value={guestData.checkInDate} />

          {/* Check-out Date */}
          <DetailCard icon={<Calendar className="w-5 h-5" />} label="Check-out Date" value={guestData.checkOutDate} />

          {/* Check-in Time */}
          <DetailCard icon={<Clock className="w-5 h-5" />} label="Check-in Time" value={guestData.checkInTime} />
        </div>
      </section>

      {showMap && (
        <MapModal
          hotelName={guestData.hotelName}
          address={guestData.hotelAddress}
          lat={guestData.hotelLat}
          lng={guestData.hotelLng}
          onClose={() => setShowMap(false)}
        />
      )}
    </>
  )
}
