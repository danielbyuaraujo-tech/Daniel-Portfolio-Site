import { motion } from "framer-motion";
import coupleImage from "@assets/DSC00599_1765073068037.jpg";
import byuLogo from "@assets/image_1765076273308.png";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Who I Am</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a student, a husband, and a lifelong learner. My journey is defined by the people I meet and the principles I hold dear. I strive to be dependable, honest, and always ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Personal Values / Couple Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-zinc-900 shadow-xl min-h-[500px]"
          >
            <img 
              src={coupleImage} 
              alt="Daniel and his wife Hannah" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark Gradient Overlay for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between text-white z-10">
              <div className="w-full">
                 <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">My Foundation</h3>
                 <p className="text-white/90 text-lg font-medium drop-shadow-sm">Family & Faith</p>
              </div>

              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                 <p className="text-gray-100 leading-relaxed text-base md:text-lg">
                  My wife Hannah and I share a life built on faith. Our relationship is grounded in the teachings of Jesus Christ, which guide our values of honesty, loyalty, and service. We believe in lifting others and working together to build a meaningful future.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full gap-8"
          >
             <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-lg border border-border/50 h-full flex flex-col justify-between relative overflow-hidden">
                {/* BYU Branding */}
                <div className="absolute top-8 right-8 w-20 md:w-24 opacity-100">
                  <img 
                    src={byuLogo} 
                    alt="BYU Logo" 
                    className="w-full h-auto"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <p className="text-lg font-medium text-blue-900 dark:text-blue-400 mb-6">Brigham Young University</p>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-900 dark:bg-blue-400 mt-2 shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">Pre-Business Major</span>
                          <p className="text-sm">Minor in Japanese</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-900 dark:bg-blue-400 mt-2 shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">Academic Excellence</span>
                          <p className="text-sm">3.89 GPA • Dean's List</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-900 dark:bg-blue-400 mt-2 shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground">Scholarship</span>
                          <p className="text-sm">LISR Housing Scholarship</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Languages</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800/50">
                      <span className="block font-bold mb-1">PT</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Native</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800/50">
                      <span className="block font-bold mb-1">EN</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Fluent</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800/50">
                      <span className="block font-bold mb-1">JP</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Minor</span>
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
