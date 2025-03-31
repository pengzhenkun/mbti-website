import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Eye } from "lucide-react"

export default function ForumPage() {
  const discussions = [
    {
      id: 1,
      title: "How accurate do you find MBTI in predicting behavior?",
      author: {
        name: "Alex Johnson",
        type: "INFJ",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "General Discussion",
      replies: 24,
      views: 156,
      likes: 18,
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      title: "INTJ vs INTP: What are the key differences you've noticed?",
      author: {
        name: "Sam Rodriguez",
        type: "ENTJ",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Type Comparisons",
      replies: 32,
      views: 203,
      likes: 27,
      lastActivity: "5 hours ago",
    },
    {
      id: 3,
      title: "How has understanding your type improved your relationships?",
      author: {
        name: "Taylor Kim",
        type: "ISFP",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Relationships",
      replies: 19,
      views: 142,
      likes: 15,
      lastActivity: "1 day ago",
    },
    {
      id: 4,
      title: "Career paths for ENFPs - what has worked for you?",
      author: {
        name: "Jordan Smith",
        type: "ENFP",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Career",
      replies: 28,
      views: 187,
      likes: 22,
      lastActivity: "2 days ago",
    },
    {
      id: 5,
      title: "How do you handle stress as an ISTJ?",
      author: {
        name: "Casey Williams",
        type: "ISTJ",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      category: "Personal Growth",
      replies: 15,
      views: 98,
      likes: 12,
      lastActivity: "3 days ago",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Community Forum</h1>
          <Button asChild>
            <Link href="/forum/new">Start a Discussion</Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-6 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>Recent Discussions</CardTitle>
                <CardDescription>Join the conversation about MBTI and personality types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <DiscussionCard key={discussion.id} discussion={discussion} />
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Other tab contents would be similar but filtered by category */}
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Discussions</CardTitle>
                <CardDescription>Conversations about MBTI theory and applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discussions
                    .filter((d) => d.category === "General Discussion")
                    .map((discussion) => (
                      <DiscussionCard key={discussion.id} discussion={discussion} />
                    ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Similar structure for other tabs */}
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">#INFJ</Badge>
                <Badge variant="secondary">#Relationships</Badge>
                <Badge variant="secondary">#Career</Badge>
                <Badge variant="secondary">#Introvert</Badge>
                <Badge variant="secondary">#ENFP</Badge>
                <Badge variant="secondary">#CognitiveFunctions</Badge>
                <Badge variant="secondary">#PersonalGrowth</Badge>
                <Badge variant="secondary">#INTJ</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Alex Johnson", type: "INFJ", posts: 87 },
                  { name: "Sam Rodriguez", type: "ENTJ", posts: 64 },
                  { name: "Taylor Kim", type: "ISFP", posts: 52 },
                ].map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarFallback>
                          {contributor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{contributor.name}</p>
                        <p className="text-sm text-muted-foreground">{contributor.type}</p>
                      </div>
                    </div>
                    <p className="text-sm">{contributor.posts} posts</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Forum Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Be respectful and considerate of others</li>
                <li>Stay on topic and contribute meaningfully</li>
                <li>No promotional content or spam</li>
                <li>Respect privacy and confidentiality</li>
                <li>Report inappropriate content</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/forum/guidelines" className="text-primary text-sm hover:underline">
                Read full guidelines
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function DiscussionCard({ discussion }: { discussion: any }) {
  return (
    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
      <div className="flex justify-between">
        <div>
          <Link
            href={`/forum/discussion/${discussion.id}`}
            className="font-medium text-lg hover:text-primary transition-colors"
          >
            {discussion.title}
          </Link>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                <AvatarFallback>
                  {discussion.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">{discussion.author.name}</span>
              <Badge variant="outline" className="text-xs">
                {discussion.author.type}
              </Badge>
            </div>
            <span className="text-xs text-muted-foreground">Last activity: {discussion.lastActivity}</span>
          </div>
        </div>
        <Badge>{discussion.category}</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MessageSquare className="h-4 w-4" />
          <span>{discussion.replies} replies</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="h-4 w-4" />
          <span>{discussion.views} views</span>
        </div>
        <div className="flex items-center gap-1">
          <ThumbsUp className="h-4 w-4" />
          <span>{discussion.likes} likes</span>
        </div>
      </div>
    </div>
  )
}

