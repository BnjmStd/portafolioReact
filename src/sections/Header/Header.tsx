import "./header.css"

export default function Header() {
    return (
        <header className="header">

            <nav className="header__nav">
                <a href="#experience" className="header__item">
                    Experiencia
                </a>
                <a className="header__item">
                    Proyectos
                </a>
                <a className="header__item">
                    Sobre mí
                </a>
                <a className="header__item">
                    Contacto
                </a>
            </nav>

        </header>
    )
}
