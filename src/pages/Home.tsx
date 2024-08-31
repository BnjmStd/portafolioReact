
import Headerx from "../sections/HeaderEx/Header";
import Welcome from "../sections/Welcome/Welcome";
import Experience from "../sections/Experience/Experience";
import SectionContainer from "../components/SectionContainer";
import BriefCase from "../icons/BriefCase";
import Footer from "../sections/Footer/Footer";

import { lazy, Suspense } from "react";
import Robot from "../icons/Robot";
import ToggleDarkMode from "../components/ToggleDarkMode";

const CarruselLow =  lazy(() => import("../components/Carrusel"))

export default function Home() {


    return (
        <>

            <ToggleDarkMode />

            <Headerx />

            <Welcome />


            <SectionContainer id="tecnologias" style={{
                paddingBottom: '2rem', paddingTop: '2rem'
            }}>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                }}>
                    <Robot />
                    Tecnologias
                </h2>
                <Suspense fallback="...">
                    <CarruselLow />
                </Suspense>
            </SectionContainer>

            <SectionContainer id="experiencia">
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                }}>
                    <BriefCase />
                    Experiencia Laboral
                </h2>

                <Experience />
            </SectionContainer>

            <Footer />
        </>
    )
}