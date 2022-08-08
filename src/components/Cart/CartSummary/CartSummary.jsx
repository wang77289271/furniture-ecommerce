import './CartSummary.css'

const CartSummary = ({ totalItems, totalPrice }) => {
  return (
    <div className="cart_summary_container">
      <div className="checkout_title">
        <h1>Cart Summary</h1>
      </div>
      <div className="cart_summary_detail">
        <div>
          <h2>Total items: {totalItems}</h2>
          <h2>Total price: $ {totalPrice}</h2>
        </div>
        <div className="checkout_btn">
          <button>check out</button>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
