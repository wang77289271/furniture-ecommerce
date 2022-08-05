import React from 'react'
import Product from './Product'
import './Products.css'

const Products = ({ products, onAddToCart }) => {
  return (
    <main id="products">
      <div className="product_grid">
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
