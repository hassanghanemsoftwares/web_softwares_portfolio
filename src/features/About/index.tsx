import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Award } from "lucide-react"

export default function About() {
   

    const team = [
        {
            name: "Alex Thompson",
            role: "Chief Executive Officer",
            description: "Visionary leader with 15+ years in software development and business strategy.",
            avatar: "AT"
        },
        {
            name: "Sarah Chen",
            role: "Chief Technology Officer",
            description: "Technical expert specializing in scalable architectures and emerging technologies.",
            avatar: "SC"
        },
        {
            name: "Marcus Johnson",
            role: "Head of Design",
            description: "Creative director focused on user experience and interface design excellence.",
            avatar: "MJ"
        },
        {
            name: "Elena Rodriguez",
            role: "Director of Operations",
            description: "Operations expert ensuring smooth project delivery and client satisfaction.",
            avatar: "ER"
        }
    ]

 

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="mb-4">About AppFinity.net</Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Innovating the Future of{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Software Development
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            We are a team of passionate technologists, designers, and strategists dedicated to
                            creating exceptional software solutions that drive business success and digital transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card className="border-primary/20 shadow-lg">
                            <CardHeader className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                    <Target className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-center">
                                    To empower businesses worldwide with innovative software solutions that drive growth,
                                    enhance efficiency, and create exceptional user experiences. We believe technology
                                    should be a catalyst for positive change and measurable business outcomes.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-accent/20 shadow-lg">
                            <CardHeader className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                                    <Award className="h-8 w-8 text-accent" />
                                </div>
                                <CardTitle className="text-2xl">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-center">
                                    To be the global leader in custom software development, recognized for our
                                    technical excellence, innovative solutions, and unwavering commitment to client success.
                                    We envision a world where every business can leverage technology to reach its full potential.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">Meet Our Team</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            The Minds Behind AppFinity.net
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our diverse team of experts brings together years of experience in technology,
                            design, and business to deliver exceptional results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {member.avatar}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-primary font-medium mb-3">{member.role}</p>
                                    <p className="text-muted-foreground text-sm">{member.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

        
        </>
    )
}
