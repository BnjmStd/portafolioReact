import Arrow from "../icons/Arrow";
import "./experienceItem.css"

type Job = {
    date: string;
    title: string;
    company: string;
    description: string;
    link?: string; // `link` es opcional
};

export default function ExperienceItem({
    experience
}: {
    experience: Job
}) {
    return (


        <div className="experience-item">
            <div className="experience-item__details">
                <div className="experience-item__sticky">
                    <span className="experience-item__bullet">&bull;</span>

                    <h3 className="experience-item__title">{experience.title}</h3>
                    <h4 className="experience-item__company">{experience.company}</h4>
                    <time className="experience-item__date">{experience.date}</time>
                </div>
            </div>
            <div className="experience-item__description">
                {experience.description}
                {
                    experience.link && (
                        <a className="link" href={experience.link}>
                            Saber más{" "}
                            <Arrow />
                        </a>
                    )
                }
            </div>
        </div>
    );
}