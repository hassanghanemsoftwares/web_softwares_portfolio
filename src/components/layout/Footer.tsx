import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const footerLinks = {
    company: [
      { name: t("AboutUs"), href: "/about" },
      { name: t("Services"), href: "/services" },
      { name: t("Projects"), href: "/projects" },
    ],
    support: [
      { name: t("Contact"), href: "/contact" },
      { name: t("PrivacyPolicy"), href: "/privacy" },
      { name: t("TermsOfService"), href: "/terms" },
    ],
    social: [
      { name: t("GitHub"), href: "#", icon: Github },
      { name: t("Twitter"), href: "#", icon: Twitter },
      { name: t("LinkedIn"), href: "#", icon: Linkedin },
      { name: t("Email"), href: "mailto:contact@appfinity", icon: Mail },
    ],
  }

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">          <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AppFinity
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {t("BrandDescription")}
          </p>
          <div className="flex space-x-4">
            {footerLinks.social.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
          <div>
            <h3 className="font-semibold mb-4">{t("Company")}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t("Support")}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {t("Copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  )
}
