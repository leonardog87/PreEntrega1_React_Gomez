import './App.scss'
import Announcement from './components/announcement/Announcement'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import CarouselProducts from './components/carouselProducts/CarouselProducts'
<<<<<<< HEAD
import { CartProvider } from './context/cart'
=======
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838

function App() {

  return (
    <>
<<<<<<< HEAD
    <CartProvider>
=======
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
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
<<<<<<< HEAD
      </CartProvider>
=======
>>>>>>> f1bfd095ceb97ce2bbffddaffb70b2144fdd6838
    </>
  )
}

export default App
