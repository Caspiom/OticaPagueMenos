import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../constants'

const navLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Sobre Nós', href: '/#sobre' },
  { label: 'Localização', href: '/#localizacao' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const isCatalog = pathname === '/catalogo'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isCatalog
          ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/imagens/logo-pague-menos.png"
              alt="Ótica Pague Menos"
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-brand-yellow transition-colors duration-200 text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Link
              to="/catalogo"
              className={`text-sm font-medium tracking-wide relative group transition-colors duration-200 ${
                isCatalog ? 'text-brand-yellow' : 'text-white/70 hover:text-brand-yellow'
              }`}
            >
              Catálogo
              <span
                className={`absolute -bottom-1 left-0 h-px bg-brand-yellow transition-all duration-300 ${
                  isCatalog ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              Fale Conosco
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 hover:text-brand-yellow transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-black/98 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-white/75 hover:text-brand-yellow transition-colors py-3 text-base font-medium border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/catalogo"
            onClick={handleLinkClick}
            className={`block py-3 text-base font-medium border-b border-white/5 transition-colors ${
              isCatalog ? 'text-brand-yellow' : 'text-white/75 hover:text-brand-yellow'
            }`}
          >
            Catálogo
          </Link>
          <div className="pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="btn-primary w-full justify-center"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
