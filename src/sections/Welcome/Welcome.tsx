import Badget from "../../components/Badget"
import SectionContainer from "../../components/SectionContainer"
import Github from "../../icons/Github"
import { LinkedIn } from "../../icons/Linkedln"
import Mail from "../../icons/Mail"
import { RootObject } from "../../types"
import "./welcome.css"
export default function Welcome({
    data
}: {
    data: RootObject | null
}) {

    console.log(data)

    return (
        <main>
            <SectionContainer style={{ marginTop: '8rem', marginBottom: '5rem'}}>
            
            <img className="header__img" src="/yo.png" alt="photo profile google" />
                <h1 className="main-heading">
                    Hola, soy Benjamín
                    <div className="badge-container">
                        <Badget>Disponible para trabajar</Badget>
                    </div>
                </h1>
                <h2 className="sub-heading">
                    <span className="experience">+1 año de experiencia </span>
                    <span className="description">
                        Ingeniero Civil en Bioinformática, especializado en Desarrollo
                        de Software y Administración de Sistemas
                    </span>
                    <span className="location"> De Maule, Chile 🆑❣️</span>
                    <span className="learning">Ansioso por seguir aprendiendo desarrollo web</span>
                </h2>

                <nav className="container__social">

                    <a className="custom-link"
                        href="https://www.linkedin.com/in/bnjmnaa/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <LinkedIn />
                        LinkedIn
                    </a>

                    <a className="custom-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/bnjmnaa/">
                        <Github />
                        GitHub
                    </a>

                    <a className="custom-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="">
                        <Mail />
                        Benja_e_e@hotmail.com
                    </a>

                </nav>
            </SectionContainer>
        </main>
    )
}