import { WHATSAPP_LINK } from '../constants'

export default function PriceBar() {
  return (
    <div className="bg-brand-yellow py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-brand-black text-sm font-semibold text-center">
        <span className="text-base font-bold whitespace-nowrap">
          🏷️ Oferta Especial: Óculos Completos!
        </span>

        <span className="hidden sm:block text-brand-black/40">|</span>

        <span className="whitespace-nowrap">
          Armação + Lente Monofocal{' '}
          <span className="font-black text-base">a partir de R$ 299</span>
        </span>

        <span className="hidden sm:block text-brand-black/40">|</span>

        <span className="whitespace-nowrap">
          Multifocal{' '}
          <span className="font-black text-base">a partir de R$ 399</span>
        </span>

        <span className="hidden sm:block text-brand-black/40">|</span>

        <span className="whitespace-nowrap">💳 Parcelamos em até 6x sem juros</span>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          Agende sua avaliação visual gratuita agora mesmo! *
        </a>
      </div>
    </div>
  )
}
