import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {

  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      category: "Men",
      price: 799,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
      id: 2,
      name: "Women's Dress",
      category: "Women",
      price: 1499,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8"
    },

    {
      id: 3,
      name: "Denim Jacket",
      category: "Men",
      price: 1999,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5"
    },

    {
      id: 4,
      name: "Sneakers",
      category: "Footwear",
      price: 2499,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
      id: 5,
      name: "Handbag",
      category: "Accessories",
      price: 1299,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
    },

    {
      id: 6,
      name: "Hoodie",
      category: "Men",
      price: 1599,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
    }
  ];

  return (
    <div className="products-page">

      <h1>Our Products</h1>

      <div className="product-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;