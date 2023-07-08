import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
AOS.init()
import Product from "./Pages/Product.jsx"
import Basket from "./Pages/Basket.jsx"
import Header from "./componet/Header.jsx"
import Footer from "./componet/Footer.jsx"
import HowWrokPage from "./componet/HowWrokPage.jsx"
import SuccessPage from "./Pages/SuccessPage.jsx"
import Dashboard from "./Pages/Dashboard.jsx"
import Appceptance from "./Pages/Acceptance.jsx"
import Terms from "./Pages/Terms.jsx"
import Packaging from "./Pages/Packaging.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import Contact from "./Pages/Contact.jsx"
import Details from "./Pages/Details.jsx"
const router = createBrowserRouter([
  {
    path: "/client/",
    element: (
      <>
        <Header />
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/product",
    element: (
      <>
        <Header />
        <Product />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/selling-basket",
    element: (
      <>
        <Header />
        <Basket />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/check-your-details",
    element: (
      <>
        <Header />
        <Details />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/how-it-works",
    element: (
      <>
        <Header />
        <HowWrokPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/success",
    element: (
      <>
        <Header />
        <SuccessPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/my-account",
    element: (
      <>
        <Header />
        <Dashboard />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/terms-and-conditions",
    element: (
      <>
        <Header />
        <Terms />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/acceptance-guidelines",
    element: (
      <>
        <Header />
        <Appceptance />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/packaging-guidelines",
    element: (
      <>
        <Header />
        <Packaging />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/about",
    element: (
      <>
        <Header />
        <AboutUs />
        <Footer />
      </>
    ),
  },
  {
    path: "/client/Contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
