import { motion } from "framer-motion";

const experience = [
  {
    company: "MTC (Missionary Training Center)",
    role: "Teacher",
    date: "Aug 2024 - Present",
    location: "Provo, UT",
    description: "Mentoring new missionaries, teaching language skills and teaching principles. Facilitating a learning environment focused on growth and spiritual development."
  },
  {
    company: "Hawx Services",
    role: "Sales Representative",
    date: "Apr 2024 - Jul 2024",
    location: "Orlando, FL",
    description: "Developed strong sales and negotiation skills by consulting with clients and closing contracts. Analyzed customer needs to provide tailored solutions."
  },
  {
    company: "AWR Franchising",
    role: "Traffic Manager",
    date: "Jul 2022 - Sep 2023",
    location: "Joinville, Brazil",
    description: "Planned marketing campaigns for 140+ accounts. Built workflows to organize team performance and advised franchisees on digital marketing investments."
  },
  {
    company: "The Church of Jesus Christ of Latter-day Saints",
    role: "Volunteer Representative",
    date: "Jun 2020 - Jun 2022",
    location: "Sao Paulo, Brazil",
    description: "Oversaw administrative responsibilities for 120+ missionaries. Promoted training and planned daily routines to accomplish goals successfully."
  },
  {
    company: "Boson Store",
    role: "Business Owner",
    date: "Jan 2019 - Feb 2020",
    location: "Joinville, Brazil",
    description: "Managed an online store, handling operations, customer service, and logistics."
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">Professional Timeline</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Icon/Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-border/50 transition-shadow hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                    <h3 className="font-bold text-lg">{item.company}</h3>
                    <time className="font-mono text-xs text-muted-foreground">{item.date}</time>
                  </div>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{item.role} • {item.location}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
