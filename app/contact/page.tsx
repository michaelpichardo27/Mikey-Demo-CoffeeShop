"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, Phone, Star } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    review: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ name: "", review: "" })
    setRating(0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, don't hesitate
            to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Coffee Street
                  <br />
                  Downtown District
                  <br />
                  City, State 12345
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">(555) 123-BREW</p>
              </CardContent>
            </Card>
          </div>

          {/* Review Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Review our Shop</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Share your experience and help others discover us.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your rating</label>
                    <div className="flex gap-1" role="group" aria-label="Rate 1 to 5 stars">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const active = (hoverRating || rating) >= star
                        return (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-0.5 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label={`${star} star${star > 1 ? "s" : ""}`}
                          >
                            <Star
                              className={cn(
                                "w-8 h-8 transition-colors",
                                active ? "fill-primary text-primary" : "text-muted-foreground"
                              )}
                            />
                          </button>
                        )
                      })}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Click to rate</p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="How should we call you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="review" className="block text-sm font-medium mb-2">
                      Your review
                    </label>
                    <Textarea
                      id="review"
                      name="review"
                      value={formData.review}
                      onChange={handleChange}
                      required
                      placeholder="What did you try? How was the coffee, food, or vibe? We'd love to hear it."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={rating === 0}>
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
