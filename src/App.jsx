import './App.scss'
import Announcement from './components/announcement/Announcement'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import CarouselProducts from './components/carouselProducts/CarouselProducts'
import { CartProvider } from './context/cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailEx from './components/productDetailEx/ProductDetailEx'
import ProductCard from './components/productCard/ProductCard'
import ProductDetailContainer from './components/productDetailContainer/ProductDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Announcement />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<><Banner /><CarouselProducts /></>} />
            <Route
              path="/ProductDetailEx"
              element={<ProductDetailEx />} />
            <Route
              path="/ProductCard"
              element={<><Banner /><CarouselProducts><ProductCard /></CarouselProducts></>} />

            <Route
              path="/ProductDatailContainer/"
              element={<><ProductDetailContainer /></>} />

          </Routes>
        </CartProvider>
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
