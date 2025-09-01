"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { useFullPageLoading } from "@/context/FullPageLoadingContext"
import { newsletterSubscribe } from "@/lib/services/newsletter-services"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { useTranslation } from "react-i18next"


const newsletterSchema = (t: (key: string) => string) =>
    z.object({
        email: z.string().email(t("enterValidEmail")),
    })

type NewsletterFormData = z.infer<ReturnType<typeof newsletterSchema>>

const NewsletterSection: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { setFullPageLoading } = useFullPageLoading()
    const { executeRecaptcha } = useGoogleReCaptcha()
    const { t } = useTranslation()

    const form = useForm<NewsletterFormData>({
        resolver: zodResolver(newsletterSchema(t)),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = async (data: NewsletterFormData) => {
        if (!executeRecaptcha) {
            toast.error(t("recaptchaFailed"))
            return
        }

        setIsSubmitting(true)
        setFullPageLoading(true)

        try {
            const recaptchaToken = await executeRecaptcha("newsletter")
            await newsletterSubscribe(data.email, recaptchaToken)
            toast.success(t("subscribedSuccessfully"))
            form.reset()
        } catch (error) {
            toast.error(t("somethingWentWrong"))
        } finally {
            setIsSubmitting(false)
            setFullPageLoading(false)
        }
    }

    return (
        <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        {t("subscribeToNewsletter")}
                    </h2>
                    <p className="text-xl opacity-90">
                        {t("newsletterDescription")}
                    </p>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder={t("enterYourEmail")}
                                                {...field}
                                                className="px-4 py-6 text-lg rounded-2xl"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                size="lg"
                                variant="secondary"
                                className="text-lg px-8 py-6"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? t("subscribing") : (
                                    <>
                                        {t("subscribe")} <ArrowRight className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSection
