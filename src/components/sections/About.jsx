/* eslint-disable react/no-unescaped-entities */
import { Code, User } from "lucide-react";


function About() {
    return (
        <div>
            {/* About Section */}
            <section id="about" className="min-h-screen py-20 px-4 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <User className="w-8 h-8 text-blue-500" />
                        <h2 className="text-4xl font-bold">À propos</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Passionné par le développement web depuis plus de 5 ans, je crée des applications web modernes et performantes. Mon expertise couvre l'ensemble de la stack technique, du frontend au backend.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Développement Full Stack</h3>
                                        <p className="text-gray-400">React, Node.js, TypeScript</p>
                                    </div>
                                </div>
                                {/* Add more experience items */}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-900">
                                <img
                                    src="/api/placeholder/400/400"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About

