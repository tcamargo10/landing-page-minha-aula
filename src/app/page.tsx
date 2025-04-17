import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Users,
  CreditCard,
  BarChart3,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Smartphone,
  Award,
  Clock,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold">Minha Aula</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#recursos"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Recursos
            </Link>
            <Link
              href="#casos-de-uso"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Casos de Uso
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Depoimentos
            </Link>
            <Link
              href="#precos"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              Preços
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#contato"
              className="hidden md:block text-sm font-medium transition-colors hover:text-accent"
            >
              Contato
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="#demo">Agendar Demo</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Gerencie sua escola com facilidade
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Minha Aula é um sistema completo para escolas de inglês,
                    artes marciais, natação, música e muito mais. Controle
                    alunos, pagamentos e relatórios em um só lugar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent hover:bg-accent/90"
                  >
                    <Link href="#demo">Começar Agora</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <Link href="#saiba-mais">Saiba Mais</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1470&auto=format&fit=crop"
                  width={550}
                  height={550}
                  alt="Dashboard do Minha Aula"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Confiado por escolas de todo o Brasil
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Escolas de diversos segmentos já utilizam o Minha Aula para
                  otimizar sua gestão
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center py-8">
              <Image
                src="https://static.wixstatic.com/media/11062b_5f5c01d09101496e8fa9290319c42295~mv2.jpg/v1/fill/w_250,h_250,al_c,q_90/11062b_5f5c01d09101496e8fa9290319c42295~mv2.jpg"
                width={120}
                height={60}
                alt="Logo Cliente"
                className="mx-auto object-contain"
              />
              <Image
                src="https://static.wixstatic.com/media/11062b_6d66b49984a41bfba9d7cc9c5d480c2e~mv2.jpg/v1/fill/w_250,h_250,al_c,q_90/11062b_6d66b49984a41bfba9d7cc9c5d480c2e~mv2.jpg"
                width={120}
                height={60}
                alt="Logo Cliente"
                className="mx-auto object-contain"
              />
              <Image
                src="https://static.wixstatic.com/media/11062b_b4dcdbdad4ea4423a38796c8a54a87e5~mv2.png/v1/fill/w_250,h_250,al_c,q_90/11062b_b4dcdbdad4ea4423a38796c8a54a87e5~mv2.png"
                width={120}
                height={60}
                alt="Logo Cliente"
                className="mx-auto object-contain"
              />
              <Image
                src="https://static.wixstatic.com/media/11062b_2f244ac9d32a44159598e2aa081b1cca~mv2.jpg/v1/fill/w_250,h_250,al_c,q_90/11062b_2f244ac9d32a44159598e2aa081b1cca~mv2.jpg"
                width={120}
                height={60}
                alt="Logo Cliente"
                className="mx-auto object-contain"
              />
              <Image
                src="https://static.wixstatic.com/media/11062b_f1cbef243f4647a4844b59fafe1bc368~mv2.png/v1/fill/w_250,h_250,al_c,q_90/11062b_f1cbef243f4647a4844b59fafe1bc368~mv2.png"
                width={120}
                height={60}
                alt="Logo Cliente"
                className="mx-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="recursos"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Tudo o que você precisa em um só lugar
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Gerencie sua escola com ferramentas poderosas e intuitivas
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all">
                <Users className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold">Gestão de Alunos</h3>
                <p className="text-center text-muted-foreground">
                  Cadastre e gerencie todos os seus alunos com facilidade,
                  incluindo informações de contato e histórico.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all">
                <CreditCard className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold">Controle Financeiro</h3>
                <p className="text-center text-muted-foreground">
                  Gerencie mensalidades, pagamentos e emita cobranças
                  automaticamente para seus alunos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all">
                <BarChart3 className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold">Relatórios Detalhados</h3>
                <p className="text-center text-muted-foreground">
                  Visualize relatórios de desempenho, frequência e financeiros
                  para tomar decisões baseadas em dados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all">
                <Calendar className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold">Agenda Integrada</h3>
                <p className="text-center text-muted-foreground">
                  Organize aulas, eventos e compromissos em um calendário
                  completo e compartilhável.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all">
                <MessageSquare className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold">Comunicação</h3>
                <p className="text-center text-muted-foreground">
                  Envie mensagens, avisos e lembretes para alunos e responsáveis
                  diretamente pelo sistema.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white hover:shadow-md transition-all">
                <Smartphone className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-bold">Aplicativo Móvel</h3>
                <p className="text-center text-muted-foreground">
                  Acesse todas as funcionalidades pelo celular, permitindo
                  gerenciar sua escola de qualquer lugar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="casos-de-uso" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
                  Casos de Uso
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ideal para diversos tipos de escolas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Veja como o Minha Aula pode ser adaptado para diferentes
                  segmentos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop"
                  width={500}
                  height={300}
                  alt="Escola de Inglês"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Escolas de Idiomas</h3>
                  <p className="text-muted-foreground">
                    Gerencie turmas por níveis, acompanhe o progresso dos alunos
                    e organize materiais didáticos. Ideal para escolas de
                    inglês, espanhol e outros idiomas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Controle de níveis e turmas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Acompanhamento de progresso</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Biblioteca de materiais</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col space-y-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1574607383476-1b91990a0857?q=80&w=1529&auto=format&fit=crop"
                  width={500}
                  height={300}
                  alt="Escola de Artes Marciais"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Artes Marciais</h3>
                  <p className="text-muted-foreground">
                    Controle graduações, organize campeonatos e gerencie
                    mensalidades. Perfeito para academias de jiu-jitsu, karatê,
                    judô e outras artes marciais.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Controle de faixas e graduações</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Gestão de competições</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Controle de frequência</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col space-y-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=1470&auto=format&fit=crop"
                  width={500}
                  height={300}
                  alt="Escola de Música"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Escolas de Música</h3>
                  <p className="text-muted-foreground">
                    Organize aulas por instrumento, gerencie apresentações e
                    acompanhe o desenvolvimento dos alunos. Ideal para
                    conservatórios e escolas de música.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Organização por instrumento</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Agenda de apresentações</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Biblioteca de partituras</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col space-y-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1590156357515-684260ede72a?q=80&w=1527&auto=format&fit=crop"
                  width={500}
                  height={300}
                  alt="Escola de Natação"
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">Escolas de Natação</h3>
                  <p className="text-muted-foreground">
                    Controle turmas por nível, gerencie horários de piscina e
                    acompanhe o desenvolvimento dos alunos. Perfeito para
                    academias e clubes com aulas de natação.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Gestão de horários de piscina</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Controle de níveis e turmas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-accent" />
                      <span>Acompanhamento de evolução</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">
                    Benefícios
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Por que escolher o Minha Aula?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transforme a gestão da sua escola com uma solução completa e
                    intuitiva
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <Award className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold">Aumente a produtividade</h3>
                      <p className="text-muted-foreground">
                        Automatize tarefas administrativas e foque no que
                        realmente importa: o ensino.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <CreditCard className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold">Reduza a inadimplência</h3>
                      <p className="text-muted-foreground">
                        Envie lembretes automáticos e facilite o pagamento das
                        mensalidades.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <Users className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold">
                        Melhore a experiência dos alunos
                      </h3>
                      <p className="text-muted-foreground">
                        Ofereça um aplicativo moderno para seus alunos
                        acompanharem seu progresso.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <Clock className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold">Economize tempo</h3>
                      <p className="text-muted-foreground">
                        Reduza o tempo gasto com tarefas administrativas e
                        burocráticas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1587&auto=format&fit=crop"
                  width={500}
                  height={500}
                  alt="Benefícios do Minha Aula"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  O que nossos clientes dizem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Veja como o Minha Aula tem transformado a gestão de escolas
                  por todo o Brasil
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    O Minha Aula revolucionou a forma como gerenciamos nossa
                    escola de inglês. Reduzimos em 70% o tempo gasto com tarefas
                    administrativas.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Ana Paula</p>
                    <p className="text-xs text-muted-foreground">
                      Diretora, Escola de Inglês Fluency
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Nossa academia de jiu-jitsu cresceu 40% após implementarmos
                    o Minha Aula. A gestão ficou muito mais simples e
                    profissional.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Carlos Silva</p>
                    <p className="text-xs text-muted-foreground">
                      Proprietário, Academia Força Total
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    O aplicativo para os alunos foi um diferencial enorme para
                    nossa escola de música. Os pais adoram acompanhar o
                    progresso dos filhos.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Mariana Costa</p>
                    <p className="text-xs text-muted-foreground">
                      Coordenadora, Conservatório Musical
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="precos"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Preços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Planos para escolas de todos os tamanhos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Escolha o plano ideal para o seu negócio
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Básico</h3>
                  <p className="text-muted-foreground">Para escolas pequenas</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  R$99
                  <span className="text-sm font-normal text-muted-foreground">
                    /mês
                  </span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Até 50 alunos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Gestão financeira básica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Aplicativo para alunos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Suporte por email</span>
                  </li>
                </ul>
                <Button className="mt-8" size="lg">
                  Começar Agora
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Mais Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Profissional</h3>
                  <p className="text-muted-foreground">
                    Para escolas em crescimento
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  R$199
                  <span className="text-sm font-normal text-muted-foreground">
                    /mês
                  </span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Até 200 alunos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Gestão financeira completa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Aplicativo personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Relatórios avançados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <Button className="mt-8" size="lg" variant="default">
                  Começar Agora
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Empresarial</h3>
                  <p className="text-muted-foreground">Para redes de escolas</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  R$399
                  <span className="text-sm font-normal text-muted-foreground">
                    /mês
                  </span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Alunos ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Gestão financeira completa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Aplicativo totalmente personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Relatórios avançados e BI</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Suporte 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>Múltiplas unidades</span>
                  </li>
                </ul>
                <Button className="mt-8" size="lg" variant="outline">
                  Fale com Consultor
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Perguntas Frequentes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Tire suas dúvidas sobre o Minha Aula
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">
                  Como funciona a implementação do sistema?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  A implementação é simples e rápida. Nossa equipe de suporte
                  ajuda na configuração inicial, importação de dados e
                  treinamento da sua equipe. Todo o processo leva em média 7
                  dias.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">
                  Preciso instalar algum software?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Não, o Minha Aula é 100% baseado na nuvem. Você pode acessar
                  de qualquer dispositivo com conexão à internet, seja pelo
                  navegador ou pelo aplicativo móvel.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">
                  Como funciona o aplicativo para os alunos?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  O aplicativo permite que os alunos acessem seu histórico de
                  aulas, realizem pagamentos, vejam avisos e se comuniquem com a
                  escola. Está disponível para Android e iOS.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">
                  É possível personalizar o sistema para minha escola?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Sim, o Minha Aula é altamente personalizável. Você pode
                  adaptar campos, relatórios e fluxos de trabalho de acordo com
                  as necessidades específicas da sua escola.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">
                  Como é feita a migração dos dados da minha escola?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Nossa equipe de suporte ajuda na importação dos seus dados
                  atuais para o Minha Aula. Podemos importar de planilhas Excel,
                  outros sistemas ou bancos de dados existentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="demo"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Pronto para transformar a gestão da sua escola?
                </h2>
                <p className="max-w-[900px] md:text-xl">
                  Agende uma demonstração gratuita e veja como o Minha Aula pode
                  ajudar sua escola a crescer
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                  <select className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-primary-foreground">
                    <option value="" disabled selected>
                      Tipo de escola
                    </option>
                    <option value="idiomas">Escola de Idiomas</option>
                    <option value="artes-marciais">
                      Academia de Artes Marciais
                    </option>
                    <option value="musica">Escola de Música</option>
                    <option value="natacao">Escola de Natação</option>
                    <option value="outro">Outro</option>
                  </select>
                  <Button type="submit" variant="secondary" size="lg">
                    Agendar Demonstração
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Contato
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Fale Conosco
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Estamos à disposição para ajudar sua escola a crescer
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>contato@minhaaula.com.br</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Segunda a Sexta, 9h às 18h</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Equipe Minha Aula"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Minha Aula</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Minha Aula. Todos os direitos
            reservados.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Termos
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
