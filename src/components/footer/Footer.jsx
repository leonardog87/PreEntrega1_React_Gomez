import './Footer.scss'
import LinksGroup from '../linksGroup/LinksGroup'
import Link from '../link/Link'

const Footer = () => {

    return (
        <>
            <div className="footer-politics">
                <ul>
                    <Link text="Sobre Nosotros" />
                    <Link text="Términos y Condiciones" />
                    <Link text="Políticas de Privacidad" />
                    <Link text="Reclamos" />
                </ul>
            </div>
            <div className="footer-rights">
                <p>© 2024 SNEAKERS Online Argentina</p>
            </div>
        </>
    )
}

export default Footer