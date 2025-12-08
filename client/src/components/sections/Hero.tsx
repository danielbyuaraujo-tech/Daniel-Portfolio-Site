import { motion } from "framer-motion";
import portraitImage from "@assets/DSC00441_1765073175127.jpg";

import IMG_8084 from "@assets/IMG_8084.JPG";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-background to-background dark:from-gray-900/50 dark:via-background dark:to-background opacity-70" />
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        
        {/* Profile Picture - Large & Centered */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
            <img 
              src={IMG_8084} 
              alt="Daniel Araujo" 
              className="w-full h-full object-cover scale-110" 
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm md:text-base font-medium tracking-widest uppercase text-muted-foreground mb-4 block"
          >Life & EXPERIENCE</motion.span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 apple-gradient-text text-balance">
            Daniel Araujo
          </h1>
          
          <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance md:text-center text-center pl-[0px] pr-[0px] ml-[8px] mr-[8px] text-[16px]">From Brazil to BYU</p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10"
          >
            <a 
              href="#about"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:scale-105 hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/20"
            >
              Get to know me
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5" />
          <path d="M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
