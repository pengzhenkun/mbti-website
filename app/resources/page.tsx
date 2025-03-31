import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Understanding Cognitive Functions",
      description: "Learn about the eight cognitive functions that form the foundation of MBTI theory.",
      category: "Theory",
      readTime: "8 min read",
    },
    {
      title: "MBTI in the Workplace",
      description: "Discover how understanding personality types can improve team dynamics and communication.",
      category: "Career",
      readTime: "12 min read",
    },
    {
      title: "Relationships and Compatibility",
      description: "Explore how different personality types interact and form relationships.",
      category: "Relationships",
      readTime: "10 min read",
    },
    {
      title: "Personal Growth for Each Type",
      description: "Tailored strategies for development based on your personality preferences.",
      category: "Growth",
      readTime: "15 min read",
    },
    {
      title: "The History of MBTI",
      description: "Explore the origins and development of the Myers-Briggs Type Indicator.",
      category: "Theory",
      readTime: "7 min read",
    },
    {
      title: "MBTI vs. Big Five Personality Traits",
      description: "Compare and contrast these two popular personality frameworks.",
      category: "Theory",
      readTime: "9 min read",
    },
    {
      title: "Finding Your Ideal Career Path",
      description: "Use your personality type to guide your professional development.",
      category: "Career",
      readTime: "11 min read",
    },
    {
      title: "Parenting and Personality Types",
      description: "Understanding your child's personality type and adapting your parenting approach.",
      category: "Relationships",
      readTime: "13 min read",
    },
    {
      title: "Stress Management for Each Type",
      description: "Tailored strategies for managing stress based on your personality preferences.",
      category: "Growth",
      readTime: "10 min read",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">MBTI Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles, guides, and tools to deepen your understanding of MBTI and personality
            types.
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search resources..." className="pl-10" />
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="theory">Theory</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="theory">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources
                .filter((resource) => resource.category === "Theory")
                .map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="career">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources
                .filter((resource) => resource.category === "Career")
                .map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="relationships">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources
                .filter((resource) => resource.category === "Relationships")
                .map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="growth">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources
                .filter((resource) => resource.category === "Growth")
                .map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Subscribe to Our Newsletter</CardTitle>
            <CardDescription>
              Get the latest articles, resources, and insights about MBTI and personality types delivered to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ResourceCard({ resource }: { resource: any }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{resource.title}</CardTitle>
            <CardDescription>{resource.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-primary">{resource.category}</span>
          <span className="text-sm text-muted-foreground">• {resource.readTime}</span>
        </div>
        <Link href="#" className="text-primary font-medium hover:underline">
          Read more →
        </Link>
      </CardFooter>
    </Card>
  )
}

