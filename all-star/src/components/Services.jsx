import { useRef } from "react";
import { servicesData } from "../data/companyData";

export default function Services() {
  const sliderRef = useRef(null);

  // Fungsi untuk scroll slider ke kiri / kanan
  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 400 + 32; // Lebar perkiraan card + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Efek spotlight cursor saat mouse mengambang di atas card
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="events" className="py-24 px-6 md:px-16 bg-[#0c0f10] overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Header Section & Slider Controls */}
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#e1e3e4] mb-4">
              Our <span className="text-[#e9c349]">Services</span>
            </h2>
            <div className="h-1 w-24 bg-[#e9c349] mb-6"></div>
            <p className="text-lg text-[#c4c6cf] italic">"From concept to curtain call, we handle every detail."</p>
          </div>

          {/* Chevron Navigation Buttons */}
          <div className="hidden md:flex gap-4 mb-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous Service"
              className="w-12 h-12 rounded-full border border-[#e9c349]/30 flex items-center justify-center text-[#e9c349] hover:bg-[#e9c349] hover:text-[#111415] transition-all duration-300 gold-glow cursor-pointer">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next Service"
              className="w-12 h-12 rounded-full border border-[#e9c349]/30 flex items-center justify-center text-[#e9c349] hover:bg-[#e9c349] hover:text-[#111415] transition-all duration-300 gold-glow cursor-pointer">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Interactive Services Slider Container */}
        <div className="relative">
          <div ref={sliderRef} className="flex gap-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory pb-8 cursor-grab active:cursor-grabbing">
            {servicesData.map((service) => (
              <div key={service.id} className="min-w-[85vw] md:min-w-[400px] snap-center">
                <div onMouseMove={handleMouseMove} className="glass-panel p-8 rounded-xl border border-[#e9c349]/10 spotlight-card flex flex-col gap-6 h-full transition-all duration-400 hover:scale-[1.02] relative group overflow-hidden">
                  {/* Spotlight Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(233, 195, 73, 0.08) 0%, transparent 70%)",
                    }}></div>

                  {/* Service Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#e9c349]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#e9c349] text-3xl">{service.icon}</span>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-sm font-semibold text-[#e9c349] uppercase tracking-widest">{service.title}</h3>
                    <p className="text-[#c4c6cf] text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Note */}
        <div className="mt-8">
          <p className="text-base text-[#c4c6cf] max-w-4xl leading-relaxed">Kami menyelaraskan ide besar dengan eksekusi lintas platform yang menghubungkan emosi audiens dengan tujuan bisnis Anda.</p>
        </div>
      </div>
    </section>
  );
}
