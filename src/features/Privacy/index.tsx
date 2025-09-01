import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHome } from "@/hooks/usePublicData";
import { getText } from "@/utils/getText";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { i18n, t } = useTranslation();
  const { data } = useHome();
  const lastUpdated = data?.privacies.last_updated || "";

  const privacies = data?.privacies.data || [];
  const settings = data?.setting || [];
  const privacySetting = settings.find(s => s.key === "privacy");

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              {t("privacyAndSecurity")}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {getText(privacySetting?.title, i18n.language)}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {getText(privacySetting?.subtitle, i18n.language)}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {getText(privacySetting?.description, i18n.language)}
            </p>
            <div className="text-sm text-muted-foreground">
              {t("lastUpdated")}: {lastUpdated}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {privacies.map((privacy, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {getText(privacy.title, i18n.language)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {getText(privacy.content, i18n.language)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
