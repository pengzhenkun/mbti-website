import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "How Understanding Your MBTI Type Can Transform Your Relationships",
    excerpt:
      "Discover how personality type awareness can help you communicate better, resolve conflicts, and build stronger connections with others.",
    image: "/placeholder.svg?height=400&width=800",
    date: "May 15, 2023",
    author: {
      name: "Dr. Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Psychologist & MBTI Practitioner",
    },
    category: "Relationships",
  }

  const recentPosts = [
    {
      id: 2,
      title: "The Science Behind MBTI: What Research Tells Us",
      excerpt:
        "An exploration of the scientific validity of the Myers-Briggs Type Indicator and what current research reveals about personality typing.",
      image: "/placeholder.svg?height=200&width=400",
      date: "April 28, 2023",
      author: {
        name: "Dr. Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Research Psychologist",
      },
      category: "Theory",
    },
    {
      id: 3,
      title: "MBTI in the Workplace: Improving Team Dynamics",
      excerpt:
        "Learn how understanding personality types can enhance collaboration, reduce conflict, and increase productivity in professional settings.",
      image: "/placeholder.svg?height=200&width=400",
      date: "April 15, 2023",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "HR Director & Team Coach",
      },
      category: "Career",
    },
    {
      id: 4,
      title: "Developing Your Inferior Function: A Path to Growth",
      excerpt:
        "Explore how working with your least developed cognitive function can lead to personal growth and a more balanced personality.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 30, 2023",
      author: {
        name: "Alex Rivera",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Personal Development Coach",
      },
      category: "Growth",
    },
  ]

  const popularCategories = [
    { name: "Theory", count: 24 },
    { name: "Relationships", count: 18 },
    { name: "Career", count: 15 },
    { name: "Growth", count: 12 },
    { name: "Case Studies", count: 9 },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">MBTI Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, research, and practical advice about MBTI and personality development
          </p>
        </div>

        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <Badge className="mb-2">{featuredPost.category}</Badge>
              <Link href={`/blog/${featuredPost.id}`}>
                <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">{featuredPost.title}</h2>
              </Link>
              <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                    <AvatarFallback>
                      {featuredPost.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{featuredPost.author.name}</p>
                    <p className="text-sm text-muted-foreground">{featuredPost.author.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{featuredPost.date}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
            <div className="space-y-8">
              {recentPosts.map((post) => (
                <Card key={post.id}>
                  <div className="md:flex">
                    <div className="relative h-[200px] md:h-auto md:w-1/3">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <Badge className="mb-2">{post.category}</Badge>
                      <Link href={`/blog/${post.id}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>
                              {post.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-sm font-medium">{post.author.name}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Subscribe</CardTitle>
                  <CardDescription>Get the latest articles delivered to your inbox</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="Your email address" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {popularCategories.map((category, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <Link
                          href={`/blog/category/${category.name.toLowerCase()}`}
                          className="hover:text-primary transition-colors"
                        >
                          {category.name}
                        </Link>
                        <Badge variant="outline">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">#MBTI</Badge>
                    <Badge variant="secondary">#Personality</Badge>
                    <Badge variant="secondary">#SelfDevelopment</Badge>
                    <Badge variant="secondary">#Psychology</Badge>
                    <Badge variant="secondary">#Relationships</Badge>
                    <Badge variant="secondary">#Career</Badge>
                    <Badge variant="secondary">#CognitiveFunctions</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

