import './App.scss'
import Announcement from './components/announcement/Announcement'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import CarouselProducts from './components/carouselProducts/CarouselProducts'
import { CartProvider } from './context/cart'

function App() {

  return (
    <>

    <CartProvider>

      <Cart />
      <header>
        <Announcement />
        <Navbar />
      </header>

      <main className="core-container">
        <Banner />
        <CarouselProducts />
      </main>

      <footer>
        <Footer />
      </footer>

      </CartProvider>

    </>
  )
}

export default App
