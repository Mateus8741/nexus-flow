"use client"

import { Clock, Mail, MessageSquare, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Entre em <span className="text-blue-400">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pronto para revolucionar suas vendas? Vamos conversar sobre como podemos ajudar
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="w-6 h-6 text-tech-blue mr-3" />
                Solicite uma Demonstração
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome completo" className="bg-background/50" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input id="phone" placeholder="(11) 99999-9999" className="bg-background/50" />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Empresa
                  </label>
                  <Input
                    id="company"
                    placeholder="Nome da sua empresa"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu negócio e como podemos ajudar a automatizar suas vendas..."
                  className="min-h-32 bg-background/50"
                />
              </div>

              <Button variant="cta" size="lg" className="w-full text-lg py-4">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in delay-200">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <p className="text-muted-foreground mb-8">
                Estamos aqui para ajudar você a transformar seu negócio com automação inteligente.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                  <p className="text-sm text-tech-blue">Resposta em até 1 hora</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">contato@nexusflow.com</p>
                  <p className="text-sm text-tech-blue">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-sm text-tech-blue">WhatsApp 24/7</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/30">
              <h4 className="font-semibold mb-4">Por que escolher a NexusFlow?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card/30 rounded-lg">
                  <div className="text-2xl font-bold text-tech-blue mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
                </div>
                <div className="text-center p-4 bg-card/30 rounded-lg">
                  <div className="text-2xl font-bold text-tech-blue mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Suporte Disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
