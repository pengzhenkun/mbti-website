"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { personalityTypes } from "@/lib/personality-types"
import { ArrowLeft } from "lucide-react"

export default function TypeDetailPage() {
  const params = useParams()
  const typeCode = (params.type as string).toUpperCase()

  const personalityType = personalityTypes.find((type) => type.code === typeCode) || personalityTypes[0]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/types" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Types
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            {personalityType.code}: {personalityType.name}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{personalityType.shortDescription}</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Type Breakdown</CardTitle>
            <CardDescription>Understanding the {personalityType.code} personality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-bold text-lg">
                  {personalityType.code.charAt(0) === "E" ? "Extraversion (E)" : "Introversion (I)"}
                </h3>
                <p className="text-muted-foreground">
                  {personalityType.code.charAt(0) === "E"
                    ? "Gains energy from interacting with others and the external world."
                    : "Gains energy from quiet reflection and the internal world of ideas."}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-lg">
                  {personalityType.code.charAt(1) === "S" ? "Sensing (S)" : "Intuition (N)"}
                </h3>
                <p className="text-muted-foreground">
                  {personalityType.code.charAt(1) === "S"
                    ? "Focuses on concrete facts, details, and present realities."
                    : "Focuses on patterns, possibilities, and future implications."}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-lg">
                  {personalityType.code.charAt(2) === "T" ? "Thinking (T)" : "Feeling (F)"}
                </h3>
                <p className="text-muted-foreground">
                  {personalityType.code.charAt(2) === "T"
                    ? "Makes decisions based on logic, analysis, and objective criteria."
                    : "Makes decisions based on values, harmony, and how they affect people."}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-lg">
                  {personalityType.code.charAt(3) === "J" ? "Judging (J)" : "Perceiving (P)"}
                </h3>
                <p className="text-muted-foreground">
                  {personalityType.code.charAt(3) === "J"
                    ? "Prefers structure, planning, and resolving matters decisively."
                    : "Prefers flexibility, spontaneity, and keeping options open."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="strengths">Strengths</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="careers">Careers</TabsTrigger>
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <p>{personalityType.description}</p>
            <p>{personalityType.overview}</p>
          </TabsContent>

          <TabsContent value="strengths" className="space-y-4">
            <p>As a {personalityType.code}, you have several natural strengths:</p>
            <ul className="list-disc pl-6 space-y-2">
              {personalityType.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-4">
            <p>Some potential challenges for {personalityType.code}s include:</p>
            <ul className="list-disc pl-6 space-y-2">
              {personalityType.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            <p>Being aware of these tendencies can help you develop strategies to address them.</p>
          </TabsContent>

          <TabsContent value="careers" className="space-y-4">
            <p>
              {personalityType.code}s often thrive in careers that align with their natural preferences and strengths.
              Here are some career paths that might be particularly well-suited for this personality type:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {personalityType.careers.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
            <p>
              Remember that these are just suggestions. Each person's unique combination of skills, interests, and
              values should ultimately guide their career choices.
            </p>
          </TabsContent>

          <TabsContent value="relationships" className="space-y-4">
            <p>
              Understanding personality type can help navigate relationships more effectively. Here's how{" "}
              {personalityType.code}s typically approach different types of relationships:
            </p>
            <h3 className="font-bold text-lg mt-4">Friendships</h3>
            <p>{personalityType.relationships.friendships}</p>

            <h3 className="font-bold text-lg mt-4">Romantic Relationships</h3>
            <p>{personalityType.relationships.romantic}</p>

            <h3 className="font-bold text-lg mt-4">Work Relationships</h3>
            <p>{personalityType.relationships.work}</p>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Growth Opportunities</CardTitle>
            <CardDescription>
              Suggestions for personal development based on the {personalityType.code} personality type
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Every personality type has areas where they can grow and develop. Here are some suggestions for{" "}
              {personalityType.code}s:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {personalityType.growthAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="/test">Take the Test</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

