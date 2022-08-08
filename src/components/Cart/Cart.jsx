import { Link } from 'react-router-dom'
import './Cart.css'
import CartItem from './CartItem/CartItem'
import CartSummary from './CartSummary/CartSummary'

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
      <div className="cart_fill_container">
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
        <div className="cart_items_remove_all">
          <button onClick={handleEmptyCart}>
            <span>remove all</span>
          </button>
        </div>
      </div>
      <div className="cart_summary">
        <CartSummary
          totalItems={cart.total_items}
          totalPrice={cart.subtotal.formatted_with_code}
        />
      </div>
    </div>
  )

  if (!cart.line_items) return 'Loading...'

  return (
    <div className="cart_container">
      <div className="cart_wrapper">
        <h1>Your Shopping Cart</h1>
        {!cart.line_items.length ? <EmptyCart /> : <FillCart />}
      </div>
    </div>
  )
}

export default Cart
