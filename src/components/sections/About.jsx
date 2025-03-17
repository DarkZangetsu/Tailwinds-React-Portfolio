/* eslint-disable react/no-unescaped-entities */
import { Code, User, Database, Globe, Server, Monitor, Smartphone } from "lucide-react";

function About() {
    return (
        <div>
            {/* About Section */}
            <section id="about" className="min-h-screen py-20 px-4 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 mb-12">
                                <User className="w-8 h-8 text-blue-500" />
                                <h2 className="text-4xl font-bold">À propos</h2>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Développeur polyvalent maîtrisant à la fois le front-end et le back-end, capable de concevoir et implémenter des solutions complètes pour applications mobiles, web et desktop.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                        <Monitor className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Développement Front-end</h3>
                                        <p className="text-gray-400">HTML5, CSS3, Javascript, Reactjs, TypeScript</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                                        <Server className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Développement Back-end</h3>
                                        <p className="text-gray-400">Python, Java, PHP, Nodejs</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Frameworks</h3>
                                        <p className="text-gray-400">Symfony, Django, Expressjs, Nextjs, React Native, Electronjs, Flutter</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center">
                                        <Database className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Base de données</h3>
                                        <p className="text-gray-400">MangoDB, SQL Server, PostgreSQL, Supabase</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">APIs</h3>
                                        <p className="text-gray-400">Conception et gestion d'API Restfull, GraphQL</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Applications Mobiles</h3>
                                        <p className="text-gray-400">Flutter, React Native</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-900">
                                <img
                                    src="images/hero/Media.jpeg"
                                    alt="Fitahiana Florent RAKOTOSALAMA"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;