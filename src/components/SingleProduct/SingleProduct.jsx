import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProduct.css'

const SingleProduct = ({ products, onAddToCart }) => {
  const { id } = useParams()
  const [count, setCount] = useState(0)
  const product = products.filter((x) => x.id === id)
  if (!product) {
    return 'Loading...'
  }
  return (
    <>
      {product.length && (
        <div className="single_product_container">
          <div className="single_product">
            <div className="single_product_left">
              <div
                className="single_product_img"
                style={{ backgroundImage: `url(${product[0].image.url})` }}
              />
            </div>
            <div className="single_product_right">
              <div className="single_product_content">
                <h1>{product[0].name}</h1>
                <h2>$ {product[0].price.formatted_with_code}</h2>
                <h3>SKU: {product[0].sku} | yFurniture Exclusive</h3>
              </div>
              <div className="single_product_des">
                {/* <h1>Description:</h1>
                <p
                  dangerouslySetInnerHTML={{ __html: product[0].description }}
                ></p> */}
                <div className="single_product_btn">
                  <button onClick={() => setCount(count - 1)}>
                    <FontAwesomeIcon icon={faMinus} size="xs" />
                  </button>
                  <h4>{count}</h4>
                  <button onClick={() => setCount(count + 1)}>
                    <FontAwesomeIcon icon={faPlus} size="xs" />
                  </button>
                </div>
                <div className="single_product_add_to_cart">
                  <button onClick={() => onAddToCart(id, count)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleProduct
