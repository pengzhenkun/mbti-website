"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TestIntroduction() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <Card>
      <CardHeader>
        <CardTitle>开始前</CardTitle>
        <CardDescription>了解测试并获取最准确的结果</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="about">关于测试</TabsTrigger>
            <TabsTrigger value="tips">测试技巧</TabsTrigger>
            <TabsTrigger value="faq">常见问题</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <div className="space-y-4">
              <p>迈尔斯-布里格斯类型指标（MBTI）是一种人格评估，帮助你了解自己在四个二分法中的偏好：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>外向（E）vs. 内向（I）：你的注意力焦点和获取能量的方式</strong>
                </li>
                <li>
                  <strong>感觉（S）vs. 直觉（N）：你如何接收信息以及关注什么</strong>
                </li>
                <li>
                  <strong>思考（T）vs. 感受（F）：你如何做决定</strong>
                </li>
                <li>
                  <strong>判断（J）vs. 感知（P）：你如何处理外部世界</strong>
                </li>
              </ul>
              <p>本测试包含20个问题，大约需要5-10分钟完成。你的回答将决定你的四字母人格类型，这是16种可能组合之一。</p>
            </div>
          </TabsContent>
          <TabsContent value="tips">
            <div className="space-y-4">
              <p>为了从这个测试中获得最准确的结果，请记住以下几点：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>诚实回答，不要以你认为应该回答的方式或他人希望你回答的方式作答。</li>
                <li>考虑你通常的状态，而不是在特定情况或压力下的表现。</li>
                <li>不要过度思考你的答案。你的第一反应通常是最准确的。</li>
                <li>没有对错之分。每种偏好都有自己的优势和挑战。</li>
                <li>在安静的环境中进行测试，这样你可以集中精力。</li>
              </ul>
              <p>
                请记住，这个测试是自我发现的工具，而不是决定性标签。你的人格类型可能随时间而演变，你可能会发现自己与多种类型的某些方面都有共鸣。
              </p>
            </div>
          </TabsContent>
          <TabsContent value="faq">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-1">MBTI测试有多准确？</h3>
                <p>
                  MBTI是使用最广泛的人格评估之一，但像所有心理工具一样，它有局限性。它最好用作自我反思的起点，而不是决定性的分类。
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-1">我的人格类型会随时间改变吗？</h3>
                <p>
                  虽然你的核心偏好往往保持稳定，但随着你的成长和发展，这些偏好的表现方式可能会演变。有些人可能还会发现他们的测试结果会根据生活环境而有所不同。
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-1">如果我不同意我的结果怎么办？</h3>
                <p>
                  相信你对自己的了解。测试是一种工具，而不是对你人格的最终判断。你可能想阅读不同类型的描述，看看哪一种与你最为共鸣。
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-1">我如何使用我的结果？</h3>
                <p>
                  你的结果可以帮助你了解自己的优势、挑战和偏好。这种洞察对个人成长、职业规划和改善人际关系都很有价值。
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/">返回</Link>
        </Button>
        <Button asChild>
          <Link href="/test/questions">开始测试</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

