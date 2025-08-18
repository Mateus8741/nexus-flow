"use client"

import { Menu, MessageSquare, Sparkles, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "./Logo"
import { Button } from "./ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Serviços", href: "#services" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Contato", href: "#contact" },
    { name: "Dashboard", href: "/dashboard", target: "_blank" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center space-x-12">
            {menuItems.map(item =>
              item.name === "Dashboard" ? (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  className="relative group overflow-hidden bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: "gradient-shift 3s ease infinite",
                  }}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className="absolute top-1 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-70"></div>
                    <div
                      className="absolute top-2 right-3 w-1 h-1 bg-yellow-200 rounded-full animate-pulse opacity-60"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute bottom-1 left-4 w-1 h-1 bg-orange-200 rounded-full animate-pulse opacity-80"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="relative">
                      {item.name}
                      <Sparkles className="absolute -top-1 -right-4 w-3 h-3 text-yellow-300 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" />
                    </span>
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 via-orange-500/20 to-orange-600/20 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse"></div>
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-brand transition-all duration-300 font-medium text-lg relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-brand to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>

          <div className="hidden md:flex">
            <Button
              variant="cta"
              size="lg"
              className="bg-gradient-to-r from-orange-brand to-orange-500 hover:from-orange-brand hover:to-orange-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Falar Conosco
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-gray-700 hover:text-orange-brand transition-colors rounded-xl hover:bg-gray-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-brand transition-colors duration-200 font-medium py-3 px-4 rounded-xl hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                type="button"
                className="relative group overflow-hidden bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105 active:scale-95 w-full"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 3s ease infinite",
                }}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-2 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-70"></div>
                  <div
                    className="absolute top-4 right-6 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse opacity-60"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-3 left-8 w-1 h-1 bg-orange-200 rounded-full animate-pulse opacity-80"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-[2px] group-hover:from-yellow-400 group-hover:via-orange-400 group-hover:to-orange-500 transition-all duration-500">
                  <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-xl h-full w-full flex items-center justify-center">
                    <div className="flex items-center">
                      <MessageSquare className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="relative">
                        Falar Conosco
                        <Sparkles className="absolute -top-2 -right-6 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 via-orange-500/20 to-orange-600/20 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
              </button>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
    </header>
  )
}
