import { CheckCircle2, MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../constants'

const highlights = [
  'Exame de vista gratuito com agendamento',
  'Grande variedade de armações em exposição',
  'Montagem especializada com qualidade garantida',
  'Parcelamento em até 6x sem juros',
  'Lentes de contato: diárias, mensais e coloridas',
]

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <div className="relative order-2 lg:order-1">
            {/* Background blob */}
            <div className="absolute inset-0 bg-brand-yellow/10 rounded-3xl blur-3xl scale-90" />

            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden border border-white/5">
                <img
                  src="/imagens/swappy-20260327_114446.png"
                  alt="Coleção Ótica Pague Menos"
                  className="w-full h-[420px] object-contain bg-white p-8"
                />
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -bottom-6 -left-6 bg-brand-gray border border-white/10 rounded-2xl p-5 shadow-2xl max-w-[200px]">
                <p className="text-brand-yellow font-display text-4xl font-bold">26</p>
                <p className="text-white/60 text-xs mt-1 leading-tight">
                  Anos cuidando da sua visão
                </p>
              </div>

              {/* Floating card — top right */}
              <div className="absolute -top-6 -right-6 bg-brand-yellow rounded-2xl p-4 shadow-2xl">
                <p className="text-brand-black font-bold text-2xl">+20 mil</p>
                <p className="text-brand-black/70 text-xs mt-0.5">Clientes felizes</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="section-label mb-3">Sobre Nós</p>
              <h2 className="section-title mb-6">
                A Sua Melhor{' '}
                <span className="gradient-text">Escolha</span>{' '}
                no Shopping Piedade
              </h2>
            </div>

            <div className="space-y-4 text-white/60 text-base leading-relaxed">
              <p>
                A <strong className="text-white">Ótica Pague Menos</strong> nasceu com uma missão
                clara: oferecer o melhor em saúde visual com preços acessíveis e atendimento de
                excelência. Localizada no coração do Shopping Piedade, em Salvador/BA, somos
                referência em qualidade e variedade.
              </p>
              <p>
                Com 26 anos de história no Shopping Piedade, já ajudamos mais de 20 mil clientes
                a enxergar melhor — e com o melhor preço. Trabalhamos com marcas selecionadas,
                exame gratuito e parcelamento facilitado para que o cuidado com a sua visão
                caiba sempre no seu bolso.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <MessageCircle size={18} />
              Falar com a Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
