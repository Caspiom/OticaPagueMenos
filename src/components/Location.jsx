import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react'
import { STORE_INFO, WHATSAPP_LINK } from '../constants'

export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Localização</p>
          <h2 className="section-title mb-4">Nos Encontre no Shopping Piedade</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Estamos localizados no Shopping Piedade, em Salvador/BA. Venha nos visitar e
            descobrir a melhor experiência em saúde visual da região.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 min-h-[400px] bg-brand-gray">
            <iframe
              src={STORE_INFO.mapsEmbed}
              title="Localização Ótica Pague Menos — Shopping Piedade Salvador BA"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <div className="bg-brand-gray rounded-2xl p-6 border border-white/5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center">
                <MapPin size={20} className="text-brand-yellow" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Endereço</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {STORE_INFO.address}
                  <br />
                  {STORE_INFO.street}
                  <br />
                  {STORE_INFO.neighborhood}
                  <br />
                  <span className="text-white/40 text-xs">{STORE_INFO.cep}</span>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-brand-gray rounded-2xl p-6 border border-white/5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center">
                <Clock size={20} className="text-brand-yellow" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-3">Horário de Funcionamento</p>
                <div className="space-y-1.5">
                  {STORE_INFO.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4">
                      <span className="text-white/50 text-xs">{h.days}</span>
                      <span className="text-brand-yellow text-xs font-semibold whitespace-nowrap">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-brand-gray rounded-2xl p-6 border border-white/5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center">
                <Phone size={20} className="text-brand-yellow" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Telefone</p>
                <p className="text-white/60 text-sm">{STORE_INFO.phone}</p>
                <p className="text-white/40 text-xs mt-0.5">{STORE_INFO.email}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mt-auto">
              <a
                href={STORE_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center"
              >
                <Navigation size={16} />
                Como Chegar
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
