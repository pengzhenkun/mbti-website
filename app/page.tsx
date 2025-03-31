"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PersonalityTypeGrid } from "@/components/personality-type-grid"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">发现你的真实人格类型</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              参加我们全面的 MBTI 人格测试，了解你的偏好、优势和潜在的成长领域。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/test">参加测试</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/types">探索类型</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">发现你的人格类型</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            迈尔斯-布里格斯类型指标（MBTI）是一种人格评估，帮助你了解自己在四个二分法中的偏好，形成16种不同的人格类型。
          </p>
        </div>

        <PersonalityTypeGrid />

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/test">参加测试</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">为什么参加我们的 MBTI 测试？</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            我们科学设计的评估提供关于你的人格和偏好的有价值见解。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">全面评估</h3>
            <p className="text-muted-foreground">我们的测试旨在准确评估你在四个 MBTI 二分法中的偏好。</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">详细结果</h3>
            <p className="text-muted-foreground">获取你的人格类型的详细资料，包括优势、劣势和成长机会。</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">社区见解</h3>
            <p className="text-muted-foreground">与拥有相同人格类型的人联系，从他们的经验中学习。</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="mb-4">
              <svg
                className="h-10 w-10 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">个人成长</h3>
            <p className="text-muted-foreground">利用你的结果更好地了解自己，制定个人和职业成长策略。</p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">热门资源</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              探索我们的文章和资源集合，了解更多关于 MBTI 和人格类型的信息。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-primary mb-2">理论</div>
                <h3 className="text-xl font-bold mb-2">理解认知功能</h3>
                <p className="text-muted-foreground mb-4">了解构成MBTI理论基础的八种认知功能。</p>
                <Link href="/resources" className="text-primary font-medium hover:underline">
                  查看所有资源 →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-primary mb-2">职业</div>
                <h3 className="text-xl font-bold mb-2">职场中的MBTI</h3>
                <p className="text-muted-foreground mb-4">发现了解人格类型如何改善团队动态和沟通。</p>
                <Link href="/resources" className="text-primary font-medium hover:underline">
                  查看所有资源 →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-primary mb-2">人际关系</div>
                <h3 className="text-xl font-bold mb-2">关系和兼容性</h3>
                <p className="text-muted-foreground mb-4">探索不同人格类型如何互动和形成关系。</p>
                <Link href="/resources" className="text-primary font-medium hover:underline">
                  查看所有资源 →
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/resources">查看所有资源</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">用户评价</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            了解我们的 MBTI 测试如何帮助人们获得关于其人格的有价值见解。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold">AJ</span>
                </div>
              </div>
              <p className="mb-4 italic">
                "参加这个MBTI测试让我大开眼界。结果非常准确，帮助我理解为什么我以这种方式处理情况。"
              </p>
              <div>
                <p className="font-bold">张明</p>
                <p className="text-primary">INFJ</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold">SR</span>
                </div>
              </div>
              <p className="mb-4 italic">
                "我以前参加过几次人格测试，但这一次提供了最全面的见解。它在我的职业规划中帮助了我很多。"
              </p>
              <div>
                <p className="font-bold">李华</p>
                <p className="text-primary">ENTJ</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold">TK</span>
                </div>
              </div>
              <p className="mb-4 italic">
                "我的人格类型的详细分析改善了我的人际关系。我现在了解如何更好地与具有不同偏好的人沟通。"
              </p>
              <div>
                <p className="font-bold">王芳</p>
                <p className="text-primary">ISFP</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

