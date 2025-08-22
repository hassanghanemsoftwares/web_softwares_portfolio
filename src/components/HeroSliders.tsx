import { useState, useEffect } from "react"

interface SlideData {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
}

const slides: SlideData[] = [
    {
        id: 1,
        title: "Transform Your Business",
        subtitle: "with AppFinity.net",
        description: "We create cutting-edge software solutions that drive growth, enhance efficiency, and deliver exceptional user experiences worldwide.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&auto=format",
    },
    {
        id: 2,
        title: "Build the Future",
        subtitle: "with Modern Tech",
        description: "From AI-powered applications to cloud-native solutions, we leverage cutting-edge technologies to create software that stands the test of time.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&auto=format",
    },
    {
        id: 3,
        title: "Scale Your Success",
        subtitle: "with Expert Solutions",
        description: "Join 500+ successful projects and 150+ satisfied clients who have transformed their businesses with our proven development expertise.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&auto=format",
    }
]

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, currentSlide])

    const current = slides[currentSlide]

    return (
        <section className="relative min-h-screen h-screen overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover scale-105 animate-ken-burns"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-transparent`} />
                        <div className="absolute inset-0 bg-black/20 sm:bg-black/10" />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div
                            key={currentSlide}
                            className="text-white space-y-6 sm:space-y-8 lg:space-y-10 animate-slide-up text-center sm:text-left"
                        >


                            <div className="space-y-4 sm:space-y-6">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                                    {current.title}
                                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                                        {current.subtitle}
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto sm:mx-0">
                                    {current.description}
                                </p>
                            </div>



                            {/* Stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12">
                                {[
                                    { number: "500+", label: "Projects Completed" },
                                    { number: "150+", label: "Happy Clients" },
                                    { number: "99%", label: "Success Rate" },
                                    { number: "24/7", label: "Support" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">{stat.number}</div>
                                        <div className="text-xs sm:text-sm text-white/70 leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation appearance-none p-0 border-0 ${index === currentSlide
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />

                ))}
            </div>

            {/* Mobile Swipe Area */}
            <div className="absolute inset-0 z-10 sm:hidden">
                <div
                    className="absolute left-0 top-0 w-1/2 h-full"
                    onClick={prevSlide}
                />
                <div
                    className="absolute right-0 top-0 w-1/2 h-full"
                    onClick={nextSlide}
                />
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white/20">
                <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-linear"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`
                    }}
                />
            </div>

            {/* Floating Particles */}
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
