import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useHome } from "@/hooks/usePublicData"
import { getText } from "@/utils/getText"
import { Target, Award } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function About() {
    const { i18n, t } = useTranslation()
    const { data } = useHome()
    const settings = data?.setting || []
    const about_usSetting = settings.find((s) => s.key === "about_us")
    const mission = settings.find((s) => s.key === "mission")
    const vision = settings.find((s) => s.key === "vision")
    const our_team = settings.find((s) => s.key === "our_team")
    const team = data?.team_members || []

    return (
        <>
            <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="mb-4">{t("AboutAppFinity")}</Badge>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            {getText(about_usSetting?.title, i18n.language)}{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {getText(about_usSetting?.subtitle, i18n.language)}
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            {getText(about_usSetting?.description, i18n.language)}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card className="border-primary/20 shadow-lg">
                            <CardHeader className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                    <Target className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">{t("OurMission")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-center">
                                    {getText(mission?.description, i18n.language)}
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="border-accent/20 shadow-lg">
                            <CardHeader className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                                    <Award className="h-8 w-8 text-accent" />
                                </div>
                                <CardTitle className="text-2xl">{t("OurVision")}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-center">
                                    {getText(vision?.description, i18n.language)}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="secondary" className="mb-4">{t("MeetOurTeam")}</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {getText(our_team?.title, i18n.language)}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            {getText(our_team?.description, i18n.language)}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <img src={member.image} alt="" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{getText(member?.name, i18n.language)}</h3>
                                    <p className="text-primary font-medium mb-3">{getText(member?.role, i18n.language)}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
