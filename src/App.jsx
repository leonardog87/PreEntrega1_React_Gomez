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
import ProductListContainer from './components/productsListContainer/ProductListContainer'
import ProductListMen from './components/productsMen/ProductListMen'
import ProductListWomen from './components/productsWomen/ProductListWomen'
import { FilterProvider } from './context/filter'
import Filter from './components/filters/Filter'
import CartFinal from './components/cartFinal/CartFinal'
import { SearchProvider } from './context/search'

function App() {

  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <CartProvider>
            <FilterProvider>
              <Cart />
              <Filter />
              <Announcement />
              <Navbar />
              <Routes>
                <Route
                  path="/CartFinal/"
                  element={<><CartFinal /></>} />

                <Route
                  path="/ProductListContainer/"
                  element={<><ProductListContainer /></>} />

                <Route
                  path="/ProductListMen/"
                  element={<><ProductListMen /></>} />

                <Route
                  path="/ProductListWomen/"
                  element={<><ProductListWomen /></>} />

                <Route
                  path="/"
                  element={<><Banner /><CarouselProducts /></>} />

                <Route
                  path="/ProductDetailContainer/*"
                  element={<><ProductDetailContainer /></>} />
              </Routes>
            </FilterProvider>
          </CartProvider>
        </SearchProvider>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
