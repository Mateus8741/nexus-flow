"use client"

import { MessageSquare, Zap } from "lucide-react"
import Image from "next/image"
import heroBg from "../assets/hero-bg.jpg"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Technology automation background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 opacity-90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Automação Inteligente</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent animate-slide-up">
            Automatize suas Vendas no
            <span className="block text-blue-400">WhatsApp</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            Transforme seu comércio com IA e automação. Venda 24/7 pelo WhatsApp usando N8N, API do
            Meta e WhatsApp Flows de forma completamente automatizada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Começar Agora →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white text-black border-white hover:bg-white/90 hover:text-black"
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in delay-500">
            <p className="text-sm text-gray-400 mb-6">Confiado por empresas inovadoras</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-sm font-medium text-white">+100% Vendas</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-sm font-medium text-white">24/7 Automático</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-sm font-medium text-white">Zero Código</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
