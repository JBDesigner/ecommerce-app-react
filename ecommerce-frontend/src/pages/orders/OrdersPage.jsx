import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header.jsx";
import { OrdersGrid } from "./OrdersGrid.jsx";
import "./OrdersPage.css";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the API
    const getOrders = async () => {
      const response = await axios.get(`/api/orders?expand=products`);
      setOrders(response.data);
    };

    getOrders();
  }, []);
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders}/>
      </div>
    </>
  );
}
