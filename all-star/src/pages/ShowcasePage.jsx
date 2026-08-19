import { useState } from "react";
import { showcaseCategories, showcaseProjects } from "../data/showcaseData";

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("All Works");

  // Filter project secara dinamis
  const filteredProjects = activeCategory === "All Works" ? showcaseProjects : showcaseProjects.filter((item) => item.category === activeCategory);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="bg-[#111415] text-[#e1e3e4] min-h-screen pt-24">
      {/* Showcase Hero Header */}
      <section className="relative h-[70vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#111415]/60 z-10"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwa-xtOqRvmPCarXorrWOcDmAlZ27CjI-iMCXm040Y4mPrx13kk_a3BpNG1wOd08ZTPmRKfIN7OW7R-ixOOuAXK4xW5OS0oAgfaDYgmRPRDrggFptR4c_drSeuzVq1jCNQxLe-0rvGF6qcLYIFhq4d-k7JckLJSPFYTEcvhNmJjECk1xDK9524AqnAG6ctNnTl76qkBgTxDAMecH1zYlr5hn8nSVdN_pphbmUOj24jPmm5UxRVxM5p"
            alt="Cinematic Showcase Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto space-y-6">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA18jLA5_f7zy2InulGjdVbR3vDP_CNs_AvLWkkvjTNa3d1To42rffn0AKr2XNcs025fCmPL9GDoe5UGUWsv9FR8cDcUltwj0ayltMwIlAYvyy5DNjTwEfrTX72JtBLfd8NkSxB2fMzWFdmYGgfikEO0a4fADqTlY3oTc8xg8bJrdnlMl88Lc8ToFSCGy--B8ak0JNWoiAQZ6hIpcKd7F-22LK4JVg_xOZUTS3tNOTjEAeT5mXoOFQD6gZ55b8c8RW8YRy62iodL8"
            alt="Allstar Gold Logo"
            className="w-40 md:w-48 h-auto mx-auto drop-shadow-[0_0_15px_rgba(233,195,73,0.3)]"
          />
          <h1 className="text-4xl md:text-6xl font-serif text-[#e9c349] font-bold">The Masterpiece Gallery</h1>
          <p className="text-base md:text-xl text-[#c4c6cf] italic">"Where vision meets precision, and moments become legacies."</p>
          <div className="pt-6">
            <span className="material-symbols-outlined text-[#e9c349] animate-bounce text-4xl">keyboard_double_arrow_down</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111415] to-transparent"></div>
      </section>

      {/* Main Showcase Bento Grid & Filter Section */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16 border-b border-[#e9c349]/10 pb-8">
          {showcaseCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs md:text-sm font-semibold tracking-wider px-4 py-2 rounded-md transition-all duration-300 cursor-pointer ${
                activeCategory === category ? "text-[#e9c349] border-b-2 border-[#e9c349]" : "text-[#c4c6cf] hover:text-[#e9c349]"
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleMouseMove}
              className={`${project.gridClass} group relative overflow-hidden glass-panel rounded-xl border border-[#e9c349]/10 transition-all duration-500 hover:border-[#e9c349]/40 hover:-translate-y-2 hover:shadow-2xl`}>
              <div className={`${project.height} bg-cover bg-center transition-transform duration-700 group-hover:scale-105`} style={{ backgroundImage: `url('${project.image}')` }}></div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#111415] via-[#111415]/40 to-transparent p-6 md:p-10 flex flex-col justify-end z-10">
                <span className="text-[#e9c349] text-xs font-semibold uppercase tracking-widest mb-2 flex items-center">
                  <span className="w-8 h-[1px] bg-[#e9c349] mr-3"></span>
                  {project.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-xs md:text-sm text-[#c4c6cf] max-w-lg leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Redefined Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#e9c349]">Expertise Redefined</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6 border-l-2 border-[#e9c349]/20 pl-6 hover:border-[#e9c349] transition-all">
                <span className="material-symbols-outlined text-[#e9c349] text-4xl mt-1">theaters</span>
                <div>
                  <h4 className="text-xl font-serif text-[#e1e3e4] mb-1">Event Organizer &amp; Production</h4>
                  <p className="text-sm text-[#c4c6cf]">Full-scale execution of festivals, gala dinners, and corporate summits with unmatched technical precision.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-[#e9c349]/20 pl-6 hover:border-[#e9c349] transition-all">
                <span className="material-symbols-outlined text-[#e9c349] text-4xl mt-1">campaign</span>
                <div>
                  <h4 className="text-xl font-serif text-[#e1e3e4] mb-1">Integrated Marketing Campaign</h4>
                  <p className="text-sm text-[#c4c6cf]">Omni-channel storytelling that captures hearts and minds, driving measurable brand growth.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-[#e9c349]/20 pl-6 hover:border-[#e9c349] transition-all">
                <span className="material-symbols-outlined text-[#e9c349] text-4xl mt-1">smart_display</span>
                <div>
                  <h4 className="text-xl font-serif text-[#e1e3e4] mb-1">Commercial &amp; Content Production</h4>
                  <p className="text-sm text-[#c4c6cf]">Award-winning visual content tailored for cinema, broadcast, and digital platforms.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="aspect-square rounded-full border border-[#e9c349]/20 absolute -inset-8 animate-[spin_20s_linear_infinite]"></div>
            <div className="relative glass-panel rounded-2xl overflow-hidden aspect-[4/5] max-w-md w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmgBNKJsQS6XrG1IB8tsQSheXlRioIwRpX1vyVyPGbZzc21nFbkJRMmG4hqYZMRE9sUv-65iaBa9aG1aDrZoaO65A2gAvB7CfsL2NTl0Spi7RgohO4i56SxJcwwmw4dLlxt2w-yL0DXSb7ZtqjAL9CjLqrEjWpNuztjVaxnjLIDV3dDknsYSOiseaVPwLb2q4YXDWI4OIuIENCIFp4yY3xAM7crzR2GIsUlx4lrBedA_0c0XTducTCH44t2gFibbS_NUY7saGbPPs"
                alt="Strategy workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden text-center bg-[#191c1d]">
        <div className="relative z-10 px-6 max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif italic text-white font-bold">Ready to make history?</h2>
          <p className="text-sm md:text-base text-[#c4c6cf]">Join the elite portfolio of brands that have chosen Allstar Enterprise to define their legacy.</p>
          <button className="bg-[#e9c349] text-[#111415] text-xs font-semibold tracking-widest uppercase px-10 py-4 rounded-full hover:scale-105 gold-glow transition-all cursor-pointer">REQUEST A CONSULTATION</button>
        </div>
      </section>
    </div>
  );
}
