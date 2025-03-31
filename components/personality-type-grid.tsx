import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function PersonalityTypeGrid() {
  const personalityTypes = [
    { code: "INTJ", name: "Architect", color: "bg-blue-100 dark:bg-blue-900" },
    { code: "INTP", name: "Logician", color: "bg-purple-100 dark:bg-purple-900" },
    { code: "ENTJ", name: "Commander", color: "bg-red-100 dark:bg-red-900" },
    { code: "ENTP", name: "Debater", color: "bg-orange-100 dark:bg-orange-900" },
    { code: "INFJ", name: "Advocate", color: "bg-teal-100 dark:bg-teal-900" },
    { code: "INFP", name: "Mediator", color: "bg-green-100 dark:bg-green-900" },
    { code: "ENFJ", name: "Protagonist", color: "bg-yellow-100 dark:bg-yellow-900" },
    { code: "ENFP", name: "Campaigner", color: "bg-pink-100 dark:bg-pink-900" },
    { code: "ISTJ", name: "Logistician", color: "bg-gray-100 dark:bg-gray-800" },
    { code: "ISFJ", name: "Defender", color: "bg-indigo-100 dark:bg-indigo-900" },
    { code: "ESTJ", name: "Executive", color: "bg-amber-100 dark:bg-amber-900" },
    { code: "ESFJ", name: "Consul", color: "bg-lime-100 dark:bg-lime-900" },
    { code: "ISTP", name: "Virtuoso", color: "bg-cyan-100 dark:bg-cyan-900" },
    { code: "ISFP", name: "Adventurer", color: "bg-emerald-100 dark:bg-emerald-900" },
    { code: "ESTP", name: "Entrepreneur", color: "bg-rose-100 dark:bg-rose-900" },
    { code: "ESFP", name: "Entertainer", color: "bg-violet-100 dark:bg-violet-900" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {personalityTypes.map((type) => (
        <Link key={type.code} href={`/types/${type.code.toLowerCase()}`}>
          <Card className={`hover:shadow-md transition-shadow cursor-pointer ${type.color}`}>
            <CardContent className="p-4 text-center">
              <h3 className="font-bold text-lg">{type.code}</h3>
              <p className="text-sm">{type.name}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

