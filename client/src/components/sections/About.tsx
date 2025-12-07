import { motion } from "framer-motion";
// Importing assets using the alias defined in vite.config.ts
import coupleImage from "@assets/DSC00599_1765073068037.jpg";
import portraitImage from "@assets/DSC00441_1765073175127.jpg";

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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who I Am</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I am a Pre-Business student at BYU with a minor in Japanese. My journey is defined by a passion for learning, a commitment to responsibility, and a vision for the future. I believe in building things that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Personal Values / Couple Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-zinc-900 shadow-xl aspect-[4/5] md:aspect-square"
          >
            <img 
              src={coupleImage} 
              alt="Daniel and his wife" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">My Foundation</h3>
              <p className="text-white/90 text-lg font-medium">Family & Faith</p>
              <p className="mt-4 text-white/80 leading-relaxed text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                My values are unchanging. They provide direction and a strong sense of purpose. I am driven by loyalty, honesty, and a desire to include others.
              </p>
            </div>
          </motion.div>

          {/* Professional / Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white dark:bg-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-lg border border-border/50">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                  <img src={portraitImage} alt="Daniel Portrait" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Daniel E. P. Araujo</h3>
                  <p className="text-muted-foreground">BYU Marriott School of Business</p>
                  <div className="flex gap-2 mt-3">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      GPA 3.89
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Dean's List
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently studying Pre-Business with a focus on future entrepreneurship. I combine academic excellence with real-world experience in sales, management, and digital marketing.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                  <span className="block text-2xl font-bold mb-1">PT</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Native</span>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                  <span className="block text-2xl font-bold mb-1">EN</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Fluent</span>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                  <span className="block text-2xl font-bold mb-1">JP</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Minor</span>
                </div>
              </div>
            </div>

             <div className="bg-black text-white rounded-[2rem] p-8 md:p-10 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-gray-400 mb-4">Brigham Young University</p>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        LISR Housing Scholarship
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        Pre-Business Major
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        Japanese Minor
                    </li>
                </ul>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
