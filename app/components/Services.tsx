"use client"

import n8nWorkflow from "@/assets/n8n-workflow.jpg"
import salesGrowth from "@/assets/sales-growth.jpg"
import whatsappAutomation from "@/assets/whatsapp-automation.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Clock, MessageSquare, Shield, Workflow, Zap } from "lucide-react"

const Services = () => {
  const services = [
    {
      id: "whatsapp",
      icon: MessageSquare,
      title: "Automação WhatsApp",
      description:
        "Configure seu WhatsApp para vender automaticamente usando a API oficial do Meta",
      image: whatsappAutomation.src,
      features: [
        "API Meta oficial",
        "WhatsApp Flows",
        "Respostas automáticas",
        "Catálogo integrado",
      ],
    },
    {
      id: "n8n",
      icon: Workflow,
      title: "Integração N8N",
      description:
        "Workflows inteligentes que conectam todos os seus sistemas de forma automatizada",
      image: n8nWorkflow.src,
      features: [
        "Workflows visuais",
        "Integrações ilimitadas",
        "Triggers automáticos",
        "Lógica customizada",
      ],
    },
    {
      id: "sales",
      icon: BarChart3,
      title: "Vendas Inteligentes",
      description: "IA que qualifica leads, responde dúvidas e fecha vendas 24 horas por dia",
      image: salesGrowth.src,
      features: [
        "IA conversacional",
        "Qualificação de leads",
        "Fechamento automático",
        "Relatórios detalhados",
      ],
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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-tech-blue">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de automação para transformar seu negócio digital
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <service.icon className="w-8 h-8 text-tech-blue mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={`${service.id}-feature-${featureIndex}`}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Zap className="w-4 h-4 text-tech-blue mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
