import { useEffect, useState } from "react"
import cvUrl from "/cv.json?url";
import { RootObject } from "../types"

import Header from "../sections/Header/Header";
import Welcome from "../sections/Welcome/Welcome";
import Experience from "../sections/Experience/Experience";
import SectionContainer from "../components/SectionContainer";
import BriefCase from "../icons/BriefCase";

export default function Home() {

    const [data, setData] = useState<RootObject | null>(null);

    useEffect(() => {
        fetch(cvUrl)
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error fetching the JSON data:", error));
    }, []);

    return (
        <>
            <Header />
            <Welcome data={data} />

            <SectionContainer id="experience">
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    Experiencia Laboral
                    <BriefCase />
                </h2>

                <Experience />
            </SectionContainer>
        </>
    )
}