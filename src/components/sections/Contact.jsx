import { Mail, Phone, MapPin, Linkedin, FileDown, Download } from "lucide-react";

function Contact() {
    return (
        <div>
            <section id="contact" className="min-h-screen py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <Mail className="w-8 h-8 text-blue-500" />
                        <h2 className="text-4xl font-bold">Contact</h2>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-blue-400" />
                                <div>
                                    <h3 className="text-lg font-medium">Email</h3>
                                    <a href="mailto:votre.email@exemple.com" className="text-blue-400">
                                        rakotosalamafitahiana@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            {/* Téléphone */}
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-green-400" />
                                <div>
                                    <h3 className="text-lg font-medium">Téléphone</h3>
                                    <a href="tel:+33600000000" className="text-green-400">
                                        +261 34 31 720 81
                                    </a>
                                </div>
                            </div>
                            
                            {/* Adresse */}
                            <div className="flex items-center gap-4">
                                <MapPin className="w-6 h-6 text-purple-400" />
                                <div>
                                    <h3 className="text-lg font-medium">Adresse</h3>
                                    <p className="text-gray-300">
                                        Fianarantsoa 301, Madagascar.
                                    </p>
                                </div>
                            </div>
                            
                            {/* LinkedIn */}
                            <div className="flex items-center gap-4">
                                <Linkedin className="w-6 h-6 text-blue-400" />
                                <div>
                                    <h3 className="text-lg font-medium">LinkedIn</h3>
                                    <a 
                                        href="https://www.linkedin.com/in/fitahiana-florent-rakotosalama/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-400"
                                    >
                                        linkedin.com/in/fitahiana-florent-rakotosalama
                                    </a>
                                </div>
                            </div>
                            
                            {/* Téléchargement CV */}
                            <div className="flex items-center gap-4">
                                <FileDown className="w-6 h-6 text-purple-600" />
                                <div>
                                    <a 
                                    href="pdf/cv.pdf" 
                                    download
                                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Télécharger CV
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;