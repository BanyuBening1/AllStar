import { motion } from "framer-motion";
import { teamData } from "../data/companyData";

export default function Structure() {
  const { ceo, directors } = teamData;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="structure" className="py-16 md:py-24 px-6 md:px-16 bg-[#0c0f10] relative">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-center text-[#e1e3e4] mb-12 md:mb-16">
          Leadership &amp; <span className="text-[#e9c349]">Structure</span>
        </h2>

        <div className="flex flex-col items-center relative">
          {/* Top Level: CEO */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-20 mb-10 md:mb-16 w-full max-w-md md:max-w-none md:w-auto">
            {/* Mobile Layout: Horizontal Card | Desktop Layout: Vertical Aspect Card */}
            <div
              onMouseMove={handleMouseMove}
              className="group relative w-full md:w-72 bg-[#282a2b] rounded-xl border border-[#e9c349]/30 overflow-hidden spotlight-card transition-all duration-500 hover:border-[#e9c349] p-4 md:p-0 md:aspect-[3/4] flex md:block items-center gap-5">
              {/* Image Container */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-full rounded-lg md:rounded-none overflow-hidden shrink-0">
                <img src={ceo.image} alt={ceo.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>

              {/* Desktop Gradient Overlay */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#111415] via-transparent to-transparent opacity-90"></div>

              {/* Content Info */}
              <div className="md:absolute md:bottom-0 md:left-0 md:right-0 md:p-6 text-left md:text-center z-10 flex-1">
                <p className="text-[#e9c349] text-xs font-semibold uppercase tracking-widest mb-1">{ceo.role}</p>
                <h4 className="text-xl md:text-2xl font-serif text-[#e1e3e4] font-semibold mb-2 md:mb-0">{ceo.name}</h4>
                {/* Mobile Direct Description */}
                <p className="text-[#c4c6cf] text-xs leading-relaxed md:hidden line-clamp-3">{ceo.description}</p>
              </div>

              {/* Desktop Hover Bio Overlay */}
              <div className="hidden md:flex absolute inset-0 bg-[#111415]/95 p-8 flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm z-20">
                <p className="text-[#e9c349] text-xs font-semibold tracking-widest mb-4 uppercase">{ceo.tagline}</p>
                <p className="text-[#c4c6cf] text-sm leading-relaxed">{ceo.description}</p>
              </div>
            </div>

            {/* Connecting Vertical Line for Desktop */}
            <div className="absolute left-1/2 top-full w-px h-16 bg-[#e9c349]/30 -translate-x-1/2 hidden lg:block"></div>
          </motion.div>

          {/* Horizontal Connecting Line Structure (Desktop Only) */}
          <div className="relative w-full mb-16 hidden lg:block">
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-[#e9c349]/30"></div>
            <div className="flex justify-between px-[12.5%]">
              <div className="w-px h-8 bg-[#e9c349]/30"></div>
              <div className="w-px h-8 bg-[#e9c349]/30"></div>
              <div className="w-px h-8 bg-[#e9c349]/30"></div>
              <div className="w-px h-8 bg-[#e9c349]/30"></div>
            </div>
          </div>

          {/* Bottom Row: 4 Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-md md:max-w-none relative z-20">
            {directors.map((director, index) => (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseMove={handleMouseMove}
                className="group relative bg-[#282a2b] rounded-xl border border-[#e9c349]/10 overflow-hidden spotlight-card transition-all duration-500 hover:border-[#e9c349] p-4 md:p-0 md:aspect-[3/4] flex md:block items-center gap-4">
                {/* Image Container */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-full md:h-full rounded-lg md:rounded-none overflow-hidden shrink-0">
                  <img src={director.image} alt={director.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                {/* Desktop Gradient Overlay */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#111415] via-transparent to-transparent opacity-90"></div>

                {/* Content Info */}
                <div className="md:absolute md:bottom-0 md:left-0 md:right-0 md:p-6 text-left md:text-center z-10 flex-1">
                  <p className="text-[#e9c349] text-[11px] md:text-xs font-semibold uppercase tracking-widest mb-0.5">{director.role}</p>
                  <h4 className="text-lg md:text-xl font-serif text-[#e1e3e4] font-semibold mb-1 md:mb-0">{director.name}</h4>
                  {/* Mobile Direct Description */}
                  <p className="text-[#c4c6cf] text-xs leading-relaxed md:hidden line-clamp-2">{director.description}</p>
                </div>

                {/* Desktop Hover Bio Overlay */}
                <div className="hidden md:flex absolute inset-0 bg-[#111415]/95 p-6 flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm z-20">
                  <p className="text-[#c4c6cf] text-sm leading-relaxed">{director.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
