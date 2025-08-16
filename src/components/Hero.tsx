"use client"

import { ArrowRight, MessageSquare, Zap } from "lucide-react"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-violet-100 to-blue-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-violet-50 to-blue-50 rounded-full blur-3xl opacity-40 animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full px-8 py-4 mb-12 shadow-xl animate-fade-in">
            <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full animate-pulse"></div>
            <Zap className="w-5 h-5 text-violet-600" />
            <span className="text-base font-semibold text-gray-700">Automação Inteligente</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up leading-tight">
            <span className="text-gray-900">Automatize suas</span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 bg-clip-text text-transparent animate-gradient-x">
              Vendas no WhatsApp
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
            Transforme seu comércio com IA e automação. Venda 24/7 pelo WhatsApp usando N8N, API do
            Meta e WhatsApp Flows de forma completamente automatizada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-300 mb-16">
            <Button
              variant="hero"
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-xl px-10 py-6 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              Começar Agora
              <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-10 py-6 rounded-2xl font-semibold border-2 border-gray-300 text-gray-700 hover:border-violet-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-300 transform hover:scale-105"
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in delay-500">
            <p className="text-sm text-gray-500 mb-8 font-medium">
              Confiado por empresas inovadoras
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-xl border border-gray-200/50">
                <span className="text-lg font-semibold text-gray-800">+100% Vendas</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-xl border border-gray-200/50">
                <span className="text-lg font-semibold text-gray-800">24/7 Automático</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-xl border border-gray-200/50">
                <span className="text-lg font-semibold text-gray-800">Zero Código</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
