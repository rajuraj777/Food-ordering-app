import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
// import Contact from "./components/Contact.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Body from "./components/Body.jsx";
import Resmenu from "./components/Resmenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
import Cart from "./components/Cart.jsx";
const Contact=lazy(()=>import("./components/Contact.jsx"));
const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<Shimmer/>}><Contact /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <Resmenu />,
      },
      {
        path:"/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={AppLayout} />
  
);
