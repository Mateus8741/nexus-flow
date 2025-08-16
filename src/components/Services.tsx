"use client"

import { BarChart3, Clock, MessageSquare, Shield, Workflow, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const Services = () => {
  const services = [
    {
      id: "whatsapp",
      icon: MessageSquare,
      title: "Automação WhatsApp",
      description:
        "Configure seu WhatsApp para vender automaticamente usando a API oficial do Meta",
      features: [
        "API Meta oficial",
        "WhatsApp Flows",
        "Respostas automáticas",
        "Catálogo integrado",
      ],
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
    },
    {
      id: "n8n",
      icon: Workflow,
      title: "Integração N8N",
      description:
        "Workflows inteligentes que conectam todos os seus sistemas de forma automatizada",
      features: [
        "Workflows visuais",
        "Integrações ilimitadas",
        "Triggers automáticos",
        "Lógica customizada",
      ],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      id: "sales",
      icon: BarChart3,
      title: "Vendas Inteligentes",
      description: "IA que qualifica leads, responde dúvidas e fecha vendas 24 horas por dia",
      features: [
        "IA conversacional",
        "Qualificação de leads",
        "Fechamento automático",
        "Relatórios detalhados",
      ],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
    },
  ]

  const benefits = [
    {
      id: "available",
      icon: Clock,
      title: "24/7 Disponível",
      description: "Sua equipe de vendas nunca dorme",
    },
    {
      id: "instant",
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Clientes atendidos em segundos",
    },
    {
      id: "secure",
      icon: Shield,
      title: "100% Seguro",
      description: "APIs oficiais e dados protegidos",
    },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-blue-100 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold text-violet-700">Nossos Serviços</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Soluções{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Completas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformamos seu negócio digital com automação inteligente e tecnologia de ponta
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-6">
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                      ></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-16">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                NexusFlow
              </span>
              ?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma oferece vantagens exclusivas que transformam seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-violet-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
