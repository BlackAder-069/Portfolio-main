
import React, { useState } from 'react';
import { Code, Server, PenTool, Wrench } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const skillCategories = {
    languages: [
      "JavaScript", "C/C++", "HTML", "CSS", "Python", "SQL", "Java"
    ],
    frameworks: [
      "React","Node.js","TailwindCSS","JUnit", 
      "React Native", "SpringBoot", "Flask"
    ],
    tools: [
      "Git/GitHub", "Docker", "VS Code", "Google Cloud Platform", 
      "AWS", "Vercel","CI/CD"
    ],
    others: [
      "Machine Learning", "Generative AI", "RESTful APIs", "Database Design", 
      "Query Performance Optimization", "Authentication", "Data Science And Analytics",
    ]
  };

  const categoryIcons = {
    languages: <Code className="w-6 h-6" />,
    frameworks: <Server className="w-6 h-6" />,
    tools: <Wrench className="w-6 h-6" />,
    others: <PenTool className="w-6 h-6" />
  };

  const categoryLabels = {
    languages: "Languages",
    frameworks: "Frameworks & Libraries",
    tools: "Tools & Platforms",
    others: "Other Skills"
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-400/20 blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide opacity-0 animate-slide-up">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold opacity-0 animate-slide-up animate-delay-100">
            Skills & Proficiencies
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-200">
            A showcase of my technical abilities across different domains of software development.
          </p>
        </div>
        
        {/* Skill Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-slide-up animate-delay-300">
          <ToggleGroup type="single" value={activeTab} onValueChange={(value) => value && setActiveTab(value)}>
            {Object.keys(skillCategories).map((category) => (
              <ToggleGroupItem 
                key={category}
                value={category}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-300 
                  ${activeTab === category 
                    ? 'bg-primary/10 text-primary border border-primary/30 shadow-lg' 
                    : 'bg-secondary/10 text-foreground/70 hover:bg-secondary/20 border border-transparent'
                  } 
                  transform hover:scale-105 active:scale-95 backdrop-blur-sm`}
              >
                {categoryIcons[category]}
                <span className="font-medium">{categoryLabels[category]}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        
        {/* Skills Content */}
        <div className="relative min-h-[400px] bg-gradient-to-br from-background/50 to-secondary/5 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-xl opacity-0 animate-slide-up animate-delay-400">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute -right-24 -top-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
          </div>
        
          <div className="relative z-10">
            {/* Tech-inspired Skill Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              {skillCategories[activeTab].map((skill, index) => (
                <div 
                  key={skill}
                  className="
                    group
                    py-3 px-5 
                    bg-gradient-to-br from-background/80 to-secondary/20
                    backdrop-blur-md 
                    rounded-lg 
                    text-base 
                    font-medium 
                    border border-white/5
                    relative
                    overflow-hidden
                    transition-all 
                    duration-300
                    transform 
                    hover:scale-105 
                    active:scale-95
                    shadow-[0_4px_10px_rgba(0,0,0,0.1)]
                    hover:shadow-[0_6px_20px_rgba(var(--primary),0.2)]
                    cursor-default
                    before:absolute before:inset-0 before:opacity-0 
                    before:bg-gradient-to-r before:from-primary/0 before:via-primary/20 before:to-primary/0 
                    before:transition-opacity before:duration-700
                    hover:before:opacity-100 hover:text-primary hover:border-primary/30"
                  style={{ 
                    animationDelay: `${index * 0.08}s`,
                    animation: 'float 8s ease-in-out infinite',
                    animationFillMode: 'both',
                    animationDirection: index % 2 === 0 ? 'alternate' : 'alternate-reverse',
                  }}
                >
                  <span className="relative z-10">{skill}</span>
                  <span className="absolute inset-0 border-b-2 border-primary/40 scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                </div>
              ))}
            </div>
            
            {/* Experience Highlights */}
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-6">Experience Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeTab === 'languages' && (
                  <>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Full-Stack Development</h4>
                      <p className="text-sm text-foreground/70">Proficient in both front-end and back-end languages, enabling end-to-end application development.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Machine Learning And AI</h4>
                      <p className="text-sm text-foreground/70">Specialized in building predictive models, deep learning solutions, and AI-driven applications.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Query Languages</h4>
                      <p className="text-sm text-foreground/70">Skilled in SQL and NoSQL for efficient data retrieval and management across different database systems.</p>
                    </div>
                  </>
                )}
                
                {activeTab === 'frameworks' && (
                  <>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">SpringBoot</h4>
                      <p className="text-sm text-foreground/70">Highly adept at building scalable backend systems using Spring Boot, leveraging its microservices architecture and seamless database integration.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Full-Stack Frameworks</h4>
                      <p className="text-sm text-foreground/70">Built production applications with Next.js, leveraging SSR, API routes, and other advanced features.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Testing & Quality</h4>
                      <p className="text-sm text-foreground/70">Implemented comprehensive testing strategies using Jest, React Testing Library and Cypress.</p>
                    </div>
                  </>
                )}
                
                {activeTab === 'tools' && (
                  <>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Version Control</h4>
                      <p className="text-sm text-foreground/70">Managed complex code repositories with Git, implementing branching strategies and code review processes.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">DevOps & Deployment</h4>
                      <p className="text-sm text-foreground/70">Experience with Docker containerization and deploying to cloud platforms like AWS, Vercel, and Netlify.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">CI/CD Pipelines</h4>
                      <p className="text-sm text-foreground/70">Set up and maintained continuous integration and deployment pipelines for automated testing and releases.</p>
                    </div>
                  </>
                )}
                
                {activeTab === 'others' && (
                  <>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Machine Learning</h4>
                      <p className="text-sm text-foreground/70">Developed and deployed machine learning models for classification, regression, and anomaly detection, optimizing performance through feature engineering and hyperparameter tuning.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Generative AI</h4>
                      <p className="text-sm text-foreground/70">Developed and fine-tuned GANs (Generative Adversarial Networks) and Diffusion-based models for high-quality image and data generation</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-colors duration-300">
                      <h4 className="font-semibold mb-2">Database Architecture</h4>
                      <p className="text-sm text-foreground/70">Experience in designing efficient database schemas for both relational and NoSQL databases.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology Tags */}
        <div className="mt-16 pb-8 max-w-4xl mx-auto opacity-0 animate-slide-up animate-delay-600">
          <h3 className="text-xl font-bold mb-8 text-center">Technologies & Languages</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["JavaScript","React", "Node.js", "Express", "MongoDB", "SQL", "Java", "Python",
               "Next.js", "TailwindCSS", "HTML5", "CSS3", "Git", "Docker", "JUnit", 
               "Sass", "AWS","C++"].map((tech) => (
              <div 
                key={tech} 
                className="
                  group
                  py-2 px-4 
                  bg-white/5 
                  backdrop-blur-sm 
                  rounded-full 
                  text-sm 
                  font-medium 
                  border border-white/10
                  hover:border-primary/30 
                  hover:bg-primary/10 
                  hover:text-primary 
                  transition-all 
                  duration-300
                  transform 
                  hover:scale-105 
                  active:scale-95 
                  cursor-default
                  relative
                  overflow-hidden"
              >
                <span className="relative z-10">{tech}</span>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
