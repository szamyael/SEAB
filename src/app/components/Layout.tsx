import { Outlet, NavLink } from "react-router";
import { BookOpen, Layers, Type, CheckSquare, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Introduction", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-100" },
    { to: "/parts", label: "Parts & Organization", icon: Layers, color: "text-orange-500", bg: "bg-orange-100" },
    { to: "/types-and-process", label: "Types & Process", icon: Type, color: "text-purple-500", bg: "bg-purple-100" },
    { to: "/activities", label: "Activities & Assessment", icon: CheckSquare, color: "text-emerald-500", bg: "bg-emerald-100" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col font-sans overflow-x-hidden selection:bg-indigo-300 selection:text-indigo-900">
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-200 transform hover:scale-110 transition-transform">
                <BookOpen size={28} />
              </div>
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 tracking-tight">ParagraphMaster</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? `${link.bg} ${link.color} shadow-sm transform scale-105`
                          : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                        {link.label}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md absolute w-full left-0 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-bold transition-all duration-300 ${
                        isActive
                          ? `${link.bg} ${link.color}`
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        {link.label}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow w-full relative z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none z-[-1]" />
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12 py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 font-medium">
          <p className="text-lg">© {new Date().getFullYear()} Ddondevelopment. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Making writing fun and educational ✨</p>
        </div>
      </footer>
    </div>
  );
}
