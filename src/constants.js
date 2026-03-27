// ⚠️ Substitua pelo número real de WhatsApp (somente números, com DDI)
export const WHATSAPP_NUMBER = '5571996860176'
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site e gostaria de saber mais sobre os produtos da Ótica Pague Menos. 😊'
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const STORE_INFO = {
  name: 'Ótica Pague Menos',
  tagline: 'Veja o mundo da melhor forma',
  // ⚠️ Substitua pelas informações reais
  address: 'Shopping Piedade, Loja 45',
  street: 'Rua Junqueira Ayres, 165',
  neighborhood: 'Piedade, Salvador — BA',
  cep: 'CEP: 40415-000',
  phone: '(71) 9 9686-0176',
  email: 'contato@oticapaguemenos.com.br',
  instagram: 'https://www.instagram.com/oticapaguemenos.oficial/',
  hours: [
    { days: 'Segunda a Sábado', time: '9h às 20h' },
  ],
  mapsEmbed: 'https://maps.google.com/maps?q=Rua+Junqueira+Ayres+165+Piedade+Salvador+Bahia&t=m&z=17&output=embed&iwloc=near',
  mapsLink: 'https://maps.google.com/maps?q=Rua+Junqueira+Ayres+165+Piedade+Salvador+Bahia',
}

export const BRANDS = [
  "V'Gaspari", 'Eagle', 'Fênix', 'Ray-Ban',
  'Tommy Hilfiger', 'Pierre Cardin', 'Polaroid', 'Carrera',
]

export const PRODUCTS = [
  {
    id: 1,
    name: 'Cat Eye Elegance',
    category: 'Feminino',
    description: 'Design contemporâneo com toque clássico',
    price: null,
    image: '/imagens/swappy-20260327_114625.png',
    tag: 'Destaque',
    tagColor: 'brand-yellow',
  },
  {
    id: 2,
    name: 'Browline Dourado Premium',
    category: 'Unissex',
    description: 'Elegância e sofisticação em detalhes dourados',
    price: null,
    image: '/imagens/swappy-20260327_114446.png',
    tag: 'Novo',
    tagColor: 'green-500',
  },
  {
    id: 3,
    name: 'Retangular Sport Edition',
    category: 'Masculino',
    description: 'Estilo moderno para o dia a dia',
    price: null,
    image: '/imagens/swappy-20260327_114555.png',
    tag: null,
    tagColor: null,
  },
  {
    id: 4,
    name: 'Classic Square Collection',
    category: 'Unissex',
    description: 'Clássico e atemporal para todas as ocasiões',
    price: null,
    image: '/imagens/swappy-20260327_114603.png',
    tag: 'Promoção',
    tagColor: 'red-500',
  },
  {
    id: 5,
    name: 'Grande Frame Contemporâneo',
    category: 'Feminino',
    description: 'Armação oversized de alto impacto',
    price: null,
    image: '/imagens/swappy-20260327_114434.png',
    tag: null,
    tagColor: null,
  },
]
