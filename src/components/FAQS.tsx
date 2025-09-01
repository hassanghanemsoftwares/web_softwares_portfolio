import { Section } from "@/types/api.interfaces"
import { getText } from "@/utils/getText";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "./ui/card";

interface StatsProps {
    faqs: Section[]
}
export const FAQS = ({ faqs }: StatsProps) => {
    const { i18n } = useTranslation();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                        <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                            {getText(faq.title, i18n.language)}

                        </h3>
                        <p className="text-muted-foreground">
                            {getText(faq.content, i18n.language)}

                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
