
import "./sectionContainer.css"

export default function SectionContainer({
    children,
    style,
    id
}: {
    children: React.ReactNode
    style?: React.CSSProperties
    id?: string
}) {
    return (
        <section id={id} className={`main-section`} style={style}>
            {children}
        </section>
    )
}
