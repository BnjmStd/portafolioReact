import React from "react"
import Badget from "../../components/Badget"
import SectionContainer from "../../components/SectionContainer"
import Github from "../../icons/Github"
import { LinkedIn } from "../../icons/Linkedln"
import Mail from "../../icons/Mail"

import "./welcome.css"

export default function Welcome() {

    return (
        <main className='main__container'>
            <SectionContainer style={{ marginBottom: '3rem' }}>

                <Badget />

                <h1 className="main-heading">
                    Hola, soy Benjamín
                </h1>

                <h2 className="sub-heading">
                    <span className="experience"></span>
                    <span className="description">
                        Ingeniero Civil en Bioinformática, especializado en Desarrollo
                        de Software y Administración de Sistemas
                    </span>
                    <span className="location"> De Maule, Chile 🆑❣️</span>
                    <span className="learning">Ansioso por seguir aprendiendo desarrollo web</span>
                </h2>

                <nav className="container__social">

                    <CustomLink p="LinkedIn"
                        href="https://www.linkedin.com/in/bnjmnaa/">
                        <LinkedIn />
                    </CustomLink>

                    <CustomLink p="GitHub"
                        href="https://www.linkedin.com/in/bnjmnaa/">
                        <Github />
                    </CustomLink>

                    <CustomLink
                        p="Mail"
                        href="mailto:benja_e_e@hotmail.com">
                        <Mail />
                    </CustomLink>

                </nav>
            </SectionContainer>
        </main>
    )
}

const CustomLink = ({
    href,
    children,
    p
}: {
    href: string,
    children: React.ReactNode,
    p: string
}) => {
    return (
        <a
            className="custom-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
            {p}
        </a>
    );
};