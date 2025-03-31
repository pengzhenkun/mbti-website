"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("hero.title")}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t("hero.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/test">{t("hero.button.test")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/types">{t("hero.button.explore")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

