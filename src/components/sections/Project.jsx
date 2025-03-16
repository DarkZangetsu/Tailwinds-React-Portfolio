import { Briefcase, ExternalLink, Smartphone, Globe, Server, Database } from "lucide-react";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Application Mobile de Constat d'État des Lieux",
      description: "Application mobile pour tablette permettant de réaliser des constats d'état des lieux avec intégration de l'API MaDactylo.",
      image: "1",
      tags: ["Flutter", "API Integration", "Mobile"],
      type: "mobile",
      period: "Mars 2025"
    },
    {
      id: 2,
      title: "Surveillance d'Infrastructure",
      description: "Mise en place et configuration d'outils de surveillance d'infrastructure informatique avec développement de templates personnalisés pour Zabbix.",
      image: "2",
      tags: ["Zabbix", "Debian", "Django", "React", "GraphQL"],
      type: "web",
      period: "Sept 2024 - Fév 2025"
    },
    {
      id: 3,
      title: "Plateforme Web de Gestion d'Inventaire",
      description: "Développement et déploiement d'une plateforme web de visionnage et de gestion d'inventaire avec intégration des APIs Zabbix et GLPI.",
      image: "3",
      tags: ["Django", "React Vite", "Tailwind CSS", "GraphQL"],
      type: "web",
      period: "Sept 2024 - Fév 2025"
    },
    {
      id: 4,
      title: "Application Mobile Comptah",
      description: "Développement d'une application mobile multi-plateforme de gestion de caisse.",
      image: "4",
      tags: ["Flutter", "Supabase"],
      type: "mobile",
      period: "Oct 2024 - Nov 2024"
    },
    {
      id: 5,
      title: "Site Web BIONEXX",
      description: "Réalisation du site web pour l'entreprise BIONEXX en collaboration avec un développeur Front-end et l'équipe IT.",
      image: "5",
      tags: ["Symfony", "Back-end"],
      type: "web",
      period: "Jan 2024 - Mars 2024"
    },
    {
      id: 6,
      title: "CaisseMobilePro",
      description: "Conception et réalisation d'une application mobile de gestion de caisse pour l'Établissement RALAIVAO.",
      image: "6",
      tags: ["Flutter", "Mobile"],
      type: "mobile",
      period: "Sept 2023 - Nov 2023"
    },
    {
      id: 7,
      title: "Application Web de Gestion de Bon de Commande",
      description: "Conception et réalisation d'une application web pour la gestion des bons de commande pour BIONEXX.",
      image: "7",
      tags: ["Symfony", "MySQL"],
      type: "web",
      period: "Oct 2022 - Jan 2023"
    }
  ];

  // Function to get icon based on project type
  const getProjectIcon = (type) => {
    switch (type) {
      case "mobile":
        return <Smartphone className="w-6 h-6 text-green-400" />;
      case "web":
        return <Globe className="w-6 h-6 text-blue-400" />;
      case "backend":
        return <Server className="w-6 h-6 text-purple-400" />;
      default:
        return <Database className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <div>
      {/* Projects Section */}
      <section id="projets" className="min-h-screen py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl font-bold text-white">Projets</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`/api/placeholder/400/320`} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 relative z-20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    {getProjectIcon(project.type)}
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{project.period}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                    >
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
  );
}

export default Project;