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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shope" element={<Shope />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
