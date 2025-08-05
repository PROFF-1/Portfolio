import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <Card className="inline-block p-3 md:p-4 border-glow bg-darker-bg/90 mb-6 fade-in-scale">
            <p className="text-xs md:text-sm text-muted-foreground font-mono">
              <span className="text-primary">user@portfolio:~$</span> ping richmond.nyamedor
            </p>
          </Card>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-glow mb-4 slide-in-up">
            <span className="text-accent">ESTABLISH</span>{" "}
            <span className="text-primary">CONNECTION</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground font-mono slide-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-secondary">&gt;</span> Ready to build something incredible together?
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <Card className="border-glow bg-card/70 backdrop-blur slide-in-left">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl font-mono text-primary text-glow">
                &gt; CONTACT_PROTOCOLS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 font-mono">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="text-secondary">&gt;</span>
                  <span className="text-muted-foreground text-xs md:text-sm">EMAIL:</span>
                  <span className="text-accent text-glow text-xs md:text-sm break-all">richmond.nyamedor@email.com</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="text-secondary">&gt;</span>
                  <span className="text-muted-foreground text-xs md:text-sm">GITHUB:</span>
                  <span className="text-primary text-glow text-xs md:text-sm break-all">github.com/richmond-nyamedor</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="text-secondary">&gt;</span>
                  <span className="text-muted-foreground text-xs md:text-sm">LINKEDIN:</span>
                  <span className="text-neon-cyan text-glow text-xs md:text-sm break-all">linkedin.com/in/richmond-nyamedor</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <span className="text-secondary">&gt;</span>
                  <span className="text-muted-foreground text-xs md:text-sm">LOCATION:</span>
                  <span className="text-neon-purple text-glow text-xs md:text-sm">Available Globally</span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-xs md:text-sm text-muted-foreground font-mono">
                  <span className="text-primary">STATUS:</span>{" "}
                  <span className="text-neon-green text-glow">AVAILABLE_FOR_OPPORTUNITIES</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Actions */}
          <Card className="border-glow bg-card/70 backdrop-blur slide-in-right">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg md:text-xl font-mono text-secondary text-glow">
                &gt; QUICK_ACTIONS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-mono box-glow transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <span className="text-xs md:text-sm">&gt; SEND_EMAIL</span>
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-mono transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <span className="text-xs md:text-sm">&gt; VIEW_RESUME</span>
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-mono transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <span className="text-xs md:text-sm">&gt; SCHEDULE_CALL</span>
                </Button>
              </div>
              
              <div className="pt-4 text-center">
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-neon-green">&gt;</span> Response time: &lt; 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Terminal Footer */}
        <div className="mt-8 md:mt-12 text-center">
          <Card className="inline-block p-3 md:p-4 border-glow bg-darker-bg/90 slide-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xs md:text-sm text-muted-foreground font-mono">
              <span className="text-primary">user@portfolio:~$</span> echo "Thanks for visiting!"
              <br />
              <span className="text-neon-green">Thanks for visiting!</span>
              <br />
              <span className="text-primary">user@portfolio:~$</span>{" "}
              <span className="terminal-cursor"></span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};