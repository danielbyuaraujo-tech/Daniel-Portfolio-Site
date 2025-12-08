import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const experience = [
  {
    company: "MTC (Missionary Training Center)",
    role: "Teacher",
    date: "Aug 2024 - Present",
    location: "Provo, UT",
    coords: [40.2338, -111.6585],
    description: "Mentoring new missionaries, teaching language skills and principles. Facilitating a learning environment focused on growth.",
    expandedDescription: "At the MTC, I work directly with new missionaries as they learn Portuguese and prepare for full-time service. A big part of my role is creating an environment where they feel safe to practice, make mistakes, and grow. I adapt lessons to different personalities, learning speeds, and confidence levels, helping them develop both their language ability and their teaching skills. I also collaborate with other instructors to refine lesson plans and improve the overall training process. Teaching here has strengthened my patience, communication, and ability to explain complex ideas in simple, practical ways."
  },
  {
    company: "Hawx Services",
    role: "Sales Representative",
    date: "Apr 2024 - Jul 2024",
    location: "Orlando, FL",
    coords: [28.5383, -81.3792],
    description: "Developed sales and negotiation skills by consulting with clients. Analyzed customer needs to provide tailored solutions.",
    expandedDescription: "My time at Hawx pushed me out of my comfort zone and taught me how to communicate clearly with people from all backgrounds. I talked with homeowners face-to-face, learned to listen to their concerns, and explained solutions in a straightforward and honest way. The work was demanding—walking long hours in the Florida heat and dealing with rejection daily—but it helped me develop resilience, empathy, and confidence. It also taught me how to understand customer needs quickly and offer options that made sense for them."
  },
  {
    company: "AWR Franchising",
    role: "Traffic Manager",
    date: "Jul 2022 - Sep 2023",
    location: "Joinville, Brazil",
    coords: [-26.3045, -48.8487],
    description: "Planned marketing campaigns for 140+ accounts. Built workflows to organize team performance and advised franchisees.",
    expandedDescription: "At AWR, I managed digital advertising campaigns for a large portfolio of franchise clients. Each account had different goals, budgets, and challenges, so I spent a lot of time analyzing results, adjusting strategies, and communicating recommendations in a way that made sense to business owners. I built internal workflows to help organize projects and ensure consistency across the team, and I helped train newer traffic managers as they learned the platform. This role taught me how to manage many priorities at once, interpret performance data, and support clients who depended on marketing to keep their businesses running."
  },
  {
    company: "The Church of Jesus Christ of Latter-day Saints",
    role: "Volunteer Representative",
    date: "Jun 2020 - Jun 2022",
    location: "Sao Paulo, Brazil",
    coords: [-23.5505, -46.6333],
    description: "Oversaw administrative responsibilities for 120+ missionaries. Promoted training and planned daily routines.",
    expandedDescription: "Serving in São Paulo was one of the most meaningful experiences of my life. I taught lessons, offered service, and supported individuals and families throughout the community. I also had leadership responsibilities, helping oversee the schedules, training, and well-being of more than 120 missionaries. That meant planning meetings, setting goals, resolving challenges, and making sure everyone had what they needed to do their work. I learned how to lead with compassion, stay organized under pressure, and work with people facing very different situations and backgrounds."
  },
  {
    company: "Boson Store",
    role: "Business Owner",
    date: "Jan 2019 - Feb 2020",
    location: "Joinville, Brazil",
    coords: [-26.3045, -48.8487],
    description: "Managed an online store, handling operations, customer service, and logistics.",
    expandedDescription: "I started Boson Store when I was still a teenager, and it became my first real experience running a business. I built the online store on Shopify, sourced products, handled payments, shipments, returns, and customer service, and managed all the marketing. The store grew quickly, reaching significant revenue and giving me firsthand exposure to budgeting, logistics, and market demand. It taught me how to solve problems on the fly, listen to customers, and make decisions with limited information. Even though it was challenging, it’s where I discovered how much I enjoy business, analytics, and entrepreneurship."
  }
];

export default function Experience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: experience.map(e => ({ location: e.coords as [number, number], size: 0.08 })),
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        } 
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (canvasRef.current!.style.opacity = '1'));
    return () => globe.destroy();
  }, []);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">Global Experience</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Globe Visualization - Sticky on desktop */}
          <div className="relative order-2 lg:order-1 lg:sticky lg:top-24 h-[400px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
             <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1, opacity: 0, transition: 'opacity 1s ease' }}
                className="mx-auto"
             />
          </div>

          {/* Timeline - No container scrolling */}
          <div className="order-1 lg:order-2 space-y-8">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/20 hover:border-blue-500/50 transition-colors group"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white group-hover:bg-blue-400 transition-colors" />
                
                <h3 className="font-bold text-xl mb-1 group-hover:text-blue-400 transition-colors">{item.company}</h3>
                <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-3">
                    <span>{item.role}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                    <span>•</span>
                    <span className="font-mono">{item.date}</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm text-justify">
                  {item.description}
                </p>

                {/* Read More Toggle */}
                <button 
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="mt-3 flex items-center gap-1 text-xs text-blue-400 font-medium hover:text-blue-300 transition-colors focus:outline-none"
                >
                  {expandedIndex === index ? (
                    <>Show Less <ChevronUp size={14} /></>
                  ) : (
                    <>Read More <ChevronDown size={14} /></>
                  )}
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-gray-400 text-sm leading-relaxed text-justify border-t border-white/10 pt-3">
                        {item.expandedDescription}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
