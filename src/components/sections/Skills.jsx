import { Code, Globe, Database, Wrench, Monitor, Server, Command, Activity, Layout } from "lucide-react";

function Skills() {
    const skillCategories = [
        {
            name: 'Front-end',
            icon: <Monitor className="w-6 h-6 text-blue-400" />,
            skills: [
                { name: 'HTML5/CSS3', progress: 90 },
                { name: 'JavaScript', progress: 85 },
                { name: 'React.js', progress: 88 },
                { name: 'TypeScript', progress: 80 }
            ]
        },
        {
            name: 'Back-end',
            icon: <Server className="w-6 h-6 text-green-400" />,
            skills: [
                { name: 'Python', progress: 88 },
                { name: 'Java', progress: 82 },
                { name: 'PHP', progress: 85 },
                { name: 'Node.js', progress: 87 }
            ]
        },
        {
            name: 'Frameworks',
            icon: <Layout className="w-6 h-6 text-purple-400" />,
            skills: [
                { name: 'Symfony', progress: 85 },
                { name: 'Django', progress: 88 },
                { name: 'Express.js', progress: 86 },
                { name: 'Next.js', progress: 84 },
                { name: 'Flutter', progress: 82 }
            ]
        },
        {
            name: 'Base de données',
            icon: <Database className="w-6 h-6 text-yellow-400" />,
            skills: [
                { name: 'MongoDB', progress: 85 },
                { name: 'SQL Server', progress: 82 },
                { name: 'PostgreSQL', progress: 88 },
                { name: 'Supabase', progress: 80 }
            ]
        },
        {
            name: 'APIs',
            icon: <Globe className="w-6 h-6 text-red-400" />,
            skills: [
                { name: 'REST API', progress: 90 },
                { name: 'GraphQL', progress: 85 }
            ]
        },
        {
            name: 'Outils',
            icon: <Wrench className="w-6 h-6 text-indigo-400" />,
            skills: [
                { name: 'Git', progress: 88 },
                { name: 'Docker', progress: 82 },
                { name: 'Azure DevOps', progress: 78 },
                { name: 'Bitbucket', progress: 80 }
            ]
        },
        {
            name: 'Méthodologie',
            icon: <Activity className="w-6 h-6 text-orange-400" />,
            skills: [
                { name: 'Agile', progress: 85 },
                { name: '2TUP', progress: 78 }
            ]
        },
        {
            name: 'Modélisation',
            icon: <Command className="w-6 h-6 text-cyan-400" />,
            skills: [
                { name: 'UML', progress: 84 },
                { name: 'Merise', progress: 80 }
            ]
        }
    ];

    return (
        <div>
            <section id="competences" className="min-h-screen py-20 px-4 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <Code className="w-8 h-8 text-blue-500" />
                        <h2 className="text-4xl font-bold">Compétences</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category) => (
                            <div key={category.name} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-800">
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
    );
}

export default Skills;