import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./styles/globals.css";
import Home from "./pages/home";
import Providers from "./components/providers";

// const Home = lazy(() => import("./pages/home"));
const ProductDetailsPage = lazy(() => import("./pages/product-details"));
const Cart = lazy(() => import("./pages/cart"));
const Checkout = lazy(() => import("./pages/checkout"));
const Confirmation = lazy(() => import("./pages/confirmation"));
const NotFound = lazy(() => import("./pages/not-found"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  </StrictMode>
);
