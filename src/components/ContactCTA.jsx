import { MessageCircle, Instagram, ArrowRight } from 'lucide-react'
import { WHATSAPP_LINK, STORE_INFO } from '../constants'

export default function ContactCTA() {
  return (
    <section id="fale-conosco" className="relative py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-yellow/5 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Fale Conosco</p>
          <h2 className="section-title">
            Tire suas dúvidas <span className="gradient-text">agora mesmo</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto">
            Escolha o canal de sua preferência e fale diretamente com nossa equipe.
            Atendimento rápido e personalizado!
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* WhatsApp Card */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-brand-gray border-2 border-[#25D366]/30 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-[#25D366] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/10"
          >
            {/* Pulse ring behind icon */}
            <div className="relative mb-5">
              <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping-slow scale-150" />
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#25D366' }}>
                <MessageCircle size={36} className="text-white" />
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Resposta rápida! Mande sua mensagem e receba atendimento em minutos.
            </p>

            <span className="mt-auto inline-flex items-center gap-2 text-[#25D366] font-bold text-sm group-hover:gap-3 transition-all duration-300">
              Iniciar conversa
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          {/* Instagram Card */}
          <a
            href={STORE_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-brand-gray border-2 border-pink-500/30 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-pink-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/10"
          >
            {/* Pulse ring behind icon */}
            <div className="relative mb-5">
              <span className="absolute inset-0 rounded-full bg-pink-500/20 animate-ping-slow scale-150" />
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
                <Instagram size={36} className="text-white" />
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-2">Instagram</h3>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Siga-nos e confira as novidades, promoções e lançamentos em primeira mão!
            </p>

            <span className="mt-auto inline-flex items-center gap-2 text-pink-500 font-bold text-sm group-hover:gap-3 transition-all duration-300">
              Seguir no Instagram
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
