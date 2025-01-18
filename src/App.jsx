import './App.scss'
import Announcement from './components/announcement/Announcement'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import CarouselProducts from './components/carouselProducts/CarouselProducts'
import { CartProvider } from './context/cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/productDetail/ProductDetail'
import ProductCard from './components/productCard/ProductCard'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider />
        <Announcement />
        <Navbar >
          <Cart />
        </Navbar>
        <Routes>
          <Route path="/" element={<CartProvider><Banner /><CarouselProducts /></CartProvider>} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/ProductCard" element={<ProductCard />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>

      {/* <CartProvider>
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
      </CartProvider> */}
    </>
  )
}

export default App
