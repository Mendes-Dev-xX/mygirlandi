import { useMemo, useState } from 'react'
import MainMenu from '../components/MainMenu/MainMenu'

type Gift = { id: number; name: string; category: string; price: number; description: string; image: string; icon: string; tag?: string }

const gifts: Gift[] = [
  { id: 1, name: 'Geladeira Frost Free', category: 'Cozinha', price: 3299, description: 'Para guardar as compras da semana e deixar a cozinha completa. Modelo inox, espaçoso e econômico.', image: 'photo-1571175443880-49e1d25b2bc5', icon: '❄️', tag: 'Mais desejado' },
  { id: 2, name: 'Máquina de lavar', category: 'Lavanderia', price: 2199, description: 'Uma ajudinha e tanto na rotina da casa. Capacidade ideal para as roupas do dia a dia.', image: 'photo-1626806787461-102c1bfaaea1', icon: '🫧' },
  { id: 3, name: 'Sofá para dois', category: 'Sala', price: 1899, description: 'O cantinho perfeito para maratonar séries, receber amigos e descansar juntinhos.', image: 'photo-1555041469-a586c61ea9bc', icon: '🛋️', tag: 'Queridinho' },
  { id: 4, name: 'Cama + colchão', category: 'Quarto', price: 2490, description: 'Para começar cada dia com uma boa noite de sono. Conforto para muitas histórias.', image: 'photo-1505693416388-ac5ce068fe85', icon: '🛏️' },
  { id: 5, name: 'Fogão 5 bocas', category: 'Cozinha', price: 1499, description: 'Para preparar aquele almoço de domingo e muitas receitas novas na nossa cozinha.', image: 'photo-1556911220-bff31c812dba', icon: '🍳' },
  { id: 6, name: 'Jogo de panelas', category: 'Cozinha', price: 489, description: 'O começo de uma coleção de receitas feitas com carinho na nossa casa nova.', image: 'photo-1584990347449-a9eab2f1a2a4', icon: '🥘' },
  { id: 7, name: 'Mesa de jantar', category: 'Sala', price: 1190, description: 'Um lugar para dividir refeições, conversas longas e momentos especiais.', image: 'photo-1617806118233-18e1de247200', icon: '🍽️' },
  { id: 8, name: 'Jogo de cama', category: 'Quarto', price: 299, description: 'Lençóis macios para deixar nosso cantinho ainda mais gostoso e acolhedor.', image: 'photo-1631049307264-da0ec9d70304', icon: '🌙' },
  { id: 9, name: 'Liquidificador', category: 'Cozinha', price: 229, description: 'Para sucos, vitaminas e experiências culinárias que talvez deem certo 😄', image: 'photo-1570222094114-d054a817e56b', icon: '🥤' },
  { id: 10, name: 'Kit de toalhas', category: 'Banheiro', price: 179, description: 'Um toque macio para a rotina e para deixar o banheiro com cara de casa.', image: 'photo-1600369671236-e74521d4b6ad', icon: '🧺' },
  { id: 12, name: 'Aspirador de pó', category: 'Casa', price: 399, description: 'Para deixar tudo em ordem e sobrar mais tempo para curtir a casa.', image: 'photo-1558317374-067fb5f30001', icon: '✨' },
]
const categories = ['Todos', 'Cozinha', 'Sala', 'Quarto', 'Lavanderia', 'Banheiro', 'Casa']
const money = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

export default function Home() {
  const [category, setCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Gift | null>(null)
  const [pixCopied, setPixCopied] = useState(false)
  const visible = useMemo(() => gifts.filter(g => (category === 'Todos' || g.category === category) && g.name.toLowerCase().includes(search.toLowerCase())), [category, search])

  const closeModal = () => { setSelected(null); setPixCopied(false) }
  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText('15918702679')
      setPixCopied(true)
      window.setTimeout(() => setPixCopied(false), 2200)
    } catch {
      setPixCopied(false)
    }
  }
  return <div className="site-shell">
    <MainMenu />
    <main>
      <section className="hero" id="inicio">
        <div className="hero-image" />
        <div className="hero-content">
          <span className="eyebrow"><span className="tiny-heart">♥</span> NOSSA CASA, NOSSO COMEÇO</span>
          <h1>Um novo capítulo<br />começa <em>em casa.</em></h1>
          <p>Estamos construindo nosso cantinho e queremos dividir esse momento tão especial com você.</p>
          <a className="primary-button" href="#lista">Escolher um presente <span>↗</span></a>
          <div className="hero-note"><span>♡</span> Sua presença já é o nosso maior presente</div>
        </div>
        <div className="hero-stamp"><span>FEITO COM</span><b>♥</b><span>AMOR</span></div>
        <div className="hero-caption">I & H <span>·</span> NOSSO LAR, 2025</div>
      </section>

      <section className="intro-section" id="sobre">
        <span className="eyebrow">COM CARINHO, IAN & HELOÍSA</span>
        <h2>Mais do que presentes,<br /><em>memórias para nossa casa.</em></h2>
        <p>Escolhemos com cuidado alguns itens que vão fazer parte do nosso dia a dia. Cada contribuição, do tamanho que for, vai ajudar a transformar esse sonho em lar.</p>
        <span className="divider-heart">♡</span>
      </section>

      <section className="list-section" id="lista">
        <div className="section-heading"><div><span className="eyebrow">UM PEDACINHO DO NOSSO LAR</span><h2>Lista de presentes</h2><p>Escolha algo que tenha a nossa cara.</p></div><span className="item-count">{gifts.length} ideias para presentear <span>↘</span></span></div>
        <div className="filters"><div className="category-tabs">{categories.map(c => <button key={c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="search-box"><span>⌕</span><input aria-label="Buscar presente" placeholder="Buscar presente" value={search} onChange={e => setSearch(e.target.value)} /></label></div>
        <div className="gift-grid">{visible.map((gift, index) => <button className="gift-card" key={gift.id} onClick={() => setSelected(gift)}>
          <div className="gift-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${gift.image}?auto=format&fit=crop&w=900&q=85)` }}><span className="gift-number">{String(index + 1).padStart(2, '0')}</span>{gift.tag && <span className="gift-tag">♡ {gift.tag}</span>}<span className="gift-arrow">↗</span></div>
          <div className="gift-info"><div><span className="gift-category">{gift.category}</span><h3>{gift.name}</h3></div><span className="gift-icon">{gift.icon}</span></div>
          <div className="gift-bottom"><span>{money(gift.price)}</span><span className="gift-action">Presentear <b>→</b></span></div>
        </button>)}</div>
        {visible.length === 0 && <div className="empty-state">Não encontramos esse presente. Tente outra busca. ♡</div>}
        <div className="list-footnote">♡ &nbsp;Os valores são apenas uma referência. Toda contribuição será recebida com muito carinho.</div>
      </section>

      <section className="pix-banner" id="pix"><div className="pix-heart">♡</div><div><span className="eyebrow">PRESENTE DO SEU JEITO</span><h2>Prefere contribuir<br />com qualquer valor?</h2><p>Todo gesto de carinho ajuda a construir o nosso cantinho.</p></div><button className="outline-button" onClick={() => setSelected({ ...gifts[0], name: 'Contribuição livre', price: 0, description: 'Contribua com o valor que fizer sentido para você. Seu carinho vai ajudar a montar nosso novo lar!' })}>Contribuir via Pix <span>↗</span></button><span className="pix-flower">✳</span></section>
      <section className="thanks-section"><span className="eyebrow">JÁ ESTAMOS ANSIOSOS</span><h2>Mal podemos esperar para<br /><em>receber você no nosso lar.</em></h2><span className="thanks-signature">Com amor, Ian & Heloísa <span>♡</span></span></section>
    </main>
    <footer><a href="#inicio" className="footer-brand">I<span>&</span>H</a><span>FEITO COM AMOR, PARA O NOSSO NOVO LAR</span><a href="#inicio">VOLTAR AO TOPO ↑</a></footer>
    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) closeModal() }}><section className="gift-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" aria-label="Fechar" onClick={closeModal}>×</button><div className="modal-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${selected.image}?auto=format&fit=crop&w=1000&q=85)` }}><span>{selected.category}</span></div><div className="modal-content"><span className="eyebrow">UM PRESENTE PARA O NOSSO LAR</span><h2 id="modal-title">{selected.name}</h2>{selected.price > 0 && <div className="modal-price">{money(selected.price)} <small>valor sugerido</small></div>}<p>{selected.description}</p><div className="modal-divider"/><div className="pix-payment"><img className="pix-qr" src="/qrcode.jpeg" alt="QR code Pix para presentear Ian e Heloísa"/><div><b>Mercado Pago</b><strong>João Vitor Mendes</strong><span>Escaneie o QR code com o app do seu banco.</span></div></div><div className="pix-key"><div><span>CHAVE PIX · CPF</span><b>159.187.026-79</b></div><button type="button" onClick={copyPixKey}>{pixCopied ? 'Copiada ✓' : 'Copiar chave'}</button></div><small className="modal-thanks">Obrigada por fazer parte desse começo. ♡</small></div></section></div>}
  </div>
}
