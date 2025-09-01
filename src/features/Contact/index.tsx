import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { useHome } from "@/hooks/usePublicData"
import { getText } from "@/utils/getText"
import { useContactLogic } from "./hooks/useContactLogic"
import { FAQS } from "@/components/FAQS"

export default function Contact() {
  const { i18n, t } = useTranslation()

  const { data } = useHome()
  const configurations = data?.configurations || []
  const contactPhone = configurations.find(item => item.key === 'contact_phone')?.value
  const contactemail = configurations.find(item => item.key === 'contact_email')?.value
  const store_address = configurations.find(item => item.key === 'store_address')?.value
  const store_address_map = configurations.find(item => item.key === 'store_address_map')?.value
  const business_days = configurations.find(item => item.key === 'business_days')?.value
  const business_hours = configurations.find(item => item.key === 'business_hours')?.value

  const faqs = data?.faqs.data || []
  const get_in_touchs = data?.get_in_touches || []
  const settings = data?.setting || []

  const faqSetting = settings.find(s => s.key === "faq")
  const get_in_touchSetting = settings.find(s => s.key === "get_in_touch")
  const contact_usSetting = settings.find(s => s.key === "contact_us")

  const { form, onSubmit, isSubmitting } = useContactLogic()

  const contactInfo = [
    {
      icon: Mail,
      title: t("EmailUs"),
      description: t("EmailDescription"),
      value: contactemail,
      link: "mailto:" + contactemail
    },
    {
      icon: Phone,
      title: t("CallUs"),
      description: t("CallDescription"),
      value: contactPhone,
      link: "tel:" + contactPhone
    },
    {
      icon: MapPin,
      title: t("VisitUs"),
      description: t("VisitDescription"),
      value: store_address,
      link: store_address_map
    },
    {
      icon: Clock,
      title: t("BusinessHours"),
      description: business_days,
      value: business_hours,
      link: null
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">{t("ContactUs")}</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {getText(contact_usSetting?.title, i18n.language)}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {getText(contact_usSetting?.subtitle, i18n.language)}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {getText(contact_usSetting?.description, i18n.language)}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {info.description}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary hover:underline font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-primary font-medium">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Get In Touch + Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Get In Touch */}
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4">{t("GetInTouch")}</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  {getText(get_in_touchSetting?.title, i18n.language)}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {getText(get_in_touchSetting?.description, i18n.language)}
                </p>
              </div>

              <div className="space-y-6">
                {get_in_touchs.map((get_in_touch, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <img src={get_in_touch.image} alt="" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        {getText(get_in_touch.title, i18n.language)}
                      </h3>
                      <p className="text-muted-foreground">
                        {getText(get_in_touch.description, i18n.language)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>{t("ProjectInformation")}</CardTitle>
                <CardDescription>{t("ProjectInfoDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Name")} *</FormLabel>
                          <FormControl>
                            <Input placeholder={t("NamePlaceholder")} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("Email")} *</FormLabel>
                            <FormControl>
                              <Input placeholder={t("EmailPlaceholder")} type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("Phone")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("PhonePlaceholder")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("ProjectDetails")} *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("ProjectDetailsPlaceholder")}
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>{t("ProjectDetailsDescription")}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Terms */}
                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="mt-1"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              {t("AgreeTerms")}{" "}
                              <a href="/terms" className="text-primary underline">
                                {t("TermsOfService")}
                              </a>{" "}
                              {t("And")}{" "}
                              <a href="/privacy" className="text-primary underline">
                                {t("PrivacyPolicy")}
                              </a> *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t("Sending") : <>
                        {t("SendMessage")} <Send className="ml-2 h-5 w-5" />
                      </>}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">{t("FAQ")}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {getText(faqSetting?.title, i18n.language)}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {getText(faqSetting?.description, i18n.language)}
            </p>
          </div>

          <FAQS faqs={faqs} />
        </div>
      </section>
    </>
  )
}
