import { Briefcase, ExternalLink, Smartphone, Globe, Server, Database } from "lucide-react";
import { useState } from "react";

function Project() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Application Mobile de Constat d'État des Lieux",
      description: "Application mobile pour tablette permettant de réaliser des constats d'état des lieux avec intégration de l'API MaDactylo.",
      image: "constat.png",
      tags: ["Flutter", "API Integration", "Mobile"],
      type: ["mobile"],
    },
    {
      id: 2,
      title: "Plateforme Web de Gestion d'Inventaire et de revue d'infrastructure",
      description: "Plateforme web de visionnage et de gestion d'inventaire et de revue d'infrastructure avec intégration des APIs Zabbix et GLPI.",
      image: "zabbix.png",
      tags: ["Django", "React Vite", "Tailwind CSS", "GraphQL", "API Integration"],
      type: ["web", "frontend", "backend"],
    },
    {
      id: 3,
      title: "Plateforme Web de Gestion des Ventes Adesolaire-V",
      description: "Interface centralisée pour la visualisation et l'analyse des données de ventes entre Salesforce et l'application mobile, avec tableaux de bord personnalisables et rapports en temps réel.",
      image: "lemadio.png",
      tags: ["Django", "React Vite", "Tailwind CSS", "GraphQL", "API Integration"],
      type: ["web", "frontend", "backend"],
    },
    {
      id: 4,
      title: "Application Mobile Comptah",
      description: "Application mobile multi-plateforme de gestion de caisse.",
      image: "comptah.png",
      tags: ["Flutter", "Supabase"],
      type: ["mobile"]
    },
    {
      id: 5,
      title: "Site Web BIONEXX",
      description: "Site web pour l'entreprise BIONEXX en collaboration avec un développeur Front-end et l'équipe IT.",
      image: "bionexx.png",
      tags: ["Symfony", "Backend"],
      type: ["web", "backend"],
    },
    {
      id: 6,
      title: "CaisseMobilePro",
      description: "Application mobile de gestion de caisse pour l'Établissement RALAIVAO.",
      image: "ets.jpg",
      tags: ["Flutter", "Mobile"],
      type: ["mobile"]
    },
    {
      id: 7,
      title: "Mon Portfolio",
      description: "Portfolio personnel mettant en valeur mes projets et compétences avec une interface moderne et réactive.",
      image: "portfolio.png",
      tags: ["React Vite", "Tailwind CSS", "Vercel"],
      type: ["web", "frontend"],
      link: "https://tailwinds-react-portfolio.vercel.app/"
    },
    {
      id: 8,
      title: "Stream Youjo Senki",
      description: "Plateforme de streaming dédiée à l'anime Youjo Senki avec lecture de vidéos et informations sur la série.",
      image: "youjo.png",
      tags: ["Next.js", "Vercel", "API Integration"],
      type: ["web", "frontend"],
      link: "https://stream-youjo-senki-next-js-app.vercel.app/"
    },
    {
      id: 9,
      title: "AniInfo",
      description: "Site d'information sur les animés utilisant les APIs de MyAnimeList et Jikan.moe pour fournir des détails complets et à jour.",
      image: "aniInfo.png",
      tags: ["Next.js", "Vercel", "API Integration"],
      type: ["web", "frontend"],
      link: "https://ani-info-psi.vercel.app/"
    },
    {
      id: 10,
      title: "MedicApp",
      description: "Application mobile de gestion de rendez-vous médicaux permettant aux patients de prendre et suivre leurs consultations.",
      image: "medic.png",
      tags: ["React Native", "Expo", "Supabase", "Mobile"],
      type: ["mobile"]
    }
  ];

  // Function to get image path with fallback
  const getImagePath = (imageName) => {
    try {
      return `/images/projects/${imageName}`;
    } catch (error) {
      console.log(error);
      return `/api/placeholder/400/320`;
    }
  };

  // Function to get primary icon based on project types
  const getProjectIcon = (types) => {
    // Prioritize icons in this order: mobile, web, backend, frontend
    if (types.includes("mobile")) {
      return <Smartphone className="w-6 h-6 text-green-400" />;
    } else if (types.includes("web")) {
      return <Globe className="w-6 h-6 text-blue-400" />;
    } else if (types.includes("backend")) {
      return <Server className="w-6 h-6 text-purple-400" />;
    } else if (types.includes("frontend")) {
      return <Database className="w-6 h-6 text-orange-400" />;
    } else {
      return <Database className="w-6 h-6 text-orange-400" />;
    }
  };

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.type.includes(activeFilter));

  // Get all project types for badges
  const getProjectTypeBadges = (types) => {
    return types.map((type, index) => {
      let icon;
      let color;
      
      switch (type) {
        case "mobile":
          icon = <Smartphone className="w-3 h-3" />;
          color = "bg-green-600/20 text-green-400";
          break;
        case "web":
          icon = <Globe className="w-3 h-3" />;
          color = "bg-blue-600/20 text-blue-400";
          break;
        case "backend":
          icon = <Server className="w-3 h-3" />;
          color = "bg-purple-600/20 text-purple-400";
          break;
        case "frontend":
          icon = <Database className="w-3 h-3" />;
          color = "bg-orange-600/20 text-orange-400";
          break;
        default:
          icon = <Database className="w-3 h-3" />;
          color = "bg-gray-600/20 text-gray-400";
      }
      
      return (
        <span 
          key={index} 
          className={`px-2 py-1 ${color} rounded-full text-xs flex items-center gap-1`}
        >
          {icon} {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      );
    });
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
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeFilter === "web" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Globe className="w-4 h-4" /> Web
            </button>
            <button
              onClick={() => setActiveFilter("mobile")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeFilter === "mobile" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Smartphone className="w-4 h-4" /> Mobile
            </button>
            <button
              onClick={() => setActiveFilter("backend")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeFilter === "backend" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Server className="w-4 h-4" /> Backend
            </button>
            <button
              onClick={() => setActiveFilter("frontend")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                activeFilter === "frontend" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Database className="w-4 h-4" /> Frontend
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-70 transition-opacity z-10"></div>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={getImagePath(project.image)} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `/api/placeholder/400/320`;
                    }}
                  />
                </div>
                <div className="p-6 relative z-20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    {getProjectIcon(project.type)}
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {/* Type badges */}
                  <div className="flex gap-2 flex-wrap mb-3">
                    {getProjectTypeBadges(project.type)}
                  </div>
                  
                  {/* Technology tags */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Conditional rendering of the link */}
                  {project.link && (
                    <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                      >
                        Voir plus <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
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