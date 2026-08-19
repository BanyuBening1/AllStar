import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-16 overflow-hidden bg-[#111415]">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img src="https://www.dreamers.id/img_artikel/20B627F8FB-C944-45B8-8E12-090060C3CFD7.jpeg" alt="Luxury Event Hero Background" className="w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111415]/70 via-[#111415]/40 to-[#111415]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-[1440px] mx-auto py-12">
        {/* Left Side: Headline & Copywriter Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="space-y-8">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 border border-[#e9c349]/30 rounded-full text-[#e9c349] text-xs font-semibold tracking-widest uppercase bg-[#e9c349]/5 backdrop-blur-sm">TEMPAT BINTANG LAHIR</div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#e1e3e4] font-bold leading-tight font-serif">
            Elevating Events to <span className="text-[#e9c349] italic">Iconic</span> Status.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base md:text-lg text-[#c4c6cf] max-w-lg leading-relaxed font-light">
            Allstar Enterprise bukan sekadar pengelola acara. Kami adalah kurator pengalaman mewah yang mengubah visi Anda menjadi kenyataan yang mempesona.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#process" className="bg-[#e9c349] text-[#111415] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-lg gold-glow transition-all hover:scale-105 active:scale-95 text-center cursor-pointer">
              Mulai Perjalanan
            </a>
            <a href="#showcase" className="border border-[#e9c349]/50 text-[#e9c349] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-lg hover:bg-[#e9c349]/10 transition-all text-center cursor-pointer">
              Lihat Portofolio
            </a>
          </div>
        </motion.div>

        {/* Right Side: Visual Graphic Motif / Decorative Glow */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="relative flex justify-center items-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-[#e9c349]/20 relative flex items-center justify-center animate-[spin_30s_linear_infinite]">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-t-[#e9c349] border-r-transparent border-b-transparent border-l-transparent absolute"></div>
          </div>
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#e9c349]/10 blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
