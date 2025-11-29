"use client"

import { useEffect, useRef } from "react"

interface MapContentProps {
  lat: number
  lng: number
  hotelName: string
}

export default function MapContent({ lat, lng, hotelName }: MapContentProps) {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // Using OpenStreetMap/Leaflet as a lightweight alternative
    // Load Leaflet CSS and JS
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
    script.onload = () => {
      if (typeof (window as any).L !== "undefined") {
        const L = (window as any).L
        const map = L.map(mapContainer.current).setView([lat, lng], 15)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
          maxZoom: 19,
        }).addTo(map)

        L.marker([lat, lng]).addTo(map).bindPopup(`<div class="font-semibold">${hotelName}</div>`).openPopup()
      }
    }
    document.head.appendChild(script)

    return () => {
      if (mapContainer.current && (window as any).L) {
        const maps = (window as any).L.map._leafletMap
        if (maps) {
          Object.values(maps).forEach((m: any) => m.remove?.())
        }
      }
    }
  }, [lat, lng, hotelName])

  return <div ref={mapContainer} className="w-full h-96 rounded-lg bg-muted" />
}
