import './Link.scss'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
const Link = ({ clss, link,  text }) => {
    return (
        <>
            <li><a className={clss} href={link}>{text}</a></li>
<<<<<<< HEAD
=======
=======
const Link = ({ text }) => {
    return (
        <>
            <a className="link-border-bottom" href="#!">{text}</a>
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
        </>
    )
}

export default Link