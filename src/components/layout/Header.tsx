import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "../theme-toggle"
import { Button } from "@/components/ui/button"
import { navItems } from "@/constants/data"
import { useTranslation } from "react-i18next"
import LocaleSwitcher from "../LocaleSwitcher"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/logo-horizontal-bg-white-removebg.png"
              alt="AppFinity"
              width={200}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4"
              >
                {t(item.title)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LocaleSwitcher />

            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.title)}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
