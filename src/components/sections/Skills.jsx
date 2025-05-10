import { Code, Layout, DatabaseIcon } from "lucide-react";

function Skills() {
    const skillCategories = [
        {
            name: 'Frameworks',
            icon: <Layout className="w-6 h-6 text-purple-400" />,
            skills: [
                { name: 'Symfony', icon: "images/skills/symfony.png" },
                { name: 'Django', icon: "images/skills/django.png" },
                { name: 'Express.js', icon: "images/skills/expressjs.png" },
                { name: 'Next.js', icon: "images/skills/next.png" },
                { name: 'Flutter', icon: "images/skills/flutter.png" }
            ]
        },
        {
            name: 'Databases',
            icon: <DatabaseIcon className="w-6 h-6 text-yellow-400" />,
            skills: [
                { name: 'MongoDB', icon: "images/skills/mongodb.png" },
                { name: 'SQL Server', icon: "images/skills/sqlserver.png" },
                { name: 'PostgreSQL', icon: "images/skills/postgresql.png" },
                { name: 'Supabase', icon: "images/skills/supabase.png" }
            ]
        },
    ];

    return (
        <div>
            <section id="skills" className="min-h-screen py-20 px-4 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <Code className="w-8 h-8 text-blue-500" />
                        <h2 className="text-4xl font-bold">Skills</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category) => (
                            <div key={category.name} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-800">
                                <div className="flex items-center gap-3 mb-6">
                                    {category.icon}
                                    <h3 className="text-xl font-bold">{category.name}</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name} className="flex flex-col items-center justify-center">
                                            <img 
                                                src={skill.icon} 
                                                alt={skill.name} 
                                                className="w-12 h-12 mb-2"
                                                title={skill.name}
                                            />
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