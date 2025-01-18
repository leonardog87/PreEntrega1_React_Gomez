import './Footer.scss'
<<<<<<< HEAD
import LinksGroup from '../linksGroup/LinksGroup'
import Link from '../link/Link'
=======
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838

const Footer = () => {

    return (
        <>
            <div className="footer-politics">
                <ul>
<<<<<<< HEAD
                    <Link text="Sobre Nosotros" />
                    <Link text="Términos y Condiciones" />
                    <Link text="Políticas de Privacidad" />
                    <Link text="Reclamos" />
=======
                    <li><a href="#!">Sobre nosotros</a></li>
                    <li><a href="#!">Términos y condiciones</a></li>
                    <li><a href="#!">Políticas de privacidad</a></li>
                    <li><a href="#!">Reclamos</a></li>
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
                </ul>
            </div>
            <div className="footer-rights">
                <p>© 2024 SNEAKERS Online Argentina</p>
            </div>
        </>
    )
}

export default Footer