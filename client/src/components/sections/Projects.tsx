import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Featured Project</h2>
          <p className="text-gray-400 text-xl max-w-2xl">
            I don't just study business; I build solutions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] bg-zinc-900 border border-white/10 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-6 border border-blue-500/30">
                EdTech Application
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Themes</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                An innovative study aid built to help students at BYU. Themes leverages AI to organize course materials, generate insights, and create personalized study plans. It transforms how students interact with their education.
              </p>
              
              <a 
                href="https://themes.base44.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold transition-transform hover:scale-105 active:scale-95"
              >
                Visit Themes App <ArrowUpRight size={20} />
              </a>
            </div>
            
            <div className="order-1 md:order-2 relative h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center">
               {/* Abstract representation of the app since we can't screenshot it in real-time */}
               <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-zinc-950 rounded-lg overflow-hidden flex flex-col">
                     <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                        <span className="text-6xl mb-4">📚</span>
                        <h4 className="text-2xl font-bold text-white mb-2">Themes Study Assistant</h4>
                        <p className="text-zinc-500">Organize. Analyze. Master.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
