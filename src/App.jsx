import './App.scss'
import Announcement from './components/announcement/Announcement'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import CarouselProducts from './components/carouselProducts/CarouselProducts'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
