import './Navbar.scss'
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
import IconLogin from '../iconLogin/IconLogin'
import IconCart from '../iconCart/IconCart'
import LinksGroup from '../linksGroup/LinksGroup'
import CountProducts from '../countProducts/CountProducts'

const Navbar = () => {

  const showCart = () => {
    cartContainer.style.display = 'block';
  }

  return (
    <>
      <nav>
        <Logo />
        <LinksGroup />
        <div className="nav-menu">
          <div className="nav-menu-icons">
            <SearchBar />
            <div className="nav-icons">
              <IconLogin />
              <IconCart event={showCart}>
                <CountProducts />
              </IconCart>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
