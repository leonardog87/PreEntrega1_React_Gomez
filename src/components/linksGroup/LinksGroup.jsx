import './LinksGroup.scss'
import Link from '../link/Link'

<<<<<<< HEAD
const LinksGroup = ({ children }) => {
=======
const LinksGroup = () => {
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838

    return (
        <>
            <div className="links-group">
                <ul>
<<<<<<< HEAD
                    {children}
=======
                    <li><Link text="Calzado" /></li>
                    <li><Link text="Hombre" /></li>
                    <li><Link text="Mujer" /></li>
                    <li><Link text="Accesorios" /></li>
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
                </ul>
            </div>
        </>
    )
}

export default LinksGroup