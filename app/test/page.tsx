import { TestIntroduction } from "@/components/test/test-introduction"

export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">MBTI Personality Test</h1>
        <TestIntroduction />
      </div>
    </div>
  )
}

