import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "React", category: "Frontend", level: "Expert", color: "text-neon-cyan" },
  { name: "React Native", category: "Mobile", level: "Expert", color: "text-neon-purple" },
  { name: "TypeScript", category: "Language", level: "Advanced", color: "text-primary" },
  { name: "JavaScript", category: "Language", level: "Expert", color: "text-secondary" },
  { name: "Tailwind CSS", category: "Styling", level: "Expert", color: "text-accent" },
  { name: "Vite", category: "Build Tool", level: "Advanced", color: "text-neon-green" },
  { name: "Expo", category: "Mobile Platform", level: "Advanced", color: "text-cyber-blue" },
];

export const TechStack = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <Card className="inline-block p-3 md:p-4 border-glow bg-darker-bg/90 mb-6 fade-in-scale">
            <p className="text-xs md:text-sm text-muted-foreground font-mono">
              <span className="text-primary">user@portfolio:~$</span> ls -la ./skills
            </p>
          </Card>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-glow mb-4 slide-in-left">
            <span className="text-primary">TECH</span>{" "}
            <span className="text-secondary">ARSENAL</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground font-mono slide-in-right">
            <span className="text-accent">&gt;</span> Weapons of choice for digital domination
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name} 
              className="border-glow hover:box-glow transition-all duration-300 bg-card/50 backdrop-blur stagger-animation group hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className={`text-lg md:text-xl font-mono ${tech.color} text-glow transition-all duration-300 group-hover:scale-110`}>
                  {tech.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <Badge variant="outline" className="border-primary text-primary font-mono text-xs">
                    {tech.category}
                  </Badge>
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary/20 text-secondary border border-secondary font-mono text-xs"
                  >
                    {tech.level}
                  </Badge>
                </div>
                
                {/* Skill level bar */}
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-2 rounded-full ${tech.color.replace('text-', 'bg-')} transition-all duration-1000 slide-in-left`}
                    style={{ 
                      width: tech.level === "Expert" ? "95%" : "80%",
                      boxShadow: `0 0 10px currentColor`,
                      animationDelay: `${(index * 100) + 200}ms`
                    }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};