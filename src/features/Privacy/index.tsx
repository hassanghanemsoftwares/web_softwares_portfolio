import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Database, Globe } from "lucide-react"

export default function Privacy() {
  const lastUpdated = "December 15, 2024"

  

  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us when you use our services, such as when you create an account, request a quote, or contact us. This may include your name, email address, phone number, company information, and project details. We also automatically collect certain information about your device and how you interact with our website using cookies and similar technologies.`
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to provide, maintain, and improve our services, communicate with you about projects and updates, respond to your inquiries, process payments, and send you technical notices and security alerts. We may also use your information to personalize your experience and provide relevant content and recommendations.`
    },
    {
      title: "3. Information Sharing and Disclosure", 
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting business, provided they agree to keep information confidential. We may also disclose information when required by law or to protect our rights.`
    },
    {
      title: "4. Data Security",
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, regular security assessments, access controls, and employee training on data protection practices.`
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled.`
    },
    {
      title: "6. Third-Party Services",
      content: `Our website may contain links to third-party services or integrate with external platforms. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.`
    },
    {
      title: "7. Data Retention",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Project-related data may be retained for record-keeping and support purposes even after project completion.`
    },
    {
      title: "8. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable data protection laws.`
    },
    {
      title: "9. Your Privacy Rights",
      content: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, update, or delete your information, object to processing, or request data portability. Contact us to exercise these rights.`
    },
    {
      title: "10. Children's Privacy",
      content: `Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us so we can take appropriate action.`
    },
    {
      title: "11. Changes to This Policy",
      content: `We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.`
    },
    {
      title: "12. Contact Us",
      content: `If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact our privacy team at privacy@appfinity.net. We are committed to addressing your inquiries promptly and thoroughly.`
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">Privacy & Security</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Privacy{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information when you use our services.
            </p>
            <div className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

 
      {/* Policy Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Data Types We Collect */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Transparency</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Types of Data We Collect
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Name, email, phone number, and contact details you provide when using our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Usage Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Information about how you interact with our website and services.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Technical Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Device information, IP address, and browser data for security and optimization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Privacy Questions or Concerns?</CardTitle>
                <CardDescription>
                  We're committed to protecting your privacy and addressing any concerns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact our privacy team:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Privacy Email:</strong> privacy@appfinity.net
                    </div>
                    <div>
                      <strong>Response Time:</strong> Within 48 hours
                    </div>
                    <div>
                      <strong>General Contact:</strong> contact@appfinity.net
                    </div>
                    <div>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong>Your Rights:</strong> You have the right to access, update, or delete your personal information. 
                      Contact us to exercise these rights or if you have any concerns about how your data is handled.
                    </p>
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
