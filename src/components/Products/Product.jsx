import './Product.css'

const Product = ({ product, onAddToCart }) => {
  const { name, price, image, description } = product
  return (
    <div className="product">
      <div
        className="product_img"
        style={{
          backgroundImage: `url(${image.url})`,
        }}
      ></div>
      <div className="product_detail">
        <h1>{name}</h1>
        <h5>$ {price.formatted_with_code}</h5>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <button onClick={() => onAddToCart(product.id, 1)}>Add</button>
    </div>
  )
}

export default Product