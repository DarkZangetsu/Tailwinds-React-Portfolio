import { useState } from "react";
import { Code, Layout, Database, ChevronRight } from "lucide-react";

function Skills() {
    const [activeCategory, setActiveCategory] = useState(0);

    const skillCategories = [
        {
            name: 'Frameworks',
            icon: <Layout className="w-6 h-6 text-purple-400" />,
            description: "Frameworks et bibliothèques que j'utilise pour développer des applications robustes et efficaces",
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
            icon: <Database className="w-6 h-6 text-yellow-400" />,
            description: "Systèmes de bases de données que j'utilise pour stocker et gérer efficacement les données",
            skills: [
                { name: 'MongoDB', icon: "images/skills/mongodb.png" },
                { name: 'SQL Server', icon: "images/skills/sqlserver.png" },
                { name: 'PostgreSQL', icon: "images/skills/postgresql.png" },
                { name: 'Supabase', icon: "images/skills/supabase.png" }
            ]
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800">
            <section id="skills" className="min-h-screen py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Code className="w-10 h-10 text-blue-500" />
                        <h2 className="text-5xl font-bold text-white">Skills</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar avec les catégories */}
                        <div className="lg:col-span-4">
                            <div className="bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-700">
                                <h3 className="text-xl font-bold mb-6 text-gray-200">Catégories</h3>
                                <div className="space-y-3">
                                    {skillCategories.map((category, index) => (
                                        <div 
                                            key={category.name}
                                            onClick={() => setActiveCategory(index)}
                                            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                                                activeCategory === index 
                                                ? "bg-blue-900/30 border border-blue-700" 
                                                : "hover:bg-gray-700/50"
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg ${activeCategory === index ? "bg-gray-800" : "bg-gray-800/50"}`}>
                                                    {category.icon}
                                                </div>
                                                <span className="font-medium text-lg">{category.name}</span>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeCategory === index ? "rotate-90" : ""}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Contenu principal */}
                        <div className="lg:col-span-8">
                            <div className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    {skillCategories[activeCategory].icon}
                                    <h3 className="text-2xl font-bold">{skillCategories[activeCategory].name}</h3>
                                </div>
                                
                                <p className="text-gray-300 mb-8">{skillCategories[activeCategory].description}</p>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {skillCategories[activeCategory].skills.map((skill) => (
                                        <div 
                                            key={skill.name} 
                                            className="flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-all duration-300 group border border-gray-800 hover:border-blue-700"
                                        >
                                            <div className="w-16 h-16 flex items-center justify-center mb-3 bg-gray-800 rounded-lg p-2 group-hover:bg-gray-700 transition-all duration-300">
                                                <img 
                                                    src={skill.icon} 
                                                    alt={skill.name} 
                                                    className="w-12 h-12"
                                                />
                                            </div>
                                            <span className="font-medium text-center text-gray-200">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;