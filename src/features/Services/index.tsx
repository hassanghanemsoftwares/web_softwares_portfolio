import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code, 
  Smartphone, 
  Globe, 
  Shield, 
  Cloud, 
  Database,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements.",
      features: [
        "Full-stack development",
        "Legacy system modernization",
        "API development & integration",
        "Microservices architecture"
      ],
      pricing: "Starting at $25,000",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android development",
        "React Native & Flutter",
        "App Store optimization",
        "Mobile UI/UX design"
      ],
      pricing: "Starting at $15,000",
      popular: true
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications using cutting-edge frameworks and technologies.",
      features: [
        "React, Vue, Angular development",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "Content Management Systems"
      ],
      pricing: "Starting at $10,000",
      popular: false
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        "AWS, Azure, GCP deployment",
        "Cloud migration strategies",
        "DevOps & CI/CD pipelines",
        "Infrastructure as Code"
      ],
      pricing: "Starting at $8,000",
      popular: false
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Transform your data into actionable insights with advanced analytics and BI solutions.",
      features: [
        "Data warehouse design",
        "ETL/ELT processes",
        "Business intelligence dashboards",
        "Machine learning models"
      ],
      pricing: "Starting at $12,000",
      popular: false
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: [
        "Security audits & assessments",
        "Penetration testing",
        "Compliance consulting",
        "Security monitoring"
      ],
      pricing: "Starting at $5,000",
      popular: false
    }
  ]



  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Software Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From custom software development to cloud solutions, we provide end-to-end 
              services that help businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index} 
                  className={`relative group hover:shadow-xl transition-all duration-300 ${
                    service.popular ? 'border-primary shadow-lg' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t">
                      <div className="text-lg font-semibold text-primary mb-4">
                        {service.pricing}
                      </div>
                      <Button 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                        variant={service.popular ? "default" : "outline"}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
