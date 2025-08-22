import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Terms() {
    const lastUpdated = "December 15, 2024"

    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: `By accessing and using AppFinity.net's services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your use of our website, services, and products. If you do not agree to abide by the above, please do not use this service.`
        },
        {
            title: "2. Services Description",
            content: `AppFinity.net provides custom software development, web development, mobile app development, cloud solutions, data analytics, and cybersecurity services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice to our clients.`
        },
        {
            title: "3. User Responsibilities",
            content: `Users are responsible for providing accurate information, maintaining the confidentiality of their account credentials, and complying with all applicable laws and regulations. You agree not to use our services for any unlawful or prohibited activities.`
        },
        {
            title: "4. Intellectual Property Rights",
            content: `All content, features, and functionality on our website are owned by AppFinity.net and are protected by international copyright, trademark, and other intellectual property laws. Custom software developed for clients will be governed by separate project agreements.`
        },
        {
            title: "5. Payment Terms",
            content: `Payment terms are specified in individual project contracts. Generally, we require a deposit before work begins, with remaining payments tied to project milestones. Late payments may incur additional fees as specified in project agreements.`
        },
        {
            title: "6. Project Delivery and Timeline",
            content: `Project timelines are estimates based on project scope and complexity. While we strive to meet all deadlines, timelines may be adjusted due to scope changes, client feedback cycles, or unforeseen technical challenges. Any timeline changes will be communicated promptly.`
        },
        {
            title: "7. Limitation of Liability",
            content: `AppFinity.net shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.`
        },
        {
            title: "8. Confidentiality",
            content: `We respect the confidentiality of all client information and will not disclose any proprietary or sensitive information without explicit consent, except as required by law. We may showcase completed projects with client permission.`
        },
        {
            title: "9. Termination",
            content: `Either party may terminate services with written notice. Upon termination, you will receive all completed work products, and we will return or destroy confidential information as requested. Payment obligations for completed work remain in effect.`
        },
        {
            title: "10. Changes to Terms",
            content: `We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the modified terms.`
        },
        {
            title: "11. Governing Law",
            content: `These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes will be resolved through binding arbitration.`
        },
        {
            title: "12. Contact Information",
            content: `If you have any questions about these Terms of Service, please contact us at legal@appfinity.net or through our contact form. We will respond to all inquiries within 48 hours during business days.`
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="mb-4">Legal</Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Terms of{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Service
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Please read these terms and conditions carefully before using our services.
                            These terms govern your relationship with AppFinity.net.
                        </p>
                        <div className="text-sm text-muted-foreground">
                            Last updated: {lastUpdated}
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Card className="mb-12">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <span>Important Notice</span>
                                </CardTitle>
                                <CardDescription>
                                    Please read carefully before using our services
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Welcome to AppFinity.net. These Terms of Service ("Terms") govern your use of our
                                    website, products, and services. By using our services, you agree to these terms.
                                    If you don't agree to these terms, please don't use our services. We may update
                                    these terms from time to time, and your continued use constitutes acceptance of
                                    any changes.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Terms Sections */}
                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                            {section.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {section.content}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Contact Section */}
                        <Card className="mt-12 border-primary/20">
                            <CardHeader>
                                <CardTitle>Questions About These Terms?</CardTitle>
                                <CardDescription>
                                    We're here to help clarify any questions you may have
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">
                                        If you have any questions about these Terms of Service, please don't hesitate to contact us:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <strong>Email:</strong> legal@appfinity.net
                                        </div>
                                        <div>
                                            <strong>Response Time:</strong> Within 48 hours
                                        </div>
                                        <div>
                                            <strong>Phone:</strong> +1 (555) 123-4567
                                        </div>
                                        <div>
                                            <strong>Business Hours:</strong> Mon-Fri, 8AM-5PM PST
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
