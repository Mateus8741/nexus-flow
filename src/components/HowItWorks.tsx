"use client"

import { ArrowRight, BarChart3, CheckCircle, MessageSquare, Workflow, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function HowItWorks() {
  const steps = [
    {
      id: "setup",
      icon: MessageSquare,
      title: "1. Configuração Inicial",
      description: "Conectamos sua conta do WhatsApp Business com a API oficial do Meta",
      details: ["Verificação da conta", "Configuração da API", "Teste de conectividade"],
      gradient: "from-green-500 to-emerald-600",
      number: "01",
    },
    {
      id: "workflow",
      icon: Workflow,
      title: "2. Criação de Workflows",
      description:
        "Desenvolvemos fluxos automatizados usando N8N para diferentes cenários de venda",
      details: ["Mapeamento de processos", "Configuração de triggers", "Automação de respostas"],
      gradient: "from-blue-500 to-indigo-600",
      number: "02",
    },
    {
      id: "ai",
      icon: BarChart3,
      title: "3. Integração com IA",
      description: "Implementamos inteligência artificial para qualificar leads e fechar vendas",
      details: ["Chatbot inteligente", "Qualificação automática", "Follow-up personalizado"],
      gradient: "from-purple-500 to-violet-600",
      number: "03",
    },
    {
      id: "launch",
      icon: Zap,
      title: "4. Lançamento e Monitoramento",
      description: "Ativamos o sistema e monitoramos o desempenho em tempo real",
      details: ["Testes finais", "Ativação gradual", "Dashboard de métricas"],
      gradient: "from-orange-500 to-red-600",
      number: "04",
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
    <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-blue-100 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold text-violet-700">Como Funciona</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Processo{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Simples
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformamos seu WhatsApp em uma máquina de vendas em apenas 4 passos
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="grid lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
              )}

              <Card className="relative z-10 h-full group-hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white shadow-xl">
                <CardHeader className="text-center pb-6">
                  {/* Step Number */}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-gray-600" />
                  </div>

                  <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-3xl p-16 shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Benefícios{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Exclusivos
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra por que empresas escolhem a NexusFlow para revolucionar suas vendas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 hover:from-violet-50 hover:to-blue-50 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-violet-700 transition-colors duration-300">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-100 to-blue-100 rounded-full px-8 py-4 mb-8">
              <Zap className="w-5 h-5 text-violet-600" />
              <span className="text-lg font-semibold text-violet-700">Pronto para começar?</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram suas vendas com a NexusFlow
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
