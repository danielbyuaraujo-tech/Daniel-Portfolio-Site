import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Strengths from "@/components/sections/Strengths";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border/50 h-14 flex items-center">
         <div className="container mx-auto px-4 flex justify-between items-center">
            <span className="font-bold tracking-tight text-lg">DA</span>
            
            <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground items-center">
               <a href="#" className="hover:text-foreground transition-colors">Home</a>
               <a href="#about" className="hover:text-foreground transition-colors">About</a>
               <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
               <a 
                href="mailto:arauj0@byu.edu" 
                className="px-4 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
               >
                Contact
               </a>
            </div>

            {/* Mobile Contact Button - Simplified for better alignment */}
            <div className="md:hidden">
               <a 
                href="mailto:arauj0@byu.edu" 
                className="px-4 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity text-sm font-medium"
               >
                Contact
               </a>
            </div>
         </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Strengths />
        <Projects />
        <div id="experience">
            <Experience />
        </div>
      </main>

      <footer className="py-12 border-t border-border/50 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p className="mb-4">&copy; {new Date().getFullYear()} Daniel Araujo. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="mailto:arauj0@byu.edu" className="hover:text-foreground transition-colors">arauj0@byu.edu</a>
            <a href="https://www.linkedin.com/in/daniel-e-araujo/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
