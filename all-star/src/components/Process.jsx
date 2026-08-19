import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "../data/companyData";

export default function Process() {
  const containerRef = useRef(null);
  const [fillHeight, setFillHeight] = useState("0%");

  // Menghitung progress scroll untuk mengisi garis vertikal secara dinamis
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight * 0.7;
      const endPoint = windowHeight * 0.3;

      const containerTop = rect.top;
      const containerHeight = rect.height;

      let progress = 0;

      if (containerTop < startPoint) {
        progress = (startPoint - containerTop) / (containerHeight + (startPoint - endPoint));
      }

      progress = Math.min(Math.max(progress, 0), 1);
      setFillHeight(`${progress * 100}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" className="py-24 px-6 md:px-16 bg-[#111415]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#e1e3e4]">Alur Kerja Kami</h2>
          <p className="text-[#e9c349] text-xs font-semibold tracking-widest uppercase">PROSES KERJA KAMI</p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Background Vertical Line (Hidden on Mobile) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#e9c349]/10 -translate-x-1/2 hidden md:block"></div>

          {/* Dynamic Fill Line on Scroll (Hidden on Mobile) */}
          <div style={{ height: fillHeight }} className="absolute left-1/2 top-0 w-[2px] bg-[#e9c349] -translate-x-1/2 hidden md:block transition-all duration-300 ease-out z-0"></div>

          {/* Steps List */}
          <div className="relative space-y-16 md:space-y-32">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row items-center gap-8">
                  {/* Left Content Column */}
                  <div className={`w-full md:w-1/2 text-center ${isEven ? "md:text-right md:order-1" : "md:order-3 md:text-left"} order-2`}>
                    <h4 className="text-2xl md:text-4xl font-semibold font-serif text-[#e1e3e4] mb-2">{step.title}</h4>
                    <p className="text-[#c4c6cf] text-base md:text-lg">{step.description}</p>
                  </div>

                  {/* Center Circle Icon Badge */}
                  <div className="relative z-10 order-1 md:order-2">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#282a2b] border-2 border-[#e9c349] flex items-center justify-center text-[#e9c349] shadow-[0_0_15px_rgba(233,195,73,0.3)]">
                      <span className="material-symbols-outlined text-3xl md:text-4xl">{step.icon}</span>
                    </div>
                  </div>

                  {/* Right Empty Spacer Column for Alignment */}
                  <div className={`w-full md:w-1/2 ${isEven ? "order-3" : "order-1"} hidden md:block`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
