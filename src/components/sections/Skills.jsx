import { Code, Globe, Database, Wrench } from "lucide-react"

function Skills() {
    const skillCategories = [
        {
            name: 'Frontend',
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            skills: [
                { name: 'HTML/CSS/JavaScript', progress: 90 },
                { name: 'React/Next.js', progress: 85 },
                { name: 'Tailwind CSS', progress: 88 }
            ]
        },
        {
            name: 'Backend',
            icon: <Database className="w-6 h-6 text-green-400" />,
            skills: [
                { name: 'Node.js/Express', progress: 82 },
                { name: 'Django', progress: 82 },
                { name: 'MySQL/Postgresql/Supabase', progress: 75 },
                { name: 'API REST', progress: 85 }
            ]
        },
        {
            name: 'Outils',
            icon: <Wrench className="w-6 h-6 text-purple-400" />,
            skills: [
                { name: 'Git/GitHub', progress: 88 },
                { name: 'Docker', progress: 70 },
                { name: 'Azure DevOps', progress: 65 }
            ]
        }
    ]

    return (
        <div>
            <section id="competences" className="min-h-screen py-20 px-4 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <Code className="w-8 h-8 text-blue-500" />
                        <h2 className="text-4xl font-bold">Compétences</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skillCategories.map((category) => (
                            <div key={category.name} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    {category.icon}
                                    <h3 className="text-xl font-bold">{category.name}</h3>
                                </div>
                                <div className="space-y-6">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span>{skill.name}</span>
                                                <span className="text-blue-400">{skill.progress}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                                                    style={{ width: `${skill.progress}%` }}
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