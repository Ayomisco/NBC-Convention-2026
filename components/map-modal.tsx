"use client"

import { X } from "lucide-react"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const MapContent = dynamic(() => import("./map-content"), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">Loading map...</div>,
})

interface MapModalProps {
  hotelName: string
  address: string
  lat: number
  lng: number
  onClose: () => void
}

export default function MapModal({ hotelName, address, lat, lng, onClose }: MapModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-white">
          <div>
            <h2 className="text-xl font-bold text-foreground">{hotelName}</h2>
            <p className="text-sm text-muted-foreground mt-1">{address}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Close map">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <Suspense
            fallback={
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">Loading map...</div>
            }
          >
            <MapContent lat={lat} lng={lng} hotelName={hotelName} />
          </Suspense>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground">
              <strong>Address:</strong> {address}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Share this location with your taxi driver or use your preferred maps application for directions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
