import './Navbar.scss'
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
<<<<<<< HEAD
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
=======
import IconLogin from '../iconLogin/IconLogin'
import IconCart from '../iconCart/IconCart'
import LinksGroup from '../linksGroup/LinksGroup'
import CountProducts from '../countProducts/CountProducts'

const Navbar = () => {

  const showCart = () => {
    cartContainer.style.display = 'block';
  }
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838

  return (
    <>
      <nav>
        <Logo />
<<<<<<< HEAD
        <LinksGroup >
          <Link clss="link-border-bottom" text="Calzado" />
          <Link clss="link-border-bottom" text="Hombre" />
          <Link clss="link-border-bottom" text="Mujer" />
          <Link clss="link-border-bottom" text="Accesorios" />
        </LinksGroup>
=======
        <LinksGroup />
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
        <div className="nav-menu">
          <div className="nav-menu-icons">
            <SearchBar />
            <div className="nav-icons">
<<<<<<< HEAD
              <IconUser />
              <IconCart event={showCart}>
                <CountProducts quantityProducts={countItemsInCart()} />
=======
              <IconLogin />
              <IconCart event={showCart}>
                <CountProducts />
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
              </IconCart>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
