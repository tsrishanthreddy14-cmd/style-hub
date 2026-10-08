function Checkout({ cart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  function placeOrder(e) {

    e.preventDefault();

    alert("🎉 Order placed successfully!");

  }

  return (
    <div className="checkout">

      <h1>Checkout</h1>

      <form onSubmit={placeOrder}>

        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
        />

        <textarea
          placeholder="Delivery Address"
          required
        ></textarea>

        <h2>Total: ₹{total}</h2>

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;