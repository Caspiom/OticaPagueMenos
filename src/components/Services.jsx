const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Exame de Vista Grátis',
    description:
      'Realizamos exames completos de refração com optometristas certificados, sem custo algum para você. Agende já o seu!',
    highlight: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Montagem Especializada',
    description:
      'Nossas lentes são montadas com precisão por técnicos especializados, garantindo o melhor resultado para a sua visão.',
    highlight: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Garantia de 1 Ano',
    description:
      'Todas as armações possuem 1 ano de garantia contra defeitos de fabricação. Nossa equipe técnica está sempre pronta para te atender.',
    highlight: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Qualidade, Agilidade e Preço Justo',
    description:
      'Qualidade na montagem, agilidade na entrega e preço justo. Na Ótica Pague Menos, você sai enxergando melhor — sem esperar.',
    highlight: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Lentes de Contato',
    description:
      'Grande variedade de lentes de contato: diárias, mensais, coloridas e multifocais. Descubra o par ideal para você.',
    highlight: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Parcelamento Sem Juros',
    description:
      'Parcele em até 6x sem juros no cartão. Porque cuidar da sua visão não pode esperar pelo seu bolso.',
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">O Que Oferecemos</p>
          <h2 className="section-title mb-4">Nossos Serviços</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Na Ótica Pague Menos você encontra muito mais do que óculos. Oferecemos uma
            experiência completa de cuidado com a sua visão.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                service.highlight
                  ? 'bg-brand-yellow border-brand-yellow'
                  : 'bg-brand-gray border-white/5 hover:border-brand-yellow/30'
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl mb-5 ${
                  service.highlight
                    ? 'bg-brand-black/15 text-brand-black'
                    : 'bg-brand-yellow/10 text-brand-yellow group-hover:bg-brand-yellow/20'
                } transition-colors`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className={`font-bold text-lg mb-3 ${
                  service.highlight ? 'text-brand-black' : 'text-white'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.highlight ? 'text-brand-black/70' : 'text-white/50'
                }`}
              >
                {service.description}
              </p>

              {/* Corner accent */}
              {!service.highlight && (
                <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-brand-yellow/10 rounded-tl-2xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
