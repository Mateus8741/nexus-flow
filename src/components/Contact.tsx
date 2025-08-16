"use client"

import { Clock, Mail, MessageSquare, Send, Shield, Users, Zap } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const Contact = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-blue-100 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold text-violet-700">Entre em Contato</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Vamos{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Pronto para revolucionar suas vendas? Vamos conversar sobre como podemos ajudar
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-violet-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl">
                <Send className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                Solicite uma Demonstração
              </CardTitle>
              <p className="text-gray-600 text-lg">
                Preencha o formulário e nossa equipe entrará em contato em até 24h
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    className="h-12 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:ring-0 transition-all duration-300 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="h-12 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:ring-0 transition-all duration-300 text-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    className="h-12 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:ring-0 transition-all duration-300 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-gray-700">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    placeholder="Nome da sua empresa"
                    className="h-12 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:ring-0 transition-all duration-300 text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu negócio e como podemos ajudar a automatizar suas vendas..."
                  className="min-h-32 border-2 border-gray-200 rounded-xl focus:border-violet-500 focus:ring-0 transition-all duration-300 text-lg resize-none"
                />
              </div>

              <Button className="w-full h-14 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Stats */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Clientes Atendidos</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Taxa de Sucesso</div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">contato@nexusflow.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-gray-600">+55 (11) 99999-9999</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horário</div>
                  <div className="text-gray-600">Seg-Sex: 9h às 18h</div>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">100% Seguro</h4>
              <p className="text-gray-600">
                Seus dados estão protegidos com criptografia de ponta a ponta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
