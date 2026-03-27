import { MessageCircle, ChevronDown, Star } from 'lucide-react'
import { WHATSAPP_LINK } from '../constants'

const stats = [
  { value: '+20 mil', label: 'Clientes Atendidos' },
  { value: '26 anos', label: 'de Experiência' },
  { value: '8', label: 'Marcas Disponíveis' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-brand-yellow/5 blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-yellow/3 blur-3xl -translate-x-1/2" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#F5C800 1px, transparent 1px), linear-gradient(90deg, #F5C800 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text Content */}
          <div className="space-y-8">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <span className="text-brand-yellow text-xs font-semibold tracking-wide">
                Melhor Ótica do Shopping Piedade
              </span>
            </div>

            {/* Headline */}
            <div>
              <p className="section-label mb-3">Ótica Pague Menos</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">Veja o Mundo</span>
                <br />
                <span className="gradient-text">da Melhor</span>
                <br />
                <span className="text-white">Forma.</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              Óculos de grau, solares e lentes de contato das melhores marcas nacionais e
              internacionais. Qualidade premium com o melhor preço de Salvador.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
              <a href="#produtos" className="btn-outline text-base px-8 py-4">
                Ver Coleção
                <ChevronDown size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-brand-yellow">{stat.value}</p>
                  <p className="text-white/50 text-xs mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product Visual */}
          <div className="relative flex justify-center items-center">
            {/* Decorative circles */}
            <div className="absolute w-80 h-80 lg:w-[480px] lg:h-[480px] rounded-full border border-brand-yellow/10" />
            <div className="absolute w-60 h-60 lg:w-96 lg:h-96 rounded-full border border-brand-yellow/15" />

            {/* Floating accent dots */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 w-4 h-4 rounded-full bg-brand-yellow animate-ping-slow" />
            <div className="absolute bottom-12 left-8 w-3 h-3 rounded-full bg-brand-yellow/50" />
            <div className="absolute top-1/2 left-4 w-2 h-2 rounded-full bg-brand-yellow/30" />

            {/* Main product image */}
            <div className="relative animate-float z-10">
              <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-3xl scale-75" />
              <img
                src="/imagens/swappy-20260327_114625.png"
                alt="Armação Cat Eye — Ótica Pague Menos"
                className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Product badge */}
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-brand-gray/90 backdrop-blur-sm border border-brand-yellow/20 rounded-2xl px-4 py-3 text-left">
              <p className="text-brand-yellow text-xs font-semibold">Novo Lançamento</p>
              <p className="text-white text-sm font-bold mt-0.5">Cat Eye Elegance</p>
              <p className="text-white/50 text-xs">A partir de R$ 249,90</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Role</span>
        <ChevronDown size={18} />
      </div>
    </section>
  )
}
