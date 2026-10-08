import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div>
          <h1>Welcome to StyleHub 👗</h1>

          <p>
            Discover the latest fashion at affordable prices.
          </p>

          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </div>

      </section>

      <section className="categories">

        <h2>Shop by Category</h2>

        <div className="category-container">

          <div className="category">
            👕
            <h3>Men</h3>
          </div>

          <div className="category">
            👗
            <h3>Women</h3>
          </div>

          <div className="category">
            👟
            <h3>Footwear</h3>
          </div>

          <div className="category">
            👜
            <h3>Accessories</h3>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;