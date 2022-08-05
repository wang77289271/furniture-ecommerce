import { Link } from 'react-router-dom'
import './Cart.css'
import CartItem from './CartItem/CartItem'

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const EmptyCart = () => (
    <div className="cart_empty">
      <h1>
        You have no items in your shopping cart.
        <Link to="/">Back to home page</Link>
      </h1>
    </div>
  )
  const FillCart = () => (
    <div className="cart_fill">
      <div className="cart_items">
        {cart.line_items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <h2>Total items: {cart.total_items}</h2>
      <h2>Total price: $ {cart.subtotal.formatted_with_code}</h2>
      <button onClick={handleEmptyCart}>remove all</button>
      <button>check out</button>
    </div>
  )

  if (!cart.line_items) return 'Loading...'

  return (
    <div className="cart_container">
      <h1>Your Shopping Cart</h1>
      {!cart.line_items.length ? <EmptyCart /> : <FillCart />}
    </div>
  )
}

export default Cart
