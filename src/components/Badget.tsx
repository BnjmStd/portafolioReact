import "./badget.css"

export default function Badget ({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="span">
            {children}
        </span>
    )
}