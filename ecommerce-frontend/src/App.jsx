import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import "./App.css";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { Notfound } from "./pages/404/NotFoundPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  // Fetch cart items from the API
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />
      <Route path="*" element={<Notfound cart={cart} />} />
    </Routes>
  );
}

export default App;
