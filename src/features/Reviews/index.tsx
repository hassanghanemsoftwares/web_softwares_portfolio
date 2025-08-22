import { useState } from "react"
import { AddReview } from "@/components/AddReview"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Plus, Quote, Users, TrendingUp, Award } from "lucide-react"

export default function Reviews() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const stats = [
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "150+", label: "Happy Clients", icon: Users },
    { number: "95%", label: "Satisfaction Rate", icon: TrendingUp },
    { number: "25+", label: "Industry Awards", icon: Award }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "AppFinity.net delivered exceptional results beyond our expectations. Their team's expertise in React and Node.js helped us build a scalable platform that now serves over 100,000 users daily. The project was completed on time and the ongoing support has been outstanding.",
      rating: 5,
      avatar: "SJ",
      projectType: "Web Platform Development",
      date: "November 2024"
    },
    {
      name: "Michael Chen",
      company: "StartupX",
      role: "Founder & CEO",
      content: "Working with AppFinity.net was a game-changer for our startup. They helped us scale rapidly with robust cloud solutions and delivered a mobile app that got featured on the App Store. Their agile approach and technical expertise made all the difference.",
      rating: 5,
      avatar: "MC",
      projectType: "Mobile App & Cloud Migration",
      date: "October 2024"
    },
    {
      name: "Emily Rodriguez",
      company: "Enterprise Inc",
      role: "Product Manager",
      content: "The quality of code and project management was outstanding. AppFinity.net transformed our legacy system into a modern, scalable application. They delivered on time, within budget, and provided excellent documentation and training for our team.",
      rating: 5,
      avatar: "ER",
      projectType: "Legacy System Modernization",
      date: "September 2024"
    },
    {
      name: "David Thompson",
      company: "FinanceFlow",
      role: "VP of Technology",
      content: "AppFinity.net's security expertise was crucial for our financial platform. They implemented enterprise-grade security measures and helped us achieve SOC 2 compliance. Their attention to detail and security best practices gave us complete confidence.",
      rating: 5,
      avatar: "DT",
      projectType: "Security & Compliance",
      date: "August 2024"
    },
    {
      name: "Lisa Wang",
      company: "HealthTech Pro",
      role: "Chief Innovation Officer",
      content: "The data analytics dashboard they built revolutionized how we make decisions. Real-time insights, beautiful visualizations, and machine learning capabilities all delivered flawlessly. The ROI has been incredible.",
      rating: 5,
      avatar: "LW",
      projectType: "Data Analytics Platform",
      date: "July 2024"
    },
    {
      name: "James Parker",
      company: "EduLearn",
      role: "Director of Technology",
      content: "AppFinity.net understood our vision for an interactive learning platform and exceeded our expectations. The video streaming capabilities and progress tracking features they built have increased student engagement by 300%.",
      rating: 5,
      avatar: "JP",
      projectType: "EdTech Platform",
      date: "June 2024"
    }
  ]

  const categories = [
    { name: "All Reviews", count: testimonials.length },
    { name: "Web Development", count: 8 },
    { name: "Mobile Apps", count: 6 },
    { name: "Cloud Solutions", count: 5 },
    { name: "Data Analytics", count: 4 },
    { name: "Security", count: 3 }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">Client Testimonials</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Clients Say
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Real feedback from real clients who have transformed their businesses 
              with our innovative software solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* Add Review Button */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6 mt-8">
                  <Plus className="mr-2 h-5 w-5" />
                  Share Your Experience
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add Your Review</DialogTitle>
                  <DialogDescription>
                    Share your experience working with AppFinity.net
                  </DialogDescription>
                </DialogHeader>
                <AddReview onClose={() => setIsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="flex items-center space-x-2"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="flex space-x-1 mr-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.projectType}
                    </Badge>
                  </div>
                  
                  <div className="relative mb-6 flex-1">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground italic leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's work together to create the next amazing project. 
                Your success story could be featured here next!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Start Your Project
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Plus className="mr-2 h-5 w-5" />
                      Add Your Review
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Add Your Review</DialogTitle>
                      <DialogDescription>
                        Share your experience working with AppFinity.net
                      </DialogDescription>
                    </DialogHeader>
                    <AddReview />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
