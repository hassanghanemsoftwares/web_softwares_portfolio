import { HomeBanner, Stat } from "@/types/api.interfaces"
import { getText } from "@/utils/getText";
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";
import { Stats } from "./Stats";

interface HomeBannersProps {
    home_banners: HomeBanner[];
    stats: Stat[]

}
export const HomeBanners = ({ home_banners, stats }: HomeBannersProps) => {
    const { i18n } = useTranslation();

    const [currentbanner, setCurrentbanner] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextbanner = () => {
        setCurrentbanner((prev) => (prev + 1) % home_banners.length)
    }

    const prevbanner = () => {
        setCurrentbanner((prev) => (prev - 1 + home_banners.length) % home_banners.length)
    }

    const goTobanner = (index: number) => {
        setCurrentbanner(index)
    }

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextbanner()
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, currentbanner])

    const current = home_banners[currentbanner]
    return (
        <section className="relative min-h-screen h-screen overflow-hidden">
            <div className="absolute inset-0">
                {home_banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentbanner ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={banner.image}
                            alt={getText(banner.title, i18n.language)}

                            className="w-full h-full object-cover scale-105 animate-ken-burns"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-transparent`} />
                        <div className="absolute inset-0 bg-black/20 sm:bg-black/10" />
                    </div>
                ))}
            </div>

            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div
                            key={currentbanner}
                            className="text-white space-y-6 sm:space-y-8 lg:space-y-10 animate-banner-up text-center sm:text-left"
                        >
                            <div className="space-y-4 sm:space-y-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                                    {getText(current.title, i18n.language)}
                                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                                        {getText(current.subtitle, i18n.language)}
                                    </span>
                                </h1>
                            </div>
                            <Stats stats={stats} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
                {home_banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTobanner(index)}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation appearance-none p-0 border-0 ${index === currentbanner
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />

                ))}
            </div>

            <div className="absolute inset-0 z-10 sm:hidden">
                <div
                    className="absolute left-0 top-0 w-1/2 h-full"
                    onClick={prevbanner}
                />
                <div
                    className="absolute right-0 top-0 w-1/2 h-full"
                    onClick={nextbanner}
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white/20">
                <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-linear"
                    style={{
                        width: `${((currentbanner + 1) / home_banners.length) * 100}%`
                    }}
                />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
        </section>
    )
}
