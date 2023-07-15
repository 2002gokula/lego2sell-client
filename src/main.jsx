import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
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
import SignUpForm from "./Pages/Signin.jsx"
import LoginPage from "./Pages/Login.jsx"
import Login from "./Pages/Login.jsx"
import Admin from "./Pages/Admin.jsx"
import PrivacyStatement from "./Pages/PrivacyStatement.jsx"
const storedUserId = localStorage.getItem("userId")
const isAdmin = storedUserId === "64b275a9de091215940de10c"
const router = createBrowserRouter([
  {
    path: "/lego2sell-client/",
    element: (
      <>
        <Header />
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/signup/",
    element: (
      <>
        <Header />
        <SignUpForm />
        <Footer />
      </>
    ),
  },

  {
    path: "/lego2sell-client/Admin/",
    element: (
      <>
        <Header />
        {/* {isAdmin ? <Admin /> : <div>Unauthorization Persn Not allow</div>} */}
        <Admin />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/login/",
    element: (
      <>
        <Header />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/product",
    element: (
      <>
        <Header />
        <Product />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/selling-basket",
    element: (
      <>
        <Header />
        <Basket />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/check-your-details",
    element: (
      <>
        <Header />
        <Details />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/how-it-works",
    element: (
      <>
        <Header />
        <HowWrokPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/success",
    element: (
      <>
        <Header />
        <SuccessPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/my-account",
    element: (
      <>
        <Header />
        <Dashboard />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/terms-and-conditions",
    element: (
      <>
        <Header />
        <Terms />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/acceptance-guidelines",
    element: (
      <>
        <Header />
        <Appceptance />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/packaging-guidelines",
    element: (
      <>
        <Header />
        <Packaging />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/about",
    element: (
      <>
        <Header />
        <AboutUs />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/Contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/lego2sell-client/privacy-statement",
    element: (
      <>
        <Header />
        <PrivacyStatement />
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
