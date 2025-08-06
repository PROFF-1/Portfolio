import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Matrix background effect */}
      <div className="absolute inset-0 matrix-rain opacity-30 parallax-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Terminal-style header */}
          <Card className="inline-block p-3 md:p-4 border-glow bg-darker-bg/90 fade-in-scale">
            <p className="text-xs md:text-sm text-muted-foreground font-mono">
              <span className="text-primary">Enter_</span>
            </p>
          </Card>
          
          {/* Main heading */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-glow-strong leading-tight">
              <span className="text-primary slide-in-left block" style={{ animationDelay: '0.2s' }}>RICHMOND <span className="text-secondary slide-in-right inline" style={{ animationDelay: '0.4s' }}>NYAMEDOR</span></span>
              
            </h1>
            <div className="mx-auto w-48 h-48 rounded-full border-4 border-glow overflow-hidden flex items-start justify-center bg-gray-900">
              <img
                src="public/richmond_nyamedor.jpeg"
                alt="Richmond Nyamedor"
                className="w-full h-64 object-cover object-top"
                style={{ marginTop: '-24px' }}
              />
            </div>

            <div className="text-lg sm:text-xl md:text-2xl font-mono slide-in-up" style={{ animationDelay: '0.6s' }}>
              <span className="text-accent">&gt;</span> Frontend Developer (Mobile and web)
              <span className="terminal-cursor"></span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-mono leading-relaxed slide-in-up" style={{ animationDelay: '0.8s' }}>
            Crafting digital experiences with{" "}
            <span className="text-primary text-glow">React</span>,{" "}
            <span className="text-secondary text-glow">React Native</span>, and{" "}
            <span className="text-accent text-glow">TypeScript</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 slide-in-up" style={{ animationDelay: '1s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground box-glow font-mono transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="text-sm md:text-lg">&gt; VIEW_PROJECTS</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="text-sm md:text-lg">&gt; CONTACT_ME</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};