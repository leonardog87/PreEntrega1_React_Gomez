import './Link.scss'

const Link = ({ clss, link,  text }) => {
    return (
        <>
            <li><a className={clss} href={link}>{text}</a></li>
        </>
    )
}

export default Link