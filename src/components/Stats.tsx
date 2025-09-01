import { Stat } from "@/types/api.interfaces"
import { getText } from "@/utils/getText";
import { useTranslation } from "react-i18next";

interface StatsProps {
    stats: Stat[]
}
export const Stats = ({ stats }: StatsProps) => {
    const { i18n } = useTranslation();
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12">
            {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-white/70 leading-tight"> {getText(stat.label, i18n.language)}</div>
                </div>
            ))}
        </div>
    )
}
