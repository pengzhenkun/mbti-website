"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { personalityTypes } from "@/lib/personality-types"
import { useLanguage } from "@/contexts/language-context"

export default function TypesPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("types.title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("types.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {personalityTypes.map((type) => (
            <Card key={type.code} className="overflow-hidden">
              <CardHeader className="bg-muted/40">
                <CardTitle>
                  {type.code}: {type.name}
                </CardTitle>
                <CardDescription>{type.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="line-clamp-3">{type.description}</p>
              </CardContent>
              <CardFooter className="border-t bg-muted/20 p-4">
                <Link href={`/types/${type.code.toLowerCase()}`} className="text-primary font-medium hover:underline">
                  Learn more about {type.code} →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t("types.code.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">{t("types.energy.title")}</h3>
              <p className="mb-1">{t("types.energy.e")}</p>
              <p>{t("types.energy.i")}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">{t("types.info.title")}</h3>
              <p className="mb-1">{t("types.info.s")}</p>
              <p>{t("types.info.n")}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">{t("types.decision.title")}</h3>
              <p className="mb-1">{t("types.decision.t")}</p>
              <p>{t("types.decision.f")}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">{t("types.structure.title")}</h3>
              <p className="mb-1">{t("types.structure.j")}</p>
              <p>{t("types.structure.p")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

