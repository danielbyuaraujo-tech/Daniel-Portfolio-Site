import { motion } from "framer-motion";
import { Users, Lightbulb, Heart, Telescope, ShieldCheck } from "lucide-react";

const strengths = [
  {
    name: "Includer",
    description: "Accepting others. Instinctively aware of those who feel left out and making an effort to include them.",
    icon: Users,
    color: "bg-blue-500",
    colSpan: "md:col-span-2"
  },
  {
    name: "Learner",
    description: "A great desire to learn and continuously improve. The process of learning is exciting.",
    icon: Lightbulb,
    color: "bg-yellow-500",
    colSpan: "md:col-span-1"
  },
  {
    name: "Belief",
    description: "Core values that are unchanging. These values provide direction and purpose.",
    icon: Heart,
    color: "bg-red-500",
    colSpan: "md:col-span-1"
  },
  {
    name: "Futuristic",
    description: "Vividly imagining the future. Inspiring and energizing others with a vision of what could be.",
    icon: Telescope,
    color: "bg-purple-500",
    colSpan: "md:col-span-2"
  },
  {
    name: "Responsibility",
    description: "Psychological ownership of commitments. Dependable, honest, and loyal.",
    icon: ShieldCheck,
    color: "bg-green-500",
    colSpan: "md:col-span-3"
  }
];

export default function Strengths() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Gallup Strengths</h2>
          <p className="text-muted-foreground text-lg">My top 5 dominant themes of talent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-[2rem] bg-card border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${strength.colSpan} flex flex-col justify-between min-h-[240px]`}
            >
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-2xl ${strength.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                  <strength.icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold">{strength.name}</h3>
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
