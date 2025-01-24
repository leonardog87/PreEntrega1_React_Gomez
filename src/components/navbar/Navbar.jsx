import './Navbar.scss'
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
import IconUser from '../iconUser/IconUser'
import IconCart from '../iconCart/IconCart'
import CountProducts from '../countProducts/CountProducts'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { countItemsInCart, showCart } = useCart()

  const cartContainer = document.querySelector('.cart-container');
  
  return (
    <>
      <nav>
        <Logo />
        <div className="nav-links">
          <ul>
            <li><Link className="link-border-bottom">Calzado</Link></li>
            <li><Link className="link-border-bottom">Hombre</Link></li>
            <li><Link className="link-border-bottom">Mujer</Link></li>
            <li><Link className="link-border-bottom">Accesorios</Link></li>
          </ul>
        </div>
        <div className="nav-menu">
          <div className="nav-menu-icons">
            <SearchBar />
            <div className="nav-icons">
              <IconUser />
              {/* <IconCart > */}
              <IconCart event={showCart}>
                {/* <CountProducts /> */}
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
