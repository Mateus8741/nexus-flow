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

const Footer = () => {
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
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mr-3">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                NexusFlow
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos seu WhatsApp em uma máquina de vendas 24/7 com IA e automação
              inteligente. Venda mais, trabalhe menos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Suporte</h3>
            <ul className="space-y-2">
              {footerLinks.suporte.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-white/20 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-white">Telefone</p>
              <p className="text-gray-300">+55 (11) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-white">Email</p>
              <p className="text-gray-300">contato@nexusflow.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-white">Localização</p>
              <p className="text-gray-300">São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} NexusFlow. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/politica-privacidade"
                className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-uso"
                className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="/cookies"
                className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
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

export default Footer
