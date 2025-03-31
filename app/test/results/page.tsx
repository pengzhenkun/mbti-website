"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { personalityTypes } from "@/lib/personality-types"
import { Share2, Bookmark, Printer } from "lucide-react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const typeCode = searchParams.get("type") || "INFJ" // 如果没有提供类型，默认为INFJ

  const personalityType = personalityTypes.find((type) => type.code === typeCode) || personalityTypes[0]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">你的人格类型：{personalityType.code}</h1>
          <p className="text-2xl text-primary mb-4">{personalityType.name}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{personalityType.shortDescription}</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            分享结果
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="mr-2 h-4 w-4" />
            保存结果
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            打印结果
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>类型分析</CardTitle>
            <CardDescription>理解你的四字代码</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-bold text-lg">
                  {personalityType.code.charAt(0) === "E" ? "外向 (E)" : "内向 (I)"}
                </h3>
                <p className="text-muted-foreground">
                  {personalityType.code.charAt(0) === "E"
                    ? "你从与他人互动中获取能量，喜欢参与外部世界的活动。"
                    : "你从安静的反思中获取能量，喜欢专注于内心的想法世界。"}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-lg">
                  {personalityType.code.charAt(1) === "S" ? "感觉 (S)" : "直觉 (N)"}
                </h3>
                <p className="text-muted-foreground">
                  {personalityType.code.charAt(1) === "S"
                    ? "你倾向于关注具体的事实和细节，信任直接来自感官的信息。"
                    : "你倾向于关注模式和可能性，超越当前看到的，思考可能发生的事情。"}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-lg">
                  {personalityType.code.charAt(2) === "T" ? "思考 (T)" : "感受 (F)"}
                </h3>
                <p className="text-muted-foreground">
                  {personalityType.code.charAt(2) === "T"
                    ? "你基于逻辑、分析和客观标准做决定。"
                    : "你基于个人价值观和行动对人的影响做决定。"}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-lg">
                  {personalityType.code.charAt(3) === "J" ? "判断 (J)" : "感知 (P)"}
                </h3>
                <p className="text-muted-foreground">
                  {personalityType.code.charAt(3) === "J"
                    ? "你喜欢结构、计划和果断地解决问题。"
                    : "你喜欢灵活性、自发性和保持选择开放。"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="overview">概述</TabsTrigger>
            <TabsTrigger value="strengths">优势</TabsTrigger>
            <TabsTrigger value="challenges">挑战</TabsTrigger>
            <TabsTrigger value="careers">职业</TabsTrigger>
            <TabsTrigger value="relationships">人际关系</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <p>{personalityType.description}</p>
            <p>{personalityType.overview}</p>
          </TabsContent>

          <TabsContent value="strengths" className="space-y-4">
            <p>作为{personalityType.code}，你有几个天然的优势：</p>
            <ul className="list-disc pl-6 space-y-2">
              {personalityType.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-4">
            <p>{personalityType.code}可能面临的一些潜在挑战包括：</p>
            <ul className="list-disc pl-6 space-y-2">
              {personalityType.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            <p>意识到这些倾向可以帮助你制定策略来应对它们。</p>
          </TabsContent>

          <TabsContent value="careers" className="space-y-4">
            <p>
              {personalityType.code}
              通常在与其自然偏好和优势相符的职业中表现出色。以下是一些可能特别适合你的人格类型的职业道路：
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {personalityType.careers.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
            <p>请记住，这些只是建议。你独特的技能、兴趣和价值观组合最终应该指导你的职业选择。</p>
          </TabsContent>

          <TabsContent value="relationships" className="space-y-4">
            <p>
              了解你的人格类型可以帮助你更有效地处理人际关系。以下是{personalityType.code}通常如何处理不同类型的关系：
            </p>
            <h3 className="font-bold text-lg mt-4">友谊</h3>
            <p>{personalityType.relationships.friendships}</p>

            <h3 className="font-bold text-lg mt-4">浪漫关系</h3>
            <p>{personalityType.relationships.romantic}</p>

            <h3 className="font-bold text-lg mt-4">工作关系</h3>
            <p>{personalityType.relationships.work}</p>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>成长机会</CardTitle>
            <CardDescription>基于你的人格类型的个人发展建议</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>每种人格类型都有可以成长和发展的领域。以下是对{personalityType.code}的一些建议：</p>
            <ul className="list-disc pl-6 space-y-2">
              {personalityType.growthAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/types">探索所有类型</Link>
            </Button>
            <Button asChild>
              <Link href="/resources">探索资源</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

