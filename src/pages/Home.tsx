import { useEffect, useState } from "react"
import cvUrl from "/cv.json?url";
import { RootObject } from "../types"
import Headerx from "../sections/HeaderEx/Header";
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
            <Headerx />
            <Welcome data={data} />

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
        </>
    )
}