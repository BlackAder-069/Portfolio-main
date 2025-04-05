import React from 'react';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Phone",
      content: "+91 8296802020",
      href: "tel:+91 8296802020"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "pranav.jigalur@gmail.com",
      href: "mailto:pranav.jigalur@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      content: "Bengaluru, India"
    }
  ];

  const socialLinks = [
    { 
      name: 'GitHub',
      url: 'https://github.com/BlackAder-069',
      svg: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/pranav-jigalur-284220244/',
      svg: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/pranav_069',
      svg: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59l-.047-.02z'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/blackader_069/',
      svg: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide opacity-0 animate-slide-up">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold opacity-0 animate-slide-up animate-delay-100">
            Let's Connect
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto opacity-0 animate-slide-up animate-delay-200">
            I'm always open to new opportunities, collaborations, and interesting conversations.
            Feel free to reach out through any of the following channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <div key={index} className="opacity-0 animate-slide-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
              <a
                href={info.href}
                target={info.target}
                rel={info.rel}
                className="glass-card h-full rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-5px]"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-foreground/80">{info.content}</p>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Social Connect */}
          <div className="glass-card rounded-xl p-8 opacity-0 animate-slide-up animate-delay-600">
            <h3 className="text-xl font-bold mb-6">Find Me Online</h3>
            <p className="text-foreground/80 mb-8">
              Connect with me on social media to see my latest updates, projects, and thoughts.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socialLinks.map((platform) => (
                <a 
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-secondary/50 text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={platform.svg} clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="glass-card rounded-xl p-8 opacity-0 animate-slide-up animate-delay-700">
            <h3 className="text-xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-foreground/80 mb-6">
              Interested in collaborating or learning more about my work? Check out my resume or send me an email directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://drive.google.com/file/d/1lVEh1-sdeneFTOoHwCBaqyv7oYA1B2qA/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow py-3 px-6 rounded-lg bg-primary text-white font-medium flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Resume
              </a>
              
              <a 
                href="mailto:pranav.jigalur@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-lg bg-secondary/50 border border-white/10 text-foreground font-medium flex items-center justify-center hover:bg-secondary transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </div>
          </div>
        </div>
        
        {/* Availability Status */}
        <div className="mt-16 text-center opacity-0 animate-slide-up animate-delay-800">
          <div className="inline-block glass-card rounded-full px-6 py-3">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <p className="text-sm font-medium">Currently available for new opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
