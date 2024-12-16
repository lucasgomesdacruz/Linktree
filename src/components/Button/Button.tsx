import "./Button.scss"

interface Props {
    title: string;
    href: string;
    icon: React.ReactNode;
}

function Button({title , href, icon}: Props) {
    return (
        <a href={href} target="_blank" aria-label={`Ir para site ${title}`}>
            <div>
                <h2>{title} {icon}</h2>
            </div>
        </a>
    )
}

export default Button