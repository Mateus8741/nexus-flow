# NexusFlow Dashboard

Uma dashboard moderna e funcional para gerenciamento de produtos e controle de estoque, construída com Next.js 15, React 19, TypeScript e Shadcn UI.

## 🚀 Funcionalidades

### 📊 Visão Geral
- **Cards de Estatísticas**: Total de produtos, valor em estoque, produtos com estoque baixo e sem estoque
- **Gráficos Interativos**: Visualização de produtos por categoria e status do estoque
- **Métricas em Tempo Real**: Atualização automática das estatísticas

### 🛍️ Gerenciamento de Produtos
- **Cadastro Completo**: Nome, descrição, preço, quantidade, imagem e categoria
- **Edição Inteligente**: Formulário pré-preenchido para edição rápida
- **Controle de Estoque**: Monitoramento automático de níveis de estoque
- **Busca e Filtros**: Pesquisa por nome, categoria ou descrição
- **Exclusão Segura**: Confirmação antes de deletar produtos

### 🎨 Interface Moderna
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Tema Escuro/Claro**: Suporte automático ao tema do sistema
- **Navegação Intuitiva**: Sidebar com menu organizado por seções
- **Componentes Reutilizáveis**: Arquitetura modular e escalável

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface com hooks modernos
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn UI** - Componentes de interface pré-construídos
- **Radix UI** - Componentes primitivos acessíveis
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **Recharts** - Gráficos interativos
- **Lucide React** - Ícones modernos

## 📁 Estrutura do Projeto

```
src/
├── app/
│   └── dashboard/
│       ├── layout.tsx          # Layout da dashboard
│       └── page.tsx            # Página principal
├── components/
│   └── dashboard/
│       ├── dashboard-header.tsx    # Header com busca e notificações
│       ├── dashboard-sidebar.tsx   # Menu lateral de navegação
│       ├── stats-cards.tsx         # Cards de estatísticas
│       ├── charts-section.tsx      # Gráficos e analytics
│       ├── products-table.tsx      # Tabela de produtos
│       └── product-form.tsx        # Formulário de produtos
├── contexts/
│   └── product-context.tsx     # Contexto global de produtos
├── types/
│   └── product.ts              # Tipos TypeScript
└── data/
    └── sample-products.ts      # Dados de exemplo
```

## 🚀 Como Usar

### 1. Acesse a Dashboard
Navegue para `/dashboard` na sua aplicação

### 2. Visualize Estatísticas
- **Total de Produtos**: Quantidade total de produtos cadastrados
- **Valor Total**: Valor monetário total em estoque
- **Estoque Baixo**: Produtos com ≤ 10 unidades
- **Sem Estoque**: Produtos com 0 unidades

### 3. Gerencie Produtos
- **Adicionar**: Clique em "Novo Produto" para cadastrar
- **Editar**: Use o botão de edição na tabela
- **Excluir**: Clique no botão de lixeira (com confirmação)
- **Buscar**: Use a barra de busca para filtrar produtos

### 4. Analise Dados
- **Gráfico de Barras**: Produtos por categoria com quantidade e valor
- **Gráfico de Pizza**: Distribuição do status do estoque

## 📱 Responsividade

A dashboard é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com sidebar fixa
- **Tablet**: Sidebar colapsável com overlay
- **Mobile**: Menu hambúrguer com navegação otimizada

## 🎯 Próximas Funcionalidades

- [ ] **Sistema de Usuários**: Login e controle de acesso
- [ ] **Histórico de Alterações**: Log de modificações nos produtos
- [ ] **Relatórios Avançados**: Exportação em PDF/Excel
- [ ] **Notificações**: Alertas de estoque baixo
- [ ] **Backup Automático**: Sincronização com banco de dados
- [ ] **API REST**: Endpoints para integração externa

## 🔧 Configuração

### Dependências
Todas as dependências necessárias já estão incluídas no `package.json`:

```bash
npm install
# ou
pnpm install
```

### Variáveis de Ambiente
Configure as seguintes variáveis se necessário:

```env
NEXT_PUBLIC_APP_NAME=NexusFlow Dashboard
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Executar em Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

## 📊 Dados de Exemplo

A dashboard vem com produtos de exemplo pré-cadastrados para demonstração:

- **Eletrônicos**: iPhone, MacBook, AirPods, Smart Watch
- **Vestuário**: Camisetas, Tênis
- **Livros**: O Poder do Hábito
- **Alimentos**: Café Especial

## 🎨 Personalização

### Cores e Temas
As cores podem ser personalizadas através do arquivo `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Suas cores personalizadas
      }
    }
  }
}
```

### Componentes
Todos os componentes são baseados em Shadcn UI e podem ser facilmente customizados seguindo a documentação oficial.

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Outras Plataformas
```bash
npm run build
npm run start
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia o guia de contribuição antes de submeter pull requests.

---

**Desenvolvido com ❤️ pela equipe NexusFlow**
