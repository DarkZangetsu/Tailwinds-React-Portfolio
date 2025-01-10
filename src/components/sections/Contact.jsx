import { Mail } from "lucide-react"

function Contact() {
    return (
        <div>
            {/* Contact Section */}
            <section id="contact" className="min-h-screen py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <Mail className="w-8 h-8 text-blue-500" />
                        <h2 className="text-4xl font-bold">Contact</h2>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Nom</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-900/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-900/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-gray-900/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                ></textarea>
                            </div>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg transition-all duration-300">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
