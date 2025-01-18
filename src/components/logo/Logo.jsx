import './Logo.scss'
import { Link } from 'react-router-dom'

const Logo = () => {

    return (
        <>
            <div className="nav-logo">
            <Link to="/"><img src="./src/assets/icons/logo.png" alt="nav-logo" /></Link>
            </div>
        </>
    )
}

export default Logo