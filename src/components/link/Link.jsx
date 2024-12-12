import './Link.scss'

const Link = ({ text }) => {
    return (
        <>
            <a className="link-border-bottom" href="#!">{text}</a>
        </>
    )
}

export default Link