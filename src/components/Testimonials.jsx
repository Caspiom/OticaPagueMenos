import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Paula Santos',
    role: 'Cliente há 3 anos',
    rating: 5,
    text: 'Atendimento maravilhoso! Me ajudaram a escolher o óculos perfeito para o meu rosto. O exame foi rápido e gratuito, e os óculos ficaram prontos no mesmo dia. Recomendo demais!',
    avatar: 'A',
  },
  {
    name: 'Carlos Mendes',
    role: 'Cliente verificado',
    rating: 5,
    text: 'Fui à Ótica Pague Menos indicado por um amigo e não me arrependi. Preço justo, muita variedade de marcas e a equipe é muito atenciosa. Já sou cliente fiel há mais de 2 anos.',
    avatar: 'C',
  },
  {
    name: 'Fernanda Lima',
    role: 'Cliente verificada',
    rating: 5,
    text: 'Comprei um óculos solar Ray-Ban e fiquei encantada com o preço e a qualidade do atendimento. A loja tem um ambiente super agradável e os funcionários conhecem muito bem os produtos.',
    avatar: 'F',
  },
  {
    name: 'Roberto Oliveira',
    role: 'Cliente há 5 anos',
    rating: 5,
    text: 'Já comprei várias armações aqui e sempre saio satisfeito. O serviço de ajuste é excelente e sempre que precisei de assistência técnica fui atendido rapidamente. Nota 10!',
    avatar: 'R',
  },
  {
    name: 'Mariana Costa',
    role: 'Cliente verificada',
    rating: 5,
    text: 'Adorei o atendimento personalizado! A consultora ficou mais de 30 minutos me ajudando a escolher a armação ideal para o meu rosto. Lugar para ter como referência em Salvador.',
    avatar: 'M',
  },
  {
    name: 'Lucas Ferreira',
    role: 'Cliente verificado',
    rating: 5,
    text: 'Melhor ótica do Shopping Piedade sem dúvidas. Preços competitivos, variedade de marcas e atendimento humano e diferenciado. Minha família toda compra aqui!',
    avatar: 'L',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-brand-yellow fill-brand-yellow' : 'text-white/20'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Depoimentos</p>
          <h2 className="section-title mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            A satisfação dos nossos clientes é o nosso maior reconhecimento. Veja o que eles
            falam sobre a nossa loja.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-brand-gray rounded-2xl p-7 border border-white/5 hover:border-brand-yellow/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-brand-yellow" />
              </div>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-white/65 text-sm leading-relaxed mt-4 mb-6 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-bold text-brand-black text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                    ✓ Verificado
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-14 flex flex-wrap justify-center gap-12">
          {[
            { value: '4.9/5', label: 'Avaliação Média' },
            { value: '500+', label: 'Avaliações Positivas' },
            { value: '98%', label: 'Clientes Satisfeitos' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-4xl font-bold text-brand-yellow">{item.value}</p>
              <p className="text-white/50 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
