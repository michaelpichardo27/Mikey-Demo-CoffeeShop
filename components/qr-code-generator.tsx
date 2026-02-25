"use client"

import { useEffect, useState } from "react"

interface QRCodeProps {
  value: string
  size?: number
  className?: string
}

export function QRCode({ value, size = 128, className = "" }: QRCodeProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("")

  useEffect(() => {
    // Generate QR code using a free API service
    const encodedValue = encodeURIComponent(value)
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedValue}&format=png&margin=10`
    setQrCodeUrl(url)
  }, [value, size])

  if (!qrCodeUrl) {
    return <div className={`bg-muted animate-pulse rounded-lg ${className}`} style={{ width: size, height: size }} />
  }

  return (
    <img
      src={qrCodeUrl || "/placeholder.svg"}
      alt="QR Code"
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
    />
  )
}
