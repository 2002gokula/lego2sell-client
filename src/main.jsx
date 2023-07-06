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
import Details from "./componet/Details.jsx"
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
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: "/product",
    element: (
      <>
        <Header />
        <Product />
        <Footer />
      </>
    ),
  },
  {
    path: "/selling-basket",
    element: (
      <>
        <Header />
        <Basket />
        <Footer />
      </>
    ),
  },
  {
    path: "/check-your-details",
    element: (
      <>
        <Header />
        <Details />
        <Footer />
      </>
    ),
  },
  {
    path: "/how-it-works",
    element: (
      <>
        <Header />
        <HowWrokPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/success",
    element: (
      <>
        <Header />
        <SuccessPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/my-account",
    element: (
      <>
        <Header />
        <Dashboard />
        <Footer />
      </>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <>
        <Header />
        <Terms />
        <Footer />
      </>
    ),
  },
  {
    path: "/acceptance-guidelines",
    element: (
      <>
        <Header />
        <Appceptance />
        <Footer />
      </>
    ),
  },
  {
    path: "/packaging-guidelines",
    element: (
      <>
        <Header />
        <Packaging />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <AboutUs />
        <Footer />
      </>
    ),
  },
  {
    path: "/Contact",
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
