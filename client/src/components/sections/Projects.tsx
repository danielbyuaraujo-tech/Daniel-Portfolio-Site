import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Project</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Applying what I learn to solve real problems.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-border shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d8348aeac2f3056e58e5f1/25e24835a_8982a535-ab86-405a-9ec0-4af68d224bf8.png" 
                    alt="Themes App Icon" 
                    className="w-16 h-16 rounded-2xl shadow-md"
                />
                <div>
                    <h3 className="text-3xl font-bold">Themes</h3>
                    <span className="text-sm font-medium text-muted-foreground">Study Assistant</span>
                </div>
              </div>
              
              <p className="text-foreground/80 text-lg leading-relaxed mb-8 text-left">
                I created Themes to help myself and other BYU students study more effectively. It uses AI to organize course materials and generate personalized insights, making it easier to master complex subjects.
              </p>
              
              <a 
                href="https://themes.base44.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Visit Themes App <ArrowUpRight size={20} />
              </a>
            </div>
            
            <div className="order-1 md:order-2 flex items-center justify-center bg-gray-50 dark:bg-zinc-950 rounded-3xl p-8">
               {/* App Preview Mockup */}
               <div className="relative w-full aspect-[4/3] bg-white dark:bg-zinc-900 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-border/50">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="p-6">
                      <div className="w-1/3 h-4 bg-gray-100 dark:bg-zinc-800 rounded mb-4"></div>
                      <div className="w-2/3 h-8 bg-gray-100 dark:bg-zinc-800 rounded mb-8"></div>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30"></div>
                          <div className="h-24 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-900/30"></div>
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
