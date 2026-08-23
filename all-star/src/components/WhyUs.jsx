import { motion } from "framer-motion";

export default function WhyUs() {
  const professionals = [
    {
      id: 1,
      title: "The Artist Creator",
      badgeIcon: "verified",
      description: "Strategi kreatif dengan pengalaman industri puluhan tahun.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMwOChF3svLqKxPQjYfL7qkIGVCogAmDUQaRoKf7TZHaNczuyjKYedO0loROs6_pfwNp3GJ6Hcej7OkE_3SfnPB8syVd9ILSYhWkO8sluS9u8A3VavMfxa7-gpfFS_8pi65Yu9AchqMEd9i2107-oUyy7Of7pTEwBwb_hMaIVr_fkIz7Ct_4SrichByJS8UNcZ1mESx6xTIyEkOxPRp9mh3OZ19gs9y3dwFh2DjIbzkRHMt8yIJDXXIfNbKSWVy6ict-hWM8QiP0s",
      delay: 0.1,
    },
    {
      id: 2,
      title: "The Creators",
      badgeIcon: "palette",
      description: "Kami transformasikan Ide Besar menjadi konsep jitu yang mampu menjawab tantangan 'brand challenge' anda.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlk8pQ44XxJgeXOrsVYIT34vQGvtvG8gVkz4YaxaufHdbqShlW1wNyqyKJYWht2yVOorVmrdEwrNYD7sTy9s-m5anvT0RatRrurup8wHvpJiuWqgex6cKvLxXOdlv_bhE307xCDqA8CEJWdGQFGmmnWGVnwJ6mF_Ik2v9-aQ2QXevlO9BIWrddFW9awrsusupb-jOTf5RBjXzseey2X1cx9gCGZV7KFa9VcM3g_2vQ0m73PIPzXspk7wBdP2gmHqrKYl2U5fZmZ8k",
      delay: 0.3,
    },
    {
      id: 3,
      title: "The Operators",
      badgeIcon: "settings_input_component",
      description: "Mengeksekusi setiap ide menjadi pengalaman acara yang tak terlupakan.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArnOF0SI_Xqhts-NW2PgZWu8VVRQSLbCphtg9IA0QW2meENCmi7maylxAfOeEbJe_SNtKF4LEoddBsTDs8vTiwcEG3gtrJJpAa1DhTCU-g00ZirMNRlxjexyjscXtBRBryP8FqghjZfTG8VrObN7HRoLMLoI2iGJU96HS1kKxeqR1PW2HsTj89v4aiU9QDPvBLQcT5TDbluRnP5U9GC6rXNuBPErZnofoLRex9ryWPR73MTdEi_xfSOyx5TSehaBKjOwSUYCvr5c0",
      delay: 0.5,
    },
  ];

  return (
    <section id="professionals" className="py-32 relative overflow-hidden bg-[#111415]">
      {/* Background SVG Concentric Circles Motif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full opacity-10 pointer-events-none text-[#e9c349]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.15" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.15" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#e1e3e4]">
            Why <span className="text-[#e9c349]">Us</span>
          </h2>
          <div className="h-1 w-24 bg-[#e9c349] mx-auto mb-6"></div>

          <p className="font-serif text-xl md:text-2xl text-[#e9c349] tracking-widest uppercase">The Stars Maker</p>
          <p className="text-base md:text-lg text-[#c4c6cf] italic leading-relaxed">""Kami berpengalaman dalam mengembangkan talenta, membuatnya bersinar, dan mengantarkannya ke panggung sebagai bintang  "</p>
        </div>

        {/* 3 Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {professionals.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: item.delay }} className="flex flex-col items-center space-y-6">
              {/* Circular Image Container with Grayscale-to-Color Effect */}
              <div className="w-48 h-48 rounded-full border-2 border-[#e9c349]/20 p-2 relative group cursor-pointer transition-all duration-500 hover:border-[#e9c349]">
                <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center" />
                </div>

                {/* Badge Icon */}
                <div className="absolute -bottom-2 -right-2 bg-[#e9c349] text-[#111415] p-2 rounded-full shadow-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">{item.badgeIcon}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold font-serif text-[#e1e3e4]">{item.title}</h3>
              <p className="text-[#c4c6cf] text-sm md:text-base leading-relaxed max-w-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
