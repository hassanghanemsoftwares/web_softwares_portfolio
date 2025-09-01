import React from "react"
import { useNavigate } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, ArrowRight } from "lucide-react"
import { Service } from "@/types/api.interfaces"
import { useTranslation } from "react-i18next"

interface ServicesSectionProps {
  services: Service[]
  i18n: { language: string }
  getText: (text: Record<string, string> | undefined, lang: string) => string
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  i18n,
  getText,
}) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  if (!services || services.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card
          key={index}
          className={`relative group hover:shadow-xl transition-all duration-300 ${
            service.popular ? "border-primary shadow-lg" : ""
          }`}
        >
          {service.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">
                <Star className="h-3 w-3 mr-1" />
                {t("mostPopular")}
              </Badge>
            </div>
          )}

          <CardHeader className="pb-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mb-4">
              <img
                src={service.image}
                className="h-6 w-6 icon"
                alt={t("serviceIconAlt")}
              />
            </div>
            <CardTitle className="group-hover:text-primary transition-colors duration-300">
              {getText(service.title, i18n.language)}
            </CardTitle>
            <CardDescription className="text-base">
              {getText(service.description, i18n.language)}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  {getText(feature.description, i18n.language)}
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t">
              <Button
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                variant={service.popular ? "default" : "outline"}
                onClick={() => navigate("/contact")}
              >
                {t("getStarted")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ServicesSection
