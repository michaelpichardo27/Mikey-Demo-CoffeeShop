import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight } from "lucide-react"
import { QRCode } from "@/components/qr-code-generator"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const menuUrl = typeof window !== "undefined" ? `${window.location.origin}/menu` : "https://brewandbite.com/menu"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cozy-coffee-shop-interior-with-warm-lighting--coff.png"
          alt="Cozy coffee shop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Welcome to <span className="text-primary">Brew & Bite</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
          Where premium coffee meets delicious food in a cozy atmosphere
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/menu">
            <Button size="lg" className="text-lg px-8 py-3">
              Order Online
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/menu">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
            >
              View Menu
            </Button>
          </Link>
        </div>

        {/* QR Code Section */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-sm mx-auto">
          <div className="flex items-center justify-center mb-4">
            <QrCode className="w-8 h-8 text-white mr-3" />
            <span className="text-white font-semibold">Quick Order</span>
          </div>
          <div className="bg-white rounded-lg p-3 mx-auto mb-3 inline-block">
            <QRCode value={menuUrl} size={120} />
          </div>
          <p className="text-white/80 text-sm">Scan to access our menu and order directly from your phone</p>
        </div>
      </div>

      {/* Decorative Coffee Steam */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-2 h-20 bg-white/30 rounded-full animate-pulse" />
      </div>
      <div className="absolute top-32 right-16 opacity-20">
        <div className="w-2 h-16 bg-white/30 rounded-full animate-pulse delay-300" />
      </div>
    </section>
  )
}
