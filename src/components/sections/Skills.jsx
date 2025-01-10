/* eslint-disable no-unused-vars */
import { Code } from "lucide-react"

function Skills() {
    return (
        <div>
            {/* Skills Section */}
            <section id="competences" className="min-h-screen py-20 px-4 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <Code className="w-8 h-8 text-blue-500" />
                        <h2 className="text-4xl font-bold">Compétences</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Frontend', 'Backend', 'Outils'].map((category, index) => (
                            <div key={category} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl">
                                <h3 className="text-xl font-bold mb-6">{category}</h3>
                                <div className="space-y-6">
                                    {[1, 2, 3].map((skill) => (
                                        <div key={skill} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span>Technologie {skill}</span>
                                                <span className="text-blue-400">90%</span>
                                            </div>
                                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                                                    style={{ width: '90%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills
