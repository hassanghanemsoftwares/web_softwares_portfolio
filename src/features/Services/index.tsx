import ServicesSection from "@/components/ServicesSection";
import { Badge } from "@/components/ui/badge";
import { useHome } from "@/hooks/usePublicData";
import { getText } from "@/utils/getText";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { i18n, t } = useTranslation();

  const { data } = useHome();
  const settings = data?.setting || [];
  const serviceSetting = settings.find(s => s.key === "services");
  const services = data?.services || [];

  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              {t("ourServices")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {getText(serviceSetting?.title, i18n.language)}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {getText(serviceSetting?.subtitle, i18n.language)}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {getText(serviceSetting?.description, i18n.language)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.length > 0 && (
            <ServicesSection
              services={services}
              i18n={i18n}
              getText={getText}
            />
          )}
        </div>
      </section>
    </>
  );
}
