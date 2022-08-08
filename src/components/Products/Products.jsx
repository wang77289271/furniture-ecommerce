import React from 'react'
import Header from './Header/Header'
import Intro from './Intro/Intro'
import Product from './Product'
import './Products.css'

const Products = ({ products, onAddToCart, banner }) => {
  return (
    <main id="products">
      <div className="product_header">
        <Header banner={banner} />
      </div>
      <div className="product_intro">
        <Intro banner={banner} />
      </div>
      <div className="product_grid" id="product_grid">
        {products.map((product) => (
          <div className="product_item" key={product.id}>
            <Product product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Products
