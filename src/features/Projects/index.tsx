import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Star } from "lucide-react";
import { useHome } from "@/hooks/usePublicData";
import { useTranslation } from "react-i18next";
import { getText } from "@/utils/getText";
import NewsletterSection from "@/components/NewsletterSection";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const { data } = useHome();
  const projects = data?.projects || [];
  const settings = data?.setting || [];
  const our_workSetting = settings.find(s => s.key === "our_work");

  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {t("projects")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {getText(our_workSetting?.title, i18n.language)}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {getText(our_workSetting?.description, i18n.language)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={getText(project.title, i18n.language)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    {project.featured && (
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {getText(project.title, i18n.language)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {getText(project.description, i18n.language)}
                  </p>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <div className="text-xs text-muted-foreground">
                      {project.year}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" aria-label={t("externalLink")}>
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" aria-label={t("github")}>
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
