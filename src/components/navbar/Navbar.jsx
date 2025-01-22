import './Navbar.scss'
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
import IconUser from '../iconUser/IconUser'
import IconCart from '../iconCart/IconCart'
import CountProducts from '../countProducts/CountProducts'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'

const Navbar = () => {

  // const { countItemsInCart, showCart } = useCart()

  return (
    <>
      <nav>
        <Logo />
        <div className="nav-links">
          <ul>
            <Link to="/ProductDetailEx" className="link-border-bottom">Calzado</Link>
            <Link to="/ProductDetailEx" className="link-border-bottom">Hombre</Link>
            <Link to="/ProductDetailEx" className="link-border-bottom">Mujer</Link>
            <Link to="/ProductDetailEx" className="link-border-bottom">Accesorios</Link>
          </ul>
        </div>
        <div className="nav-menu">
          <div className="nav-menu-icons">
            <SearchBar />
            <div className="nav-icons">
              <IconUser />
              <IconCart >
                {/* <IconCart event={showCart}> */}
                <CountProducts />
                {/* <CountProducts quantityProducts={countItemsInCart()} /> */}
              </IconCart>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
