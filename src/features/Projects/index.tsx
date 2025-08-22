import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Globe, 
  Star,
  Code,
  Smartphone,
  Cloud,
  Shield,
  BarChart3
} from "lucide-react"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "web", label: "Web Apps", icon: Code },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "data", label: "Data Analytics", icon: BarChart3 },
    { id: "cloud", label: "Cloud Solutions", icon: Cloud },
    { id: "security", label: "Security", icon: Shield }
  ]

  const projects = [
    {
      id: 1,
      title: "EcommerceMax Platform",
      category: "web",
      description: "A comprehensive e-commerce solution with AI-powered recommendations and real-time analytics.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      client: "RetailCorp Inc.",
      duration: "6 months",
      year: "2024",
      results: ["300% increase in sales", "50% reduction in cart abandonment", "99.9% uptime"],
      featured: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "HealthTracker Mobile App",
      category: "mobile",
      description: "Cross-platform mobile app for health monitoring with wearable device integration.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      client: "MedTech Solutions",
      duration: "4 months",
      year: "2024",
      results: ["1M+ downloads", "4.8 app store rating", "Featured by Apple"],
      featured: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "DataInsight Analytics Dashboard",
      category: "data",
      description: "Real-time business intelligence dashboard with machine learning insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker"],
      client: "Analytics Pro",
      duration: "5 months",
      year: "2023",
      results: ["40% faster decision making", "Real-time data processing", "Custom ML models"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "CloudMigrate Enterprise",
      category: "cloud",
      description: "Complete cloud migration solution with automated deployment and monitoring.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
      technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "Python"],
      client: "Enterprise Global",
      duration: "8 months",
      year: "2023",
      results: ["75% cost reduction", "Zero downtime migration", "Improved scalability"],
      featured: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "SecureAuth System",
      category: "security",
      description: "Multi-factor authentication system with biometric integration and fraud detection.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
      technologies: ["Node.js", "Redis", "PostgreSQL", "TensorFlow", "Docker"],
      client: "FinanceSecure",
      duration: "7 months",
      year: "2023",
      results: ["99.99% fraud prevention", "Sub-second authentication", "SOC 2 compliant"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "LearnFlow EdTech Platform",
      category: "web",
      description: "Interactive learning management system with video streaming and progress tracking.",
      image: "https://images.unsplash.com/photo-1501290741922-b56c0d59798e?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
      client: "EduTech Innovations",
      duration: "6 months",
      year: "2023",
      results: ["10k+ active students", "95% completion rate", "Award-winning UX"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  const stats = [
    { number: "50+", label: "Completed Projects" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "25+", label: "Industries Served" },
    { number: "500M+", label: "Users Reached" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">Our Work</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Projects That{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of successful projects. From startups to enterprise clients, 
              we've delivered innovative solutions that transform businesses and exceed expectations.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Featured Work</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Showcase Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of our most impactful and innovative projects that demonstrate 
              our expertise across different technologies and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{project.category}</Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm ml-1">Featured</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Key Results:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <Star className="h-3 w-3 mr-2 text-primary" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <div className="text-sm text-muted-foreground">
                      {project.client} • {project.year}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Complete Portfolio</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              All Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our complete portfolio of projects across different categories and industries.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </Button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </Badge>
                    {project.featured && (
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <div className="text-xs text-muted-foreground">
                      {project.year}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss how we can bring your ideas to life with innovative 
              technology solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground   hover:bg-primary-foreground hover:text-primary">
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
