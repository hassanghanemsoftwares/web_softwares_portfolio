import { ArrowRight, Star, Play, Zap, Shield, Code, Smartphone, Globe, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroSlider } from "@/components/HeroSliders"

export default function Home() {

 
    const features = [
        {
            icon: Code,
            title: "Custom Software Development",
            description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs."
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications that engage users and drive growth."
        },
        {
            icon: Globe,
            title: "Web Development",
            description: "Responsive, scalable web applications with modern frameworks and best practices."
        },
        {
            icon: BarChart3,
            title: "Data Analytics",
            description: "Transform your data into actionable insights with advanced analytics solutions."
        },
        {
            icon: Shield,
            title: "Cybersecurity",
            description: "Protect your digital assets with comprehensive security audits and implementations."
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Accelerate your applications with advanced optimization techniques and monitoring."
        }
    ]

    const testimonials = [
        {
            name: "Sarah Johnson",
            company: "TechCorp Solutions",
            role: "CTO",
            content: "AppFinity.net delivered exceptional results. Their team's expertise and attention to detail exceeded our expectations.",
            rating: 5,
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            company: "StartupX",
            role: "Founder",
            content: "Working with AppFinity.net was a game-changer for our startup. They helped us scale rapidly with robust solutions.",
            rating: 5,
            avatar: "MC"
        },
        {
            name: "Emily Rodriguez",
            company: "Enterprise Inc",
            role: "Product Manager",
            content: "The quality of code and project management was outstanding. They delivered on time and within budget.",
            rating: 5,
            avatar: "ER"
        }
    ]




    return (
        <>
            <HeroSlider />
            {/* Services Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Our Services</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Comprehensive Software Solutions
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            From concept to deployment, we provide end-to-end software development services
                            that help businesses thrive in the digital age.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <CardHeader>
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

     

            {/* Testimonials Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Client Success Stories</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Don't just take our word for it. Hear from our satisfied clients who have
                            transformed their businesses with our solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-6 italic">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center space-x-3">
                                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                                            <span className="text-primary-foreground font-semibold text-sm">
                                                {testimonial.avatar}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {testimonial.role}, {testimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Showcase Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Product Demonstrations</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            See Our Software in Action
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Watch these comprehensive tutorials and demonstrations to understand
                            how our software solutions can transform your business operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 aspect-video flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                                <Button size="lg" className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <Play className="mr-2 h-6 w-6" />
                                    Play Demo
                                </Button>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Platform Overview</h3>
                                <p className="text-muted-foreground">
                                    Get a comprehensive overview of our flagship platform and its core features.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 aspect-video flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                                <Button size="lg" className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <Play className="mr-2 h-6 w-6" />
                                    Play Tutorial
                                </Button>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Getting Started Guide</h3>
                                <p className="text-muted-foreground">
                                    Learn how to set up and configure your account in just a few minutes.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl opacity-90">
                            Join hundreds of satisfied clients who have revolutionized their operations
                            with our innovative software solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
