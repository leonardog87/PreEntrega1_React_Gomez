import './Logo.scss'
import { Link } from 'react-router-dom'

const Logo = () => {

    const Imagelogo = ("../src/assets/icons/logo.png")

    return (
        <>
            <div className="nav-logo">
            <Link to="/"><img src={Imagelogo} alt="nav-logo" /></Link>
            </div>
        </>
    )
}

export default Logo