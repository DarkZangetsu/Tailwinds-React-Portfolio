import { User } from "lucide-react";

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
                                <h2 className="text-4xl font-bold">About Me</h2>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I am a developer passionate about creating comprehensive and innovative technological solutions. My versatile background has allowed me to acquire deep expertise in developing applications for various platforms.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                What sets me apart is my ability to understand user needs and transform them into intuitive and high-performing digital experiences. I approach each project with a holistic perspective, ensuring harmony between the user interface and technical functionality.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I constantly stay on the lookout for new technologies and methodologies to improve my skills. My goal is to create applications that not only meet current needs but are also scalable to adapt to future requirements.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Beyond coding, I enjoy collaborating with multidisciplinary teams where knowledge sharing and collective creativity can give rise to exceptional projects.
                            </p>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-900">
                                <img
                                    src="about.webp"
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