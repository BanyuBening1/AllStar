import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/companyData";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111415]/90 backdrop-blur-md border-b border-[#e9c349]/10 shadow-lg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYWG5kY8qV893C13xEqyCngBgE8wkt5hp9R4lIphMVeqiXOfa_Eqiuz0PxUKGFbQOihyS6UeiLGHRzEJLJxJvjqCkjGDSX_ouDlYeSGVWScwnA9HIMvpAhQh-8Fr_ilSC8vDpsGWi6XgOB1fiWAWGK0yPEkBS13bO-wsc4KMXanTFE_Yedi7mGKYHQI5tyRyxDdmR7gXkSRBpZfYJj73k405HUmvomiAvGMKdGcJF06skwQjXlkWDs8B8JflT2uiIiAfZMQAnDf-U"
            alt="Allstars Enterprise Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider">
          {navLinks.map((link, index) => {
            const isShowcaseLink = link.name === "The Showcase";
            const targetPath = isShowcaseLink ? "/showcase" : isHomePage ? link.href : `/${link.href}`;
            const isActive = isShowcaseLink ? location.pathname === "/showcase" : isHomePage && link.href === "#home";

            return isShowcaseLink ? (
              <Link key={index} to="/showcase" className={`transition-colors duration-300 py-1 ${isActive ? "text-[#e9c349] border-b-2 border-[#e9c349]" : "text-[#c4c6cf] hover:text-[#e9c349]"}`}>
                {link.name}
              </Link>
            ) : (
              <a key={index} href={targetPath} className={`transition-colors duration-300 py-1 ${isActive ? "text-[#e9c349] border-b-2 border-[#e9c349]" : "text-[#c4c6cf] hover:text-[#e9c349]"}`}>
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden text-[#e9c349] focus:outline-none cursor-pointer p-1">
          <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111415]/95 backdrop-blur-xl border-b border-[#e9c349]/20 px-6 py-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-3 text-sm font-semibold tracking-wider">
            {navLinks.map((link, index) => {
              const isShowcaseLink = link.name === "The Showcase";
              return isShowcaseLink ? (
                <Link key={index} to="/showcase" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#c4c6cf] hover:text-[#e9c349]">
                  {link.name}
                </Link>
              ) : (
                <a key={index} href={isHomePage ? link.href : `/${link.href}`} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-[#c4c6cf] hover:text-[#e9c349]">
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
