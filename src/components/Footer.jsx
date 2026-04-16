import { MapPin, Clock, Phone, Mail, MessageCircle, Instagram } from 'lucide-react'
import { STORE_INFO, WHATSAPP_LINK } from '../constants'

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Localização', href: '#localizacao' },
]

const services = [
  'Óculos de Grau',
  'Óculos Solar',
  'Lentes de Contato',
  'Exame de Vista',
  'Montagem e Ajuste',
  'Assistência Técnica',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black border-t border-white/5">
      {/* Top CTA Bar */}
      <div className="bg-brand-yellow py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl font-bold text-brand-black">
              Pronto para ver o mundo da melhor forma?
            </p>
            <p className="text-brand-black/60 text-sm mt-1">
              Agende seu exame de vista gratuito ou visite nossa loja no Shopping Piedade.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-brand-black text-brand-yellow font-bold px-7 py-3.5 rounded-full hover:bg-brand-gray transition-colors flex items-center gap-2 text-sm"
          >
            <MessageCircle size={18} />
            Falar Agora
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1 space-y-6">
            <img
              src="/imagens/logo-pague-menos.png"
              alt="Ótica Pague Menos"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Veja o mundo da melhor forma. Óculos de grau, solares e lentes de contato com
              qualidade e preço justo no Shopping Piedade, Salvador/BA.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={STORE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-gray border border-white/5 flex items-center justify-center text-white/50 hover:text-brand-yellow hover:border-brand-yellow/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-gray border border-white/5 flex items-center justify-center text-white/50 hover:text-brand-yellow hover:border-brand-yellow/30 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-yellow transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-yellow/50 group-hover:bg-brand-yellow transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-yellow/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/50">
                <MapPin size={16} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address}, {STORE_INFO.street}
                  <br />
                  {STORE_INFO.neighborhood}
                </span>
              </li>
              <li className="flex gap-3 text-sm text-white/50">
                <Phone size={16} className="text-brand-yellow flex-shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/50">
                <Mail size={16} className="text-brand-yellow flex-shrink-0" />
                <span>{STORE_INFO.email}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/50">
                <Clock size={16} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {STORE_INFO.hours.map((h) => (
                    <p key={h.days}>
                      <span className="text-white/30">{h.days}:</span>{' '}
                      <span className="text-brand-yellow/80 font-medium">{h.time}</span>
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-xs">
          <p>© {year} Ótica Pague Menos. Todos os direitos reservados.</p>
          <p>
            Precisa de um site profissional para o seu negócio?{' '}
            <a
              href="https://lucasgasparidev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 transition-colors underline underline-offset-2"
            >
              Fale com a Gaspari Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
