import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import gallupLogo from "@assets/image_1765076314436.png";

type DomainType = "Executing" | "Influencing" | "Relationship Building" | "Strategic Thinking";

interface Strength {
  name: string;
  description: string;
  domain: DomainType;
  color: string;
  barColor: string;
  pillColor: string;
  textColor: string;
}

// Using the provided PDF content for descriptions
const strengths: Strength[] = [
  {
    name: "Includer",
    description: "Stretch the circle wider. I instinctively accept others and make an effort to include those who feel left out.",
    domain: "Relationship Building",
    color: "bg-blue-600",
    barColor: "bg-blue-600",
    pillColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-700 dark:text-blue-300"
  },
  {
    name: "Learner",
    description: "I love the process of learning. The journey from ignorance to competence is exciting and energizing.",
    domain: "Strategic Thinking",
    color: "bg-green-600",
    barColor: "bg-green-600",
    pillColor: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-300"
  },
  {
    name: "Belief",
    description: "My core values are unchanging. They provide direction, purpose, and a foundation for dependability.",
    domain: "Executing",
    color: "bg-purple-600",
    barColor: "bg-purple-600",
    pillColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-700 dark:text-purple-300"
  },
  {
    name: "Futuristic",
    description: "I am inspired by what could be. I energize others with vivid visions of a better future.",
    domain: "Strategic Thinking",
    color: "bg-green-600",
    barColor: "bg-green-600",
    pillColor: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-700 dark:text-green-300"
  },
  {
    name: "Responsibility",
    description: "I take psychological ownership of my commitments. I am emotionally bound to follow through to completion.",
    domain: "Executing",
    color: "bg-purple-600",
    barColor: "bg-purple-600",
    pillColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-700 dark:text-purple-300"
  }
];

const domainInfo: Record<DomainType, { color: string, description: string }> = {
  "Executing": { color: "bg-purple-600", description: "People with dominant Executing themes know how to make things happen." },
  "Influencing": { color: "bg-orange-500", description: "People with dominant Influencing themes know how to take charge, speak up, and make sure the team is heard." },
  "Relationship Building": { color: "bg-blue-600", description: "People with dominant Relationship Building themes have the ability to build strong relationships that can hold a team together." },
  "Strategic Thinking": { color: "bg-green-600", description: "People with dominant Strategic Thinking themes help teams consider what could be. They absorb and analyze information that can inform better decisions." }
};

export default function Strengths() {
  const [activeDomain, setActiveDomain] = useState<DomainType | null>(null);
  const [, setActiveStrength] = useState<Strength | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <a 
            href="https://www.gallup.com/cliftonstrengths/en/253676/how-cliftonstrengths-works.aspx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={gallupLogo} alt="Gallup Logo" className="h-12 md:h-16 mb-8 opacity-90" />
          </a>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">CliftonStrengths® Top 5</h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-balance mb-8">
            My natural patterns of thinking, feeling, and behaving.
          </p>
          
          <a 
            href="https://youtu.be/M9R1uZ4MTWU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium text-sm group"
          >
            <PlayCircle size={18} className="text-primary group-hover:scale-110 transition-transform" />
            Learn How the CliftonStrengths Assessment Works
          </a>
        </div>

        {/* DNA Visualization - Improved alignment and structure */}
        <div className="mb-20">
           <div className="relative flex justify-center items-center h-32 md:h-40 gap-0 max-w-5xl mx-auto px-4 overflow-visible">
              
              {/* Executing (Purple) */}
              <div 
                className="flex items-center justify-center relative group cursor-pointer px-2"
                onMouseEnter={() => setActiveDomain("Executing")}
                onMouseLeave={() => setActiveDomain(null)}
              >
                  {[...Array(8)].map((_, i) => (
                      <div 
                        key={`exec-${i}`} 
                        className={`w-2 md:w-3 mx-[2px] rounded-full transition-all duration-300 origin-center
                          ${activeDomain === "Executing" ? "bg-purple-600 scale-y-110 opacity-100 shadow-[0_0_15px_rgba(147,51,234,0.5)]" : "bg-purple-300/50 opacity-60"} 
                          ${i % 2 === 0 ? "h-16 md:h-20 translate-y-2" : "h-24 md:h-28 -translate-y-2"}`} 
                      />
                  ))}
                  {/* Improved Connector lines - subtle helix suggestion */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
                      <path d="M0,50 Q25,80 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
                  </svg>
              </div>

              {/* Influencing (Orange) */}
              <div 
                className="flex items-center justify-center relative group cursor-pointer px-2 opacity-40 hover:opacity-100 transition-opacity"
                onMouseEnter={() => setActiveDomain("Influencing")}
                onMouseLeave={() => setActiveDomain(null)}
              >
                  {[...Array(6)].map((_, i) => (
                      <div 
                        key={`inf-${i}`} 
                        className={`w-2 md:w-3 mx-[2px] rounded-full transition-all duration-300 origin-center
                          ${activeDomain === "Influencing" ? "bg-orange-500 scale-y-110 opacity-100 shadow-[0_0_15px_rgba(249,115,22,0.5)]" : "bg-orange-300/50 opacity-60"} 
                          ${i % 2 === 0 ? "h-20 md:h-24 -translate-y-1" : "h-12 md:h-16 translate-y-1"}`} 
                      />
                  ))}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-400" />
                      <path d="M0,50 Q25,80 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-400" />
                  </svg>
              </div>

              {/* Relationship Building (Blue) */}
              <div 
                className="flex items-center justify-center relative group cursor-pointer px-2"
                onMouseEnter={() => setActiveDomain("Relationship Building")}
                onMouseLeave={() => setActiveDomain(null)}
              >
                  {[...Array(8)].map((_, i) => (
                      <div 
                        key={`rel-${i}`} 
                        className={`w-2 md:w-3 mx-[2px] rounded-full transition-all duration-300 origin-center
                          ${activeDomain === "Relationship Building" ? "bg-blue-600 scale-y-110 opacity-100 shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "bg-blue-300/50 opacity-60"} 
                          ${i % 2 === 0 ? "h-20 md:h-24 translate-y-3" : "h-14 md:h-18 -translate-y-3"}`} 
                      />
                  ))}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
                      <path d="M0,50 Q25,80 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
                  </svg>
              </div>

              {/* Strategic Thinking (Green) */}
              <div 
                className="flex items-center justify-center relative group cursor-pointer px-2"
                onMouseEnter={() => setActiveDomain("Strategic Thinking")}
                onMouseLeave={() => setActiveDomain(null)}
              >
                  {[...Array(8)].map((_, i) => (
                      <div 
                        key={`strat-${i}`} 
                        className={`w-2 md:w-3 mx-[2px] rounded-full transition-all duration-300 origin-center
                          ${activeDomain === "Strategic Thinking" ? "bg-green-600 scale-y-110 opacity-100 shadow-[0_0_15px_rgba(22,163,74,0.5)]" : "bg-green-300/50 opacity-60"} 
                          ${i % 2 === 0 ? "h-24 md:h-28 -translate-y-2" : "h-16 md:h-20 translate-y-2"}`} 
                      />
                  ))}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400" />
                      <path d="M0,50 Q25,80 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400" />
                  </svg>
              </div>
           </div>

           {/* Domain Info Box - Improved positioning and text display */}
           <div className="h-24 md:h-20 flex justify-center items-center mt-6 px-4">
              <AnimatePresence mode="wait">
                {activeDomain ? (
                  <motion.div 
                    key={activeDomain}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col md:flex-row items-center gap-2 md:gap-4 bg-card border border-border shadow-md rounded-2xl px-6 py-3 md:py-2 text-center md:text-left max-w-2xl w-full"
                  >
                    <div className="flex items-center gap-2 shrink-0">
                        <span className={`w-3 h-3 rounded-full ${domainInfo[activeDomain].color}`}></span>
                        <span className="font-bold text-foreground text-sm md:text-base">{activeDomain}</span>
                    </div>
                    <span className="hidden md:inline text-muted-foreground">•</span>
                    <p className="text-sm text-muted-foreground leading-snug">{domainInfo[activeDomain].description}</p>
                  </motion.div>
                ) : (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full"
                  >
                    Hover over the DNA strands to explore the 4 domains
                  </motion.p>
                )}
              </AnimatePresence>
           </div>
        </div>

        {/* Strengths Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => {
                setActiveStrength(strength);
                setActiveDomain(strength.domain);
              }}
              onMouseLeave={() => {
                setActiveStrength(null);
                setActiveDomain(null);
              }}
              className={`group relative p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[220px]
                ${activeDomain === strength.domain ? 'ring-2 ring-offset-2 ring-gray-200 dark:ring-gray-800 transform -translate-y-1' : ''}`}
            >
              {/* Colored Bar Top */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl ${strength.barColor}`} />
              
              <div>
                <div className="flex justify-between items-start mb-4 mt-1">
                   <h3 className="text-2xl font-bold">{strength.name}</h3>
                   <span className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full ${strength.pillColor} ${strength.textColor}`}>
                      {strength.domain}
                   </span>
                </div>
                
                <p className="text-muted-foreground text-sm md:text-base text-left">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
