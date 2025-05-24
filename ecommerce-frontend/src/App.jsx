import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import "./App.css";
import { TrackingPage } from "./pages/tracking/TrackingPage";
import { Notfound } from "./pages/404/NotFoundPage";
import { useEffect,useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  // Fetch cart items from the API
  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };

    fetchAppData();
  }, []);
  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
