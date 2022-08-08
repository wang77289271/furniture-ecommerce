import './CartItem.css'

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <div className="cart_item_container">
      <div className="cart_item">
        <img src={item.image.url} alt={item.name} />
        <div className="cart_item_detail">
          <div className="cart_item_detail_content">
            <h1>{item.name}</h1>
            <h2>$ {item.line_total.formatted_with_code}</h2>
          </div>
          <div className="cart_item_quantity">
            <button
              onClick={() => {
                handleUpdateCartQty(item.id, item.quantity - 1)
              }}
            >
              <p>-</p>
            </button>
            <h2>{item.quantity}</h2>
            <button
              onClick={() => {
                handleUpdateCartQty(item.id, item.quantity + 1)
              }}
            >
              <p>+</p>
            </button>
            <button
              onClick={() => {
                handleRemoveFromCart(item.id)
              }}
            >
              <p>remove</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
