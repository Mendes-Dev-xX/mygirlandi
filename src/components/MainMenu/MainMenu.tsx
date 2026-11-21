import { useState } from 'react'

export default function MainMenu() {
  const [open, setOpen] = useState(false)
  return <header className="main-header"><a className="brand-mark" href="#inicio" aria-label="João e Eliza, início">J<span>&</span>E<small>CASA NOVA</small></a><button className="menu-toggle" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button><nav className={open ? 'nav-links nav-open' : 'nav-links'}><a href="#inicio" onClick={() => setOpen(false)}>Início</a><a href="#sobre" onClick={() => setOpen(false)}>Nossa história</a><a href="#lista" onClick={() => setOpen(false)}>Presentes</a><a className="nav-pix" href="#pix" onClick={() => setOpen(false)}>Contribuir <span>↗</span></a></nav></header>
}
