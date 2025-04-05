import React, { useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Emostream-Concurrent-Emoji-Broadcasting-System",
      description: "A distributed real-time emoji broadcasting system utilizing Kafka, Flask, and Apache Spark to capture, process, and broadcast live emoji reactions during events.",
      tags: ["Apache Kafka", "Py-Spark", "Big-Data", "Flask"],
      image: "/images/project-image1.png", // Fixed path format - use forward slashes for web URLs
      github: "https://github.com/BlackAder-069/Emostream-Concurrent-Emoji-Broadcasting-System",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Academic-Event-and-Conference-Managment-System-using-SQL-and-Nextjs",
      description: "An Academic Event and Conference Management System built with SQL and Next.js, designed to efficiently manage event scheduling, participant registrations, and session tracking",
      tags: ["Next.js 13", "NextAuth.js", "MySQL", "Prisma ORM"],
      image: "/images/image-project2.jpg",
      github: "https://github.com/BlackAder-069/Academic-Event-and-Conference-Managment-System-using-SQL-and-Nextjs",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "File_Transfer_using_Password_Autentication",
      description: "A robust client-server file transfer application featuring multi-client support, seamless SSL/TLS encryption, and comprehensive user authentication to ensure secure and efficient file sharing across networked environments.",
      tags: ["SFTP", "Python-Security", "Socket.io", "AES-Encryption"],
      image: "/images/project-image3.jpg",
      github: "https://github.com/BlackAder-069/File_Transfer_using_Password_Autentication",
      demo: "https://example.com"
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide opacity-0 animate-slide-up">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold opacity-0 animate-slide-up animate-delay-100">
            Featured Projects
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-200">
            Explore my latest projects showcasing my skills and expertise in creating innovative digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg group opacity-0 animate-slide-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-foreground/80 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs py-1 px-2 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center pt-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 animate-slide-up animate-delay-600">
          <a 
            href="https://github.com/BlackAder-069?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300"
          >
            <span>View more projects on GitHub</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
