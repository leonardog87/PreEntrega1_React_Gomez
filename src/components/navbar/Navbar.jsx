import './Navbar.scss'
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
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
<<<<<<< HEAD
=======
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
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df

  return (
    <>
      <nav>
        <Logo />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
        <LinksGroup >
          <Link clss="link-border-bottom" text="Calzado" />
          <Link clss="link-border-bottom" text="Hombre" />
          <Link clss="link-border-bottom" text="Mujer" />
          <Link clss="link-border-bottom" text="Accesorios" />
        </LinksGroup>
<<<<<<< HEAD
=======
=======
        <LinksGroup />
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
        <div className="nav-menu">
          <div className="nav-menu-icons">
            <SearchBar />
            <div className="nav-icons">
<<<<<<< HEAD
              <IconUser />
              <IconCart event={showCart}>
                <CountProducts quantityProducts={countItemsInCart()} />
=======
<<<<<<< HEAD
              <IconUser />
              <IconCart event={showCart}>
                <CountProducts quantityProducts={countItemsInCart()} />
=======
              <IconLogin />
              <IconCart event={showCart}>
                <CountProducts />
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
>>>>>>> 0a3168d9d118d561448b3c2ee617d90fe8cf69df
              </IconCart>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
