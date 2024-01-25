import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";

import Home from "./Pages/Home";
import RootLayout from "./Components/Layouts/RootLayout";
import Shope from "./Pages/Shope";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Login from "./Pages/Login";
import { Singup } from "./Pages/Singup";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shope" element={<Shope />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/singup" element={<Singup/>} />

      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
