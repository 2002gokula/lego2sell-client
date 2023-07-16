import React, { useState } from "react"
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigate()
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const location = useLocation()
  const isLogin = location.state.route
  console.log(isLogin)
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const price = localStorage.getItem("Price")
  console.log(price)
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("https://wicked-shoe-cow.cyclic.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error("Error: " + response.status)
      }

      // Sign-up successful
      const responseData = await response.json()
      const userId = responseData.userId // Access the _id field from the response
      console.log("Sign-up successful. User ID:", userId)

      // Reset form inputs
      setEmail("")
      setPassword("")

      // Save the user ID in localStorage
      localStorage.setItem("userId", userId)

      // Navigate to another route
      if (isLogin !== "/lego2sell-client/") {
        navigation(`/lego2sell-client/check-your-details`)
      } else {
        navigation(`/lego2sell-client/`)
      }
    } catch (error) {
      console.error("An error occurred:", error)
      // Handle the error as needed
    }
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login ccount | LEGO®</title>
        <meta property="og:title" content="Sell LEGO® | WeBuyBricks.co.uk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Sell, LEGO, sell2lego, lego" />
        <meta name="viewport" content="width=device-width" />
        <meta
          property="og:description"
          content="WeBuyBricks is the fast, FREE and easy way to sell LEGO® online for cash! We’ll buy complete collections or a mismatched bag of bricks - start selling now."
        />
      </Helmet>
      <section className="lg:pt-24 px-6 py-10">
        <div className="container md:text-center">
          <h1 className="h1 text-4xl font-bold">Log in or create an account</h1>
        </div>
      </section>
      <section className="py-10 lg:pb-24">
        <div className="container px-6  flex flex-col lg:flex-row max-w-2xl lg:max-w-5xl">
          <div className="w-full lg:w-5/12">
            <h3 className="h3 text-3xl font-bold mb-6">Existing customers</h3>
            <p className="mb-8  font-medium text-[#87888F]">
              Already have an account with us? Log in using Facebook or enter
              your email and password below.
            </p>

            <form
              onSubmit={handleSubmit}
              id="login-form"
              action=""
              method="post"
            >
              <div className="mb-6">
                <label
                  className="w-full flex font-bold text-sm mb-2"
                  htmlFor="user-name"
                >
                  Email address<span className="text-[#E52D3B]">*</span>
                </label>
                <input
                  onChange={handleEmailChange}
                  id="email"
                  value={email}
                  className="h-[67px] border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6"
                  type="text"
                  name="customer_email"
                  placeholder="Email Address"
                  defaultValue="uk"
                />
              </div>
              <div className="login-form-password">
                <label
                  className="w-full flex font-bold text-sm mb-2"
                  htmlFor="password"
                >
                  Password<span className="text-[#E52D3B]">*</span>
                </label>
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  className="h-[67px] border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  defaultValue="Gk8883578186@"
                />
              </div>
              <div className="mt-8">
                <div className="mt-4">
                  <button
                    type="submit"
                    className="cursor-pointer bg-[#3b82f6] text-white rounded-xl h-[80px] w-full flex items-center justify-center font-bold text-lg"
                  >
                    Submit
                  </button>
                  {/* <input
                    className="cursor-pointer bg-[#69B832] text-white rounded-full h-[80px] w-full flex items-center justify-center font-bold text-lg"
                    type="submit"
                    id="login-button"
                    defaultValue="Log in"
                  /> */}
                </div>
              </div>
              {/* <div className="mt-4">
                <a
                  title="Forgotten Password"
                  className="text-sm font-bold text-[#706AEA]"
                  href="/forgot-password/"
                >
                  I've forgotten my password
                </a>
              </div> */}
            </form>
          </div>
          <div className="w-full lg:w-2/12 text-center flex items-center justify-center py-14 lg:py-0">
            <h3 className="h3 font-bold text-2xl">Or</h3>
          </div>
          <div className="w-full lg:w-5/12">
            <h3 className="h3 text-3xl font-bold mb-6">New customers</h3>
            <p className="mb-8 ont-medium text-[#87888F]">
              Create an account with lego2sell to start selling your LEGO® for
              cash! Creating an account will allow you to easily view and track
              your orders and much more.
            </p>
            <Link
              to="/lego2sell-client/signup/"
              className="bg-[#3b82f6] text-white rounded-xl h-[80px] w-full flex items-center justify-center font-bold text-lg"
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
