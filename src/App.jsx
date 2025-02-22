import './App.scss'
import Announcement from './components/announcement/Announcement'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import CarouselProducts from './components/carouselProducts/CarouselProducts'
import { CartProvider } from './context/cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailContainer from './components/productDetailContainer/ProductDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Cart />
          <Announcement />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<><Banner /><CarouselProducts /></>} />
            <Route
              path="/ProductDetailContainer/*"
              element={<><ProductDetailContainer /></>} />
          </Routes>
        </CartProvider>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
