import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import gallupLogo from "@assets/image_1765076314436.png";

type DomainType = "Executing" | "Influencing" | "Relationship Building" | "Strategic Thinking";

interface Strength {
  name: string;
  description: string;
  domain: DomainType;
  color: string;
  barColor: string;
}

const strengths: Strength[] = [
  {
    name: "Includer",
    description: "Accepting others. Instinctively aware of those who feel left out and making an effort to include them.",
    domain: "Relationship Building",
    color: "text-blue-600",
    barColor: "bg-blue-600"
  },
  {
    name: "Learner",
    description: "A great desire to learn and continuously improve. The process of learning is exciting.",
    domain: "Strategic Thinking",
    color: "text-green-600",
    barColor: "bg-green-600"
  },
  {
    name: "Belief",
    description: "Core values that are unchanging. These values provide direction and purpose.",
    domain: "Executing",
    color: "text-purple-600",
    barColor: "bg-purple-600"
  },
  {
    name: "Futuristic",
    description: "Vividly imagining the future. Inspiring and energizing others with a vision of what could be.",
    domain: "Strategic Thinking",
    color: "text-green-600",
    barColor: "bg-green-600"
  },
  {
    name: "Responsibility",
    description: "Psychological ownership of commitments. Dependable, honest, and loyal.",
    domain: "Executing",
    color: "text-purple-600",
    barColor: "bg-purple-600"
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
  const [activeStrength, setActiveStrength] = useState<Strength | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <img src={gallupLogo} alt="Gallup Logo" className="h-12 md:h-16 mb-8 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">CliftonStrengths® Top 5</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            My natural patterns of thinking, feeling, and behaving.
          </p>
        </div>

        {/* DNA Visualization */}
        <div className="mb-16">
           <div className="flex justify-center items-center h-24 md:h-32 gap-1 md:gap-2 max-w-4xl mx-auto px-4">
              {/* Executing Bars */}
              <div 
                className="flex gap-1 md:gap-1.5 h-full items-center group cursor-pointer"
                onMouseEnter={() => setActiveDomain("Executing")}
                onMouseLeave={() => setActiveDomain(null)}
              >
                  {[...Array(8)].map((_, i) => (
                      <div key={`exec-${i}`} className={`w-2 md:w-3 rounded-full transition-all duration-300 ${activeDomain === "Executing" ? "bg-purple-600 scale-y-110 opacity-100" : "bg-purple-200 opacity-60"} ${i % 2 === 0 ? "h-12 md:h-16" : "h-20 md:h-24"}`} />
                  ))}
              </div>

              {/* Influencing Bars (Placeholder - faint as user doesn't have top 5 here) */}
              <div 
                className="flex gap-1 md:gap-1.5 h-full items-center group cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
                onMouseEnter={() => setActiveDomain("Influencing")}
                onMouseLeave={() => setActiveDomain(null)}
              >
                  {[...Array(6)].map((_, i) => (
                      <div key={`inf-${i}`} className={`w-2 md:w-3 rounded-full transition-all duration-300 ${activeDomain === "Influencing" ? "bg-orange-500 scale-y-110 opacity-100" : "bg-orange-200 opacity-60"} ${i % 2 === 0 ? "h-14 md:h-18" : "h-10 md:h-14"}`} />
                  ))}
              </div>

              {/* Relationship Building Bars */}
              <div 
                className="flex gap-1 md:gap-1.5 h-full items-center group cursor-pointer"
                onMouseEnter={() => setActiveDomain("Relationship Building")}
                onMouseLeave={() => setActiveDomain(null)}
              >
                  {[...Array(8)].map((_, i) => (
                      <div key={`rel-${i}`} className={`w-2 md:w-3 rounded-full transition-all duration-300 ${activeDomain === "Relationship Building" ? "bg-blue-600 scale-y-110 opacity-100" : "bg-blue-200 opacity-60"} ${i % 2 === 0 ? "h-16 md:h-20" : "h-12 md:h-16"}`} />
                  ))}
              </div>

              {/* Strategic Thinking Bars */}
              <div 
                className="flex gap-1 md:gap-1.5 h-full items-center group cursor-pointer"
                onMouseEnter={() => setActiveDomain("Strategic Thinking")}
                onMouseLeave={() => setActiveDomain(null)}
              >
                  {[...Array(8)].map((_, i) => (
                      <div key={`strat-${i}`} className={`w-2 md:w-3 rounded-full transition-all duration-300 ${activeDomain === "Strategic Thinking" ? "bg-green-600 scale-y-110 opacity-100" : "bg-green-200 opacity-60"} ${i % 2 === 0 ? "h-20 md:h-24" : "h-14 md:h-18"}`} />
                  ))}
              </div>
           </div>

           {/* Domain Info Box */}
           <div className="h-24 flex justify-center items-center mt-4 px-4">
              <AnimatePresence mode="wait">
                {activeDomain ? (
                  <motion.div 
                    key={activeDomain}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-card border border-border shadow-lg rounded-xl p-4 max-w-lg text-center"
                  >
                    <span className={`inline-block w-3 h-3 rounded-full mb-1 ${domainInfo[activeDomain].color} mr-2`}></span>
                    <span className="font-bold text-foreground">{activeDomain}</span>
                    <p className="text-sm text-muted-foreground mt-1">{domainInfo[activeDomain].description}</p>
                  </motion.div>
                ) : (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-muted-foreground"
                  >
                    Hover over the DNA strands to explore the 4 domains
                  </motion.p>
                )}
              </AnimatePresence>
           </div>
        </div>

        {/* Strengths List */}
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
              className={`group relative p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col ${activeDomain === strength.domain ? 'ring-2 ring-offset-2 ring-gray-200 dark:ring-gray-800' : ''}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl ${strength.barColor}`} />
              
              <div className="flex justify-between items-start mb-4 mt-2">
                 <h3 className="text-2xl font-bold">{strength.name}</h3>
                 <span className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full bg-gray-100 dark:bg-zinc-800 ${strength.color}`}>
                    {strength.domain}
                 </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
