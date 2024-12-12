import './LinksGroup.scss'
import Link from '../link/Link'

const LinksGroup = () => {

    return (
        <>
            <div className="links-group">
                <ul>
                    <li><Link text="Calzado" /></li>
                    <li><Link text="Hombre" /></li>
                    <li><Link text="Mujer" /></li>
                    <li><Link text="Accesorios" /></li>
                </ul>
            </div>
        </>
    )
}

export default LinksGroup