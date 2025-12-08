import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Strengths from "@/components/sections/Strengths";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import { motion, useScroll, useSpring } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const ContactButton = ({ className, children }: { className?: string, children?: React.ReactNode }) => (
    <Dialog>
      <DialogTrigger asChild>
        <button className={className}>
          {children || "Contact"}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl mb-4">Get in Touch</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
          <a
            href="mailto:arauj0@byu.edu"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-secondary/50 transition-colors group"
          >
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">Email</h4>
              <p className="text-sm text-muted-foreground">arauj0@byu.edu</p>
            </div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/daniel-e-araujo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-secondary/50 transition-colors group"
          >
            <div className="p-3 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">LinkedIn</h4>
              <p className="text-sm text-muted-foreground">/in/daniel-e-araujo</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );

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
               <ContactButton className="px-4 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity" />
            </div>

            {/* Mobile Contact Button - Simplified for better alignment */}
            <div className="md:hidden">
               <ContactButton className="px-4 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity text-sm font-medium" />
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
        
        {/* Aesthetic Contact Section */}
        <section className="py-24 md:py-32 bg-background border-t border-border/30">
          <div className="container mx-auto px-4 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="max-w-2xl mx-auto"
             >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Connect</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-balance">
                   I'm always open to discussing new opportunities, collaborations, or just connecting with like-minded individuals.
                </p>
                
                <ContactButton className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-lg font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg">
                   <span>Get in Touch</span>
                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </ContactButton>
             </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-border/50 text-center text-muted-foreground bg-secondary/20">
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
