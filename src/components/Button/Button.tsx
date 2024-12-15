import "./Button.scss"

interface Props {
    title: string;
    href: string;
}

function Button({title , href}: Props) {
    return (
        <a href={href} target="_blank">
            <article>
                <h2>{title}</h2>
            </article>
        </a>
    )
}

export default Button