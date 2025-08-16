"use client"

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicos: [
      { name: "Automação WhatsApp", href: "#" },
      { name: "Integração N8N", href: "#" },
      { name: "IA Conversacional", href: "#" },
      { name: "Workflows Inteligentes", href: "#" },
    ],
    empresa: [
      { name: "Sobre Nós", href: "#" },
      { name: "Nossa Equipe", href: "#" },
      { name: "Cases de Sucesso", href: "#" },
      { name: "Blog", href: "#" },
    ],
    suporte: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Documentação", href: "#" },
      { name: "Status do Sistema", href: "#" },
      { name: "Contato", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF4C00] to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-[#FF4C00] to-orange-400 bg-clip-text text-transparent">
                NexusFlow
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Transformamos seu WhatsApp em uma máquina de vendas 24/7 com IA e automação
              inteligente. Venda mais, trabalhe menos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#FF4C00] hover:to-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-white">Serviços</h3>
            <ul className="space-y-4">
              {footerLinks.servicos.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF4C00] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-white">Empresa</h3>
            <ul className="space-y-4">
              {footerLinks.empresa.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF4C00] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-xl mb-8 text-white">Suporte</h3>
            <ul className="space-y-4">
              {footerLinks.suporte.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF4C00] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 py-12 border-t border-white/10 mb-12">
          <div className="flex items-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FF4C00] to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white text-lg">Telefone</p>
              <p className="text-gray-300">+55 (11) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white text-lg">Email</p>
              <p className="text-gray-300">contato@nexusflow.com</p>
            </div>
          </div>

          <div className="flex items-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white text-lg">Localização</p>
              <p className="text-gray-300">São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 mb-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Fique por dentro das novidades</h3>
            <p className="text-gray-300 text-lg mb-8">
              Receba insights exclusivos sobre automação e crescimento de vendas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF4C00] transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#FF4C00] to-orange-500 hover:from-[#FF4C00] hover:to-orange-600 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} NexusFlow. Todos os direitos reservados.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a
                href="/politica-privacidade"
                className="text-sm text-gray-400 hover:text-[#FF4C00] transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-uso"
                className="text-sm text-gray-400 hover:text-[#FF4C00] transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a
                href="/cookies"
                className="text-sm text-gray-400 hover:text-[#FF4C00] transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
