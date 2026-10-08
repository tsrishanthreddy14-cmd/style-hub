import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="cart">

      <h1>Shopping Cart 🛒</h1>

      {cart.length === 0 ? (

        <div>
          <h2>Your cart is empty</h2>

          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>

      ) : (

        <>

          {cart.map((item, index) => (

            <div className="cart-item" key={index}>

              <img src={item.image} />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>

            </div>

          ))}

          <h2>Total: ₹{total}</h2>

          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>

        </>

      )}

    </div>
  );
}

export default Cart;