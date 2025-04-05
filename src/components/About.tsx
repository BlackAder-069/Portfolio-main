import React from 'react';
import { Award, Code, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Problem Solver",
      description: "I analyze complex problems and develop efficient, scalable solutions is essential for software development."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Creative Solutions",
      description: "I approach problems with creativity and find innovative solutions to complex challenges."
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      title: "Fast Learner",
      description: "I quickly adapt to new technologies and frameworks to stay at the cutting edge."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Detail Oriented",
      description: "I am a detail-oriented who ensures efficiency and quality in every task I undertake."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-[26rem] rounded-2xl rotating-border overflow-hidden">
                <div className="absolute inset-1 bg-card rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-tr from-background via-secondary/30 to-background rounded-2xl overflow-hidden flex items-center justify-center relative">
                    {/* Code background elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 code-background overflow-hidden">
                      <pre className="text-xs text-primary/60 animate-code-scroll">
                        {`function Developer() {
  const [skills, setSkills] = useState([
    'React', 'TypeScript', 'Next.js',
    'TailwindCSS', 'Node.js'
  ]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      learnNewSkill();
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="developer">
      <h1>Hello World!</h1>
      <p>I build things for the web</p>
      <Skills data={skills} />
    </div>
  );
}`}
                      </pre>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute h-full w-full">
                      <div className="floating-element text-primary text-xl" style={{top: '15%', left: '20%'}}>&lt;/&gt;</div>
                      <div className="floating-element text-primary/80 text-lg" style={{top: '60%', left: '15%'}}>{"{"}</div>
                      <div className="floating-element text-primary/80 text-lg" style={{top: '70%', right: '15%'}}>{"}"}</div>
                      <div className="floating-element text-primary/90" style={{top: '20%', right: '25%'}}>
                        <Code size={18} />
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="glass-card dev-card p-6 rounded-xl z-10 shadow-glow animate-float">
                      <div className="dev-avatar mb-4 mx-auto">
                        <div className="text-3xl font-bold bg-primary/20 text-primary p-4 rounded-full w-20 h-20 flex items-center justify-center border-2 border-primary/30">
                          AI
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-1">Developer</h3>
                        <div className="tech-stack flex flex-wrap justify-center gap-2 mt-3">
                          {['Web Dev', 'ML', 'Gen AI'].map(tech => (
                            <span key={tech} className="px-2 py-1 bg-primary/10 rounded text-xs text-primary/90 animate-pulse-subtle">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="code-line mt-4 text-sm text-primary/80 font-mono">
                          <span className="animate-blink">_</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-lg opacity-0 animate-slide-up animate-delay-300">
                <p className="text-lg font-medium">
                  <span className="text-primary">2+</span> Years Experience
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <p className="text-primary font-medium tracking-wide opacity-0 animate-slide-right">ABOUT ME</p>
            <h2 className="text-3xl md:text-4xl font-bold opacity-0 animate-slide-right animate-delay-100">
            Transforming data into intelligent solutions with precision and innovation
            </h2>
            <p className="text-foreground/80 opacity-0 animate-slide-right animate-delay-200">
            I'm a passionate Computer Science student specializing in Machine Learning and Data Science, dedicated to building intelligent and impactful solutions. With a strong foundation in algorithms, data analysis, and statistical modeling, I leverage my technical expertise to extract insights, optimize processes, and solve complex real-world problems.
            </p>
            <p className="text-foreground/80 opacity-0 animate-slide-right animate-delay-300">
            My approach is centered on data-driven decision-making, combining analytical thinking with innovation to develop models that drive meaningful results. I thrive in collaborative environments and enjoy tackling challenges that push the boundaries of AI and technology.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 opacity-0 animate-slide-right animate-delay-400">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start space-x-3 glass-card p-4 rounded-lg hover:bg-card/80 transition-all duration-300">
                  <div className="mt-1 rounded-md bg-primary/10 p-2">
                    {quality.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{quality.title}</h3>
                    <p className="text-sm text-foreground/70 mt-1">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        .code-background {
          font-family: monospace;
        }
        
        @keyframes codeScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        .animate-code-scroll {
          animation: codeScroll 30s linear infinite;
          padding: 100% 0;
        }
        
        .floating-element {
          position: absolute;
          animation: float 6s ease-in-out infinite;
          opacity: 0.7;
        }
        
        .floating-element:nth-child(2) {
          animation-delay: 1s;
          animation-duration: 8s;
        }
        
        .floating-element:nth-child(3) {
          animation-delay: 2s;
          animation-duration: 7s;
        }
        
        .floating-element:nth-child(4) {
          animation-delay: 3s;
          animation-duration: 9s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .dev-card {
          backdrop-filter: blur(12px);
          background: rgba(30, 30, 40, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 85%;
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.7; }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        
        .shadow-glow {
          box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.2);
        }
      `}</style>
    </section>
  );
};

export default About;
