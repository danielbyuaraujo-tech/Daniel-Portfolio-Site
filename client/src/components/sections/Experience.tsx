import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";
import { motion } from "framer-motion";

const experience = [
  {
    company: "MTC (Missionary Training Center)",
    role: "Teacher",
    date: "Aug 2024 - Present",
    location: "Provo, UT",
    coords: [40.2338, -111.6585],
    description: "Mentoring new missionaries, teaching language skills and principles. Facilitating a learning environment focused on growth."
  },
  {
    company: "Hawx Services",
    role: "Sales Representative",
    date: "Apr 2024 - Jul 2024",
    location: "Orlando, FL",
    coords: [28.5383, -81.3792],
    description: "Developed sales and negotiation skills by consulting with clients. Analyzed customer needs to provide tailored solutions."
  },
  {
    company: "AWR Franchising",
    role: "Traffic Manager",
    date: "Jul 2022 - Sep 2023",
    location: "Joinville, Brazil",
    coords: [-26.3045, -48.8487],
    description: "Planned marketing campaigns for 140+ accounts. Built workflows to organize team performance and advised franchisees."
  },
  {
    company: "The Church of Jesus Christ of Latter-day Saints",
    role: "Volunteer Representative",
    date: "Jun 2020 - Jun 2022",
    location: "Sao Paulo, Brazil",
    coords: [-23.5505, -46.6333],
    description: "Oversaw administrative responsibilities for 120+ missionaries. Promoted training and planned daily routines."
  },
  {
    company: "Boson Store",
    role: "Business Owner",
    date: "Jan 2019 - Feb 2020",
    location: "Joinville, Brazil",
    coords: [-26.3045, -48.8487],
    description: "Managed an online store, handling operations, customer service, and logistics."
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
      markers: experience.map(e => ({ location: e.coords as [number, number], size: 0.05 })),
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
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
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Globe Visualization */}
          <div className="relative order-2 lg:order-1 h-[400px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
             <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1, opacity: 0, transition: 'opacity 1s ease' }}
                className="mx-auto"
             />
          </div>

          {/* Timeline */}
          <div className="order-1 lg:order-2 space-y-8 max-h-[600px] overflow-y-auto pr-4 scrollbar-hide">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/20 hover:border-blue-500/50 transition-colors group"
                onMouseEnter={() => {
                   // Optional: We could trigger globe rotation here if we wanted to get fancy with state
                }}
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
                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
