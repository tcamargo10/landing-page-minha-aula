import React from "react";

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-14 text-center shadow">
        <h1 className="text-5xl font-extrabold mb-4">Minha Aula</h1>
        <p className="text-xl">
          Tudo para a gestão dos cursos da sua escola e o acompanhamento dos
          pais
        </p>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          App para Pais + Painel Web para Escolas
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Facilite a organização dos cursos extracurriculares, pagamentos e
          comunicação com os pais.
        </p>
        <img
          className="mx-auto rounded-xl shadow-xl"
          src="https://source.unsplash.com/800x400/?school,app"
          alt="Mockup Minha Aula"
        />
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Funcionalidades que fazem a diferença
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">App para os Pais</h3>
            <p className="text-gray-600">
              Visualize cursos, calendários, pagamentos e notificações
              diretamente no celular.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Calendário Integrado</h3>
            <p className="text-gray-600">
              Acompanhe os dias de aula com facilidade, com visualização mensal
              e semanal.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Gestão Financeira</h3>
            <p className="text-gray-600">
              Controle completo de mensalidades e pagamentos realizados ou
              pendentes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Painel Administrativo
            </h3>
            <p className="text-gray-600">
              Gerencie cursos, alunos, relatórios e mais com uma interface
              simples e eficaz.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Section - Como Funciona */}
      <section className="px-6 py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">
          Como funciona o Minha Aula?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <img
              src="https://source.unsplash.com/200x200/?mobile"
              alt="App"
              className="mx-auto mb-4 rounded-full"
            />
            <h4 className="text-lg font-semibold mb-2">
              1. Pais acessam o app
            </h4>
            <p className="text-gray-600">
              Com visual moderno e prático, os pais acompanham tudo na palma da
              mão.
            </p>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/200x200/?computer"
              alt="Painel"
              className="mx-auto mb-4 rounded-full"
            />
            <h4 className="text-lg font-semibold mb-2">
              2. Escola gerencia no painel
            </h4>
            <p className="text-gray-600">
              Cursos, pagamentos, relatórios e alunos, tudo no mesmo lugar.
            </p>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/200x200/?success"
              alt="Sucesso"
              className="mx-auto mb-4 rounded-full"
            />
            <h4 className="text-lg font-semibold mb-2">
              3. Resultados com organização
            </h4>
            <p className="text-gray-600">
              Reduza erros, ganhe tempo e aumente a satisfação dos responsáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-100 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">
          O que dizem nossos clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 italic">
              “O Minha Aula mudou completamente a nossa organização. Os pais
              adoram!”
            </p>
            <h4 className="mt-4 font-semibold">Escola Brilho do Saber</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 italic">
              “Agora temos controle total dos pagamentos e muito mais
              credibilidade.”
            </p>
            <h4 className="mt-4 font-semibold">Projeto Música Viva</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-600 italic">
              “Simples de usar, bonito e eficiente. Estamos muito satisfeitos!”
            </p>
            <h4 className="mt-4 font-semibold">Academia Movimento</h4>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-14">
          Planos para sua Escola
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="border-2 border-blue-600 p-8 rounded-2xl text-center shadow">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <p className="text-4xl font-extrabold text-blue-600 mb-6">
              R$99,90<span className="text-lg font-normal">/mês</span>
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>Até 50 alunos</li>
              <li>1 administrador</li>
              <li>Suporte básico</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Assinar Starter
            </button>
          </div>

          <div className="border-2 border-yellow-500 p-8 rounded-2xl text-center shadow bg-yellow-50">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-extrabold text-yellow-600 mb-6">
              R$199,90<span className="text-lg font-normal">/mês</span>
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>Alunos ilimitados</li>
              <li>Múltiplos administradores</li>
              <li>Suporte prioritário</li>
            </ul>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
              Assinar Premium
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Pronto para transformar sua gestão?
        </h2>
        <p className="text-lg mb-8">
          Comece agora e leve sua escola para o próximo nível com o Minha Aula
        </p>
        <button
          onClick={() =>
            (window.location.href =
              "https://aula-admin-painel-gerencial.lovable.app/")
          }
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100"
        >
          Cadastrar ou Fazer Login
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-gray-100">
        &copy; 2025 Minha Aula. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
