"use client"

import { Button } from "@/components/ui/button"
import { Menu, MessageSquare, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Serviços", href: "#services" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-tech-purple to-tech-blue bg-clip-text text-transparent">
              NexusFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-tech-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button variant="cta" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              Falar Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-tech-blue transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-tech-blue transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="cta" size="sm" className="mt-4 w-fit">
                <MessageSquare className="w-4 h-4 mr-2" />
                Falar Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
