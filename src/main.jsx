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
import PasswordReset from "./Pages/PasswordReset.jsx/PasswordReset.jsx"
const storedUserId = localStorage.getItem("userId")
const isAdmin = storedUserId === "64b275a9de091215940de10c"
const router = createBrowserRouter([
  {
    path: "/lego2sell-client/",
    element: (
      <div className=" flex min-h-screen flex-col ">
        <Header />
        <App />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/signup/",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <SignUpForm />
        <Footer />
      </div>
    ),
  },

  {
    path: "/lego2sell-client/Admin/",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        {/* {isAdmin ? <Admin /> : <div>Unauthorization Persn Not allow</div>} */}
        <Admin />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/login/",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <Login />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/product",
    element: (
      <div className=" flex min-h-screen flex-col ">
        <Header />
        <Product />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/selling-basket",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <Basket />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/check-your-details",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <Details />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/how-it-works",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <HowWrokPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/success",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <SuccessPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/my-account",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/terms-and-conditions",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <Terms />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/acceptance-guidelines",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <Appceptance />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/packaging-guidelines",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <Packaging />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/about",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <AboutUs />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/Contact",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/privacy-statement",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <PrivacyStatement />
        <Footer />
      </div>
    ),
  },
  {
    path: "/lego2sell-client/forgotpassword/:id/:token",
    element: (
      <div className="h-screen flex min-h-screen flex-col ">
        <Header />
        <PasswordReset />
        <Footer />
      </div>
    ),
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
