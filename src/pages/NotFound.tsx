
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/20 blur-[120px]" />
      </div>
      
      <div className="glass-card p-12 rounded-2xl max-w-md w-full mx-6 text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl font-bold gradient-text text-glow">404</span>
          </div>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold">Page Not Found</h1>
        
        <p className="text-foreground/80">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <a 
          href="/" 
          className="btn-glow inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
