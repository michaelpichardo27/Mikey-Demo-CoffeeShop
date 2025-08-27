import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Users, Award } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            About <span className="text-primary">Brew & Bite</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            More than just a coffee shop - we're a community hub where great coffee, delicious food, and warm
            hospitality come together to create memorable experiences.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by coffee enthusiasts Maria and James Rodriguez, Brew & Bite began as a dream to create
                a space where the community could gather, connect, and enjoy exceptional coffee and food.
              </p>
              <p>
                What started as a small neighborhood cafe has grown into a beloved local institution, known for our
                commitment to quality, sustainability, and creating a warm, welcoming atmosphere for everyone who walks
                through our doors.
              </p>
              <p>
                Every cup we serve and every dish we prepare reflects our passion for excellence and our dedication to
                supporting local farmers, suppliers, and artisans who share our values.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/coffee-shop-owners-behind-counter.png"
              alt="Coffee shop owners behind the counter"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Quality First</h3>
                <p className="text-muted-foreground text-sm">
                  We source the finest beans and ingredients, ensuring every cup and bite meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  We're more than a cafe - we're a gathering place that brings people together and supports local
                  initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                <p className="text-muted-foreground text-sm">
                  Environmental responsibility guides our choices, from fair-trade sourcing to eco-friendly packaging.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Our skilled baristas and chefs are passionate about their craft, constantly perfecting their art.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-muted rounded-lg p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Philosophy</h2>
          <blockquote className="text-xl text-muted-foreground italic max-w-4xl mx-auto text-pretty">
            "Great coffee is about more than just the beans - it's about the care in every step, the warmth of human
            connection, and the joy of sharing something beautiful with others. At Brew & Bite, we believe that every
            cup tells a story, and every meal creates a memory."
          </blockquote>
          <p className="text-primary font-semibold mt-4">- Maria & James Rodriguez, Founders</p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
