import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import { QRCode } from "@/components/qr-code-generator"

export function Footer() {
  const currentUrl = typeof window !== "undefined" ? window.location.origin : "https://brewandbite.com"

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B&B</span>
              </div>
              <span className="font-bold text-xl text-foreground">Brew & Bite</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium coffee and delicious food in a cozy atmosphere. Your neighborhood coffee shop since 2018.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/menu" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Menu
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
              <Link href="/cart" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Cart
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">123 Coffee Street, Downtown</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">(555) 123-BREW</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">hello@brewandbite.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Mon-Fri: 6AM-8PM</span>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Order</h3>
            <div className="bg-white rounded-lg p-3 inline-block">
              <QRCode value={`${currentUrl}/menu`} size={100} />
            </div>
            <p className="text-muted-foreground text-xs">Scan to access our menu and order from your phone</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2024 Brew & Bite Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
