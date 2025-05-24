import { Header } from "../../components/Header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid.jsx";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
