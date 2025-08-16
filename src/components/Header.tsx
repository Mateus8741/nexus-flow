"use client"

import { Menu, MessageSquare, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "./Logo"
import { Button } from "./ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Serviços", href: "#services" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center space-x-12">
            {menuItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-brand transition-all duration-300 font-medium text-lg relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-brand to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
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
              <Button
                variant="cta"
                size="lg"
                className="mt-4 w-full bg-gradient-to-r from-orange-brand to-orange-500 hover:from-orange-brand hover:to-orange-600 text-white py-3 rounded-2xl font-semibold shadow-xl"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Falar Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
