import './Navbar.scss'
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
import IconUser from '../iconUser/IconUser'
import IconCart from '../iconCart/IconCart'
import LinksGroup from '../linksGroup/LinksGroup'
import CountProducts from '../countProducts/CountProducts'
import { useCart } from '../../hooks/useCart'
import Link from '../link/Link'

const Navbar = () => {

  const { countItemsInCart, showCart } = useCart()

  // const showCart = () => {
  //   cartContainer.style.display = 'block';
  // }

  return (
    <>
      <nav>
        <Logo />
        <LinksGroup >
          <Link clss="link-border-bottom" text="Calzado" />
          <Link clss="link-border-bottom" text="Hombre" />
          <Link clss="link-border-bottom" text="Mujer" />
          <Link clss="link-border-bottom" text="Accesorios" />
        </LinksGroup>
        <div className="nav-menu">
          <div className="nav-menu-icons">
            <SearchBar />
            <div className="nav-icons">
              <IconUser />
              <IconCart event={showCart}>
                <CountProducts quantityProducts={countItemsInCart()} />
              </IconCart>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
