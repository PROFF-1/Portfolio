import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "React Native app with Expo, featuring real-time inventory, payment integration, and sleek animations.",
    tech: ["React Native", "Expo", "TypeScript", "API Integration"],
    type: "Mobile",
    status: "DEPLOYED"
  },
  {
    title: "Dashboard Analytics Platform",
    description: "React web application with real-time data visualization, built with Vite for optimal performance.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    type: "Web",
    status: "PRODUCTION"
  },
  {
    title: "Cross-Platform Todo App",
    description: "Unified codebase for both web and mobile platforms using React and React Native architecture.",
    tech: ["React", "React Native", "JavaScript", "Responsive Design"],
    type: "Cross-Platform",
    status: "OPENSOURCE"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-darker-bg/50">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <Card className="inline-block p-3 md:p-4 border-glow bg-darker-bg/90 mb-6 fade-in-scale">
            <p className="text-xs md:text-sm text-muted-foreground font-mono">
              <span className="text-primary">user@portfolio:~$</span> cat ./projects.json
            </p>
          </Card>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-glow mb-4 slide-in-up">
            <span className="text-secondary">FEATURED</span>{" "}
            <span className="text-accent">PROJECTS</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground font-mono slide-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary">&gt;</span> Digital solutions that push boundaries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="border-glow hover:box-glow transition-all duration-500 bg-card/70 backdrop-blur group stagger-animation hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <Badge 
                    variant="outline" 
                    className="border-accent text-accent font-mono text-xs w-fit"
                  >
                    {project.type}
                  </Badge>
                  <Badge 
                    variant="secondary"
                    className="bg-primary/20 text-primary border border-primary font-mono text-xs text-glow w-fit"
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg md:text-xl font-mono text-primary text-glow group-hover:scale-105 transition-transform duration-300">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground font-mono text-xs md:text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="border-secondary text-secondary font-mono text-xs hover:bg-secondary/10 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/80 text-primary-foreground font-mono flex-1 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-xs md:text-sm">&gt; VIEW_CODE</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-mono flex-1 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-xs md:text-sm">&gt; LIVE_DEMO</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono box-glow transition-all duration-300 hover:scale-105 slide-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <span className="text-sm md:text-lg">&gt; VIEW_ALL_PROJECTS</span>
          </Button>
        </div>
      </div>
    </section>
  );
};