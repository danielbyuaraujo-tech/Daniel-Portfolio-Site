import { motion } from "framer-motion";

const strengths = [
  {
    name: "Includer",
    description: "Accepting others. Instinctively aware of those who feel left out and making an effort to include them.",
    domain: "Relationship Building",
    color: "bg-blue-600" // Relationship Building
  },
  {
    name: "Learner",
    description: "A great desire to learn and continuously improve. The process of learning is exciting.",
    domain: "Strategic Thinking",
    color: "bg-green-600" // Strategic Thinking
  },
  {
    name: "Belief",
    description: "Core values that are unchanging. These values provide direction and purpose.",
    domain: "Executing",
    color: "bg-purple-600" // Executing
  },
  {
    name: "Futuristic",
    description: "Vividly imagining the future. Inspiring and energizing others with a vision of what could be.",
    domain: "Strategic Thinking",
    color: "bg-green-600" // Strategic Thinking
  },
  {
    name: "Responsibility",
    description: "Psychological ownership of commitments. Dependable, honest, and loyal.",
    domain: "Executing",
    color: "bg-purple-600" // Executing
  }
];

export default function Strengths() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Top 5 CliftonStrengths®</h2>
          <p className="text-muted-foreground text-lg">
            These themes represent my natural talents and how I approach my work and relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Colored Bar Top */}
              <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-2xl ${strength.color}`} />
              
              <div className="flex justify-between items-start mb-4 mt-2">
                 <h3 className="text-2xl font-bold">{strength.name}</h3>
                 <span className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full bg-opacity-10 ${strength.color.replace('bg-', 'text-')} ${strength.color.replace('bg-', 'bg-')}`}>
                    {strength.domain}
                 </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-muted-foreground">
                CliftonStrengths® and the 34 theme names are trademarks of Gallup, Inc.
            </p>
        </div>
      </div>
    </section>
  );
}
