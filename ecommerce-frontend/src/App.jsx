import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import "./App.css";
import { TrackingPage } from "./pages/TrackingPage";
import { Notfound } from "./pages/NotFoundPage";
import { useEffect,useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  // Fetch cart items from the API
  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);
  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
