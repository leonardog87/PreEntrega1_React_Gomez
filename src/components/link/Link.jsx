import './Link.scss'

<<<<<<< HEAD
const Link = ({ clss, link,  text }) => {
    return (
        <>
            <li><a className={clss} href={link}>{text}</a></li>
=======
const Link = ({ text }) => {
    return (
        <>
            <a className="link-border-bottom" href="#!">{text}</a>
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
        </>
    )
}

export default Link