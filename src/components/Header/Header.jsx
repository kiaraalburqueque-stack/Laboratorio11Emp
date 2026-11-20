import './Header.css'

const NAV_LINKS = [
  { label: 'Cartelera', href: '#billboard' },
  { label: 'Estrenos', href: '#featured' },
  { label: 'Contacto', href: '#contact' },
]

// Top bar with the cinema name and the main navigation.
function Header({ cinemaName }) {
  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#" className="header__brand">
          <span className="header__logo" aria-hidden="true">🎬</span>
          {cinemaName}
        </a>
        <nav aria-label="Navegación principal">
          <ul className="header__nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
