"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote:
        "Taking this MBTI test was eye-opening. The results were incredibly accurate and helped me understand why I approach situations the way I do.",
      name: "Alex Johnson",
      type: "INFJ",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I've taken several personality tests before, but this one provided the most comprehensive insights. It's helped me tremendously in my career planning.",
      name: "Sam Rodriguez",
      type: "ENTJ",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The detailed breakdown of my personality type has improved my relationships. I now understand how to better communicate with people who have different preferences.",
      name: "Taylor Kim",
      type: "ISFP",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("testimonials.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("testimonials.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-primary">{testimonial.type}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

