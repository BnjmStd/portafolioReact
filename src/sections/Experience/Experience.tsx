import ExperienceItem from "../../components/ExperienceItem"

const EXPERIENCE = [
    {
        date: "2024",
        title: "Tesista en MathBioLab",
        company: "Twitch",
        description:
            "",
        link: " ",
    },
    {
        date: "Septiembre 2022",
        title: "Ing. Civil en Bioinformática",
        company: " ",
        description:
            " ",
    },
]

export default function Experience() {
    return (
        <ol className="relative mt-16">
            {
                EXPERIENCE.map((experience) => (
                    <li className="">
                        <ExperienceItem experience={experience} />
                    </li>
                ))
            }
        </ol>
    )
}
