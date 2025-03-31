"use client"

import { Brain, BookOpen, Users, Lightbulb } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: t("features.assessment.title"),
      description: t("features.assessment.description"),
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: t("features.results.title"),
      description: t("features.results.description"),
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t("features.community.title"),
      description: t("features.community.description"),
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: t("features.growth.title"),
      description: t("features.growth.description"),
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("features.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("features.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

