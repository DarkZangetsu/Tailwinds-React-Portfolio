import { Briefcase, ExternalLink } from "lucide-react"

function Project() {
    return (
        <div>
            {/* Projects Section */}
            <section id="projets" className="min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <Briefcase className="w-8 h-8 text-blue-500" />
                        <h2 className="text-4xl font-bold">Projets</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-48 bg-gray-700"></div>
                                <div className="p-6 relative z-10">
                                    <h3 className="text-xl font-bold mb-2">Projet {item}</h3>
                                    <p className="text-gray-400 mb-4">Description du projet avec les technologies utilisées</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">React</span>
                                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Node.js</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                                            Voir plus <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project
