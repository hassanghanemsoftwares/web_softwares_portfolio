import { HomeBanners } from "@/components/HomeBanners";
import { useHome } from "@/hooks/usePublicData";
import { useTranslation } from "react-i18next";
import { getText } from "@/utils/getText";
import { getYouTubeVideoId } from "@/utils/getYouTubeVideoId";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DemonstrationsSection from "@/components/DemonstrationsSection";
import NewsletterSection from "@/components/NewsletterSection";
import { Badge } from "@/components/ui/badge";

export default function Home() {
    const { i18n, t } = useTranslation();
    const { data } = useHome();
    const settings = data?.setting || [];

    const serviceSetting = settings.find(s => s.key === "services");
    const testimonialsSetting = settings.find(s => s.key === "testimonials");
    const demonstrationsSetting = settings.find(s => s.key === "demonstrations");

    const testimonials = data?.testimonials || [];
    const services = data?.services || [];
    const demonstrations = data?.demonstrations || [];
    const home_banners = data?.home_banners || [];
    const stats = data?.stats || [];

    return (
        <>
            {home_banners.length > 0 && <HomeBanners home_banners={home_banners} stats={stats} />}

            {services.length > 0 && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <Badge variant="secondary" className="mb-4">
                                {t("ourServices")}
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                {getText(serviceSetting?.title, i18n.language)}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                {getText(serviceSetting?.description, i18n.language)}
                            </p>
                        </div>
                        <ServicesSection services={services} i18n={i18n} getText={getText} />
                    </div>
                </section>
            )}

            {testimonials.length > 0 && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <Badge variant="secondary" className="mb-4">
                                {t("clientSuccessStories")}
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                {getText(testimonialsSetting?.title, i18n.language)}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                {getText(testimonialsSetting?.description, i18n.language)}
                            </p>
                        </div>
                        <TestimonialsSection testimonials={testimonials} i18n={i18n} getText={getText} />
                    </div>
                </section>
            )}

            {demonstrations.length > 0 && (
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <Badge variant="secondary" className="mb-4">
                                {t("productDemonstrations")}
                            </Badge>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                {getText(demonstrationsSetting?.title, i18n.language)}
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                {getText(demonstrationsSetting?.description, i18n.language)}
                            </p>
                        </div>
                        <DemonstrationsSection
                            demonstrations={demonstrations}
                            i18n={i18n}
                            getText={getText}
                            getYouTubeVideoId={getYouTubeVideoId}
                        />
                    </div>
                </section>
            )}

            <NewsletterSection />
        </>
    );
}
