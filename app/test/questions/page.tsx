"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { testQuestions } from "@/lib/test-questions"

export default function QuestionsPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [error, setError] = useState("")

  const question = testQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / testQuestions.length) * 100

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      setError("请在继续前选择一个答案。")
      return
    }

    setError("")

    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      window.scrollTo(0, 0)
    } else {
      // 计算结果并重定向
      const results = calculateResults(answers)
      router.push(`/test/results?type=${results}`)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setError("")
      window.scrollTo(0, 0)
    }
  }

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
    setError("")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              问题 {currentQuestion + 1}/{testQuestions.length}
            </span>
            <span className="text-sm font-medium">完成 {Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{question.text}</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswerChange} className="space-y-4">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 rounded-md border p-3">
                  <RadioGroupItem value={option.value} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
              上一题
            </Button>
            <Button onClick={handleNext}>{currentQuestion < testQuestions.length - 1 ? "下一题" : "查看结果"}</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function calculateResults(answers: Record<number, string>) {
  // 计算偏好
  let e = 0,
    i = 0,
    s = 0,
    n = 0,
    t = 0,
    f = 0,
    j = 0,
    p = 0

  Object.values(answers).forEach((answer) => {
    switch (answer) {
      case "e":
        e++
        break
      case "i":
        i++
        break
      case "s":
        s++
        break
      case "n":
        n++
        break
      case "t":
        t++
        break
      case "f":
        f++
        break
      case "j":
        j++
        break
      case "p":
        p++
        break
    }
  })

  // 确定类型
  const ei = e > i ? "E" : "I"
  const sn = s > n ? "S" : "N"
  const tf = t > f ? "T" : "F"
  const jp = j > p ? "J" : "P"

  return `${ei}${sn}${tf}${jp}`
}

