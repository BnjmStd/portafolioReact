import { useEffect } from 'react';
import './header.css';

const navItems = [
    { title: "Experiencia", label: "experiencia", url: "#experiencia" },
    { title: "Proyectos", label: "proyectos", url: "#proyectos" },
    { title: "Sobre mí", label: "sobre-mi", url: "#sobre-mi" },
    { title: "Contacto", label: "contacto", url: "mailto:miduga@gmail.com" },
];

const Header = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        if (link.getAttribute('aria-label') === entry.target.id) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="header">
            <nav className="nave" id='landing-header'>
                {navItems.map((link) => (
                    <a key={link.label} aria-label={link.label} href={link.url} className="nav-link">
                        {link.title}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;