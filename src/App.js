import { useEffect, useState } from 'react'
import Cart from './components/Cart/Cart'
import Nav from './components/Navbar/Nav'
import Products from './components/Products/Products'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct/SingleProduct'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [banner, setBanner] = useState({})
  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }
  const fetchBanner = async () => {
    const banner = await commerce.categories.list()
    setBanner(banner)
  }
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item)
  }
  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity })
    setCart(cart)
  }
  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId)
    setCart(cart)
  }
  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty()
    setCart(cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
    fetchBanner()
  }, [])

  return (
    <div>
      <Router>
        <Nav totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                products={products}
                banner={banner}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct
                products={products}
                onAddToCart={handleAddToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
