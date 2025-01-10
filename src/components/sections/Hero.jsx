/* eslint-disable react/no-unescaped-entities */
import { ChevronDown } from "lucide-react"

function Hero() {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900"></div>
                <div className="relative z-10 max-w-4xl text-center px-4">
                    <div className="animate-fade-in-up">
                        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Fitahiana FLorent
                        </h1>
                        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Développeur Full Stack
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Spécialisé dans la création d'applications web modernes et innovantes
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 flex items-center gap-2">
                                Voir mes projets
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                            <button className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg transition-all duration-300">
                                Me contacter
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
            </section>
        </div>
    )
}

export default Hero
