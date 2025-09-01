import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useFullPageLoading } from "@/context/FullPageLoadingContext"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { toast } from "sonner"
import { submitContact } from "@/lib/services/contact-service"
import { useTranslation } from "react-i18next"

const createContactFormSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, t("firstNameMin")),
    email: z.string().email(t("validEmail")),
    phone: z.string().optional(),
    message: z.string().min(10, t("messageMin")),
    terms: z.boolean().refine((val) => val === true, t("mustAgreeTerms")),
  })

export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>

export function useContactLogic() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setFullPageLoading } = useFullPageLoading()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const form = useForm<ContactFormData>({
    resolver: zodResolver(createContactFormSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    if (!executeRecaptcha) {
      toast.error(t("recaptchaFail"))
      setIsSubmitting(false)
      return
    }

    setFullPageLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const recaptchaToken = await executeRecaptcha("contact")

      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("phone", data.phone ?? "")
      formData.append("message", data.message)
      formData.append("recaptcha_token", recaptchaToken)

      await submitContact(formData)
      form.reset()
      toast.success(t("messageSent"))
    } catch (error) {
      toast.error(t("unexpectedError"))
    } finally {
      setIsSubmitting(false)
      setFullPageLoading(false)
    }
  }

  return {
    form,
    onSubmit,
    isSubmitting,
  }
}
