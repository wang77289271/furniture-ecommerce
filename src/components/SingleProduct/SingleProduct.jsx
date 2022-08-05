import { useParams } from 'react-router-dom'
import './SingleProduct.css'

const SingleProduct = ({ products, onAddToCart }) => {
  const { id } = useParams()
  const product = products.filter((x) => x.id === id)
  if (!product) {
    return 'Loading...'
  }

  console.log(product)
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
                <p
                  dangerouslySetInnerHTML={{ __html: product[0].description }}
                ></p>
              </div>
              <div className="single_product_add_to_cart">
                <button onClick={() => onAddToCart(id, 1)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleProduct
