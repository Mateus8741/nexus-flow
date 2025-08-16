"use client"

import { ArrowRight, BarChart3, CheckCircle, MessageSquare, Workflow, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const HowItWorks = () => {
  const steps = [
    {
      id: "setup",
      icon: MessageSquare,
      title: "1. Configuração Inicial",
      description: "Conectamos sua conta do WhatsApp Business com a API oficial do Meta",
      details: ["Verificação da conta", "Configuração da API", "Teste de conectividade"],
    },
    {
      id: "workflow",
      icon: Workflow,
      title: "2. Criação de Workflows",
      description:
        "Desenvolvemos fluxos automatizados usando N8N para diferentes cenários de venda",
      details: ["Mapeamento de processos", "Configuração de triggers", "Automação de respostas"],
    },
    {
      id: "ai",
      icon: BarChart3,
      title: "3. Integração com IA",
      description: "Implementamos inteligência artificial para qualificar leads e fechar vendas",
      details: ["Chatbot inteligente", "Qualificação automática", "Follow-up personalizado"],
    },
    {
      id: "launch",
      icon: Zap,
      title: "4. Lançamento e Monitoramento",
      description: "Ativamos o sistema e monitoramos o desempenho em tempo real",
      details: ["Testes finais", "Ativação gradual", "Dashboard de métricas"],
    },
  ]

  const benefits = [
    { id: "24h", text: "Vendas 24 horas por dia" },
    { id: "instant", text: "Respostas instantâneas" },
    { id: "leads", text: "Qualificação automática de leads" },
    { id: "crm", text: "Integração com CRM existente" },
    { id: "reports", text: "Relatórios detalhados" },
    { id: "support", text: "Suporte técnico especializado" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Como <span className="text-blue-400">Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Processo simples e eficiente para transformar seu WhatsApp em uma máquina de vendas
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className="group hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                <CardDescription className="text-sm">{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={`${step.id}-detail-${detailIndex}`}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-tech-blue mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8">Benefícios da Automação</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="flex items-center justify-center p-4 bg-card/30 rounded-lg border border-border/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-tech-blue mr-3" />
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-primary rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Pronto para começar?</h3>
            <p className="text-white/90 mb-6">
              Agende uma demonstração gratuita e veja como podemos transformar suas vendas
            </p>
            <button
              type="button"
              className="bg-white text-tech-blue px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center mx-auto"
            >
              Agendar Demonstração
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
