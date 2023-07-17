import {
  Checkbox,
  Divider,
  Group,
  Radio,
  Select,
  TextInput,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import CountryCitits from "../../CountryCitits.json"
import axios from "axios"
import PasswordStrengthChecker from "./Password"
import PasswordStrengthMeter from "./Password"
import Country from "../componet/Country"
import CountryCity from "../componet/Country"
import { Helmet } from "react-helmet"
const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatpassword, setRepeatpassword] = useState()
  const navigation = useNavigate()
  const location = useLocation()
  const isLogin = location.state.isLogin
  console.log(isLogin)
  // demo
  const [searchValue, onSearchChange] = useState("")
  const [selectedCoutry, setSelectedCoutry] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [PaymentDetails, setPaymentDetails] = useState("Paypal")

  const form = useForm({
    initialValues: {
      email: "",
      paymentMethod: PaymentDetails,
      firstName: "",
      lastName: "",
      Telephone: "",
      title: "",
      StreetAddress1: "",
      termsOfService: true,
      StreetAddress2: "",
      city: selectedCity ? selectedCity : null,
      State: selectedState,
      Country: selectedCoutry,
      Paypalemail: "",
      accountNumber: "",
      sortCode1: "",
      sortCode2: "",
      sortCode3: "",
      TermsCheck: "",
      Marketingpreferences: "",
    },

    validate: {
      firstName: (value) =>
        value < 2
          ? "firstName must have at least 2 letters must have at least 2 letters"
          : null,
      lastName: (value) =>
        value < 2 ? "LastName must have at least 2 letters" : null,
      title: (value) =>
        value < 2 ? "title must have at select One Option" : null,
      Telephone: (value) =>
        value < 2 ? "Telephone must have at least 2 letters" : null,
      StreetAddress1: (value) =>
        value < 2 ? "StreetAddress1 must have at least 2 letters" : null,
      StreetAddress2: (value) =>
        value < 2 ? "StreetAddress2 must have at least 2 letters" : null,

      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      Paypalemail: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  })

  const handleSubmit = async (values) => {
    try {
      const payload = {
        email: form.values.email,
        paymentMethod: form.values.paymentMethod,
        firstName: form.values.firstName,
        lastName: form.values.lastName,
        Telephone: form.values.Telephone,
        title: form.values.title,
        StreetAddress1: form.values.StreetAddress1,
        termsOfService: form.values.termsOfService,
        StreetAddress2: form.values.StreetAddress2,
        city: selectedCity ? selectedCity : null,
        State: selectedState,
        Country: selectedCoutry,
        Paypalemail: form.values.Paypalemail,
        accountNumber: form.values.accountNumber,
        sortCode1: form.values.sortCode1,
        sortCode2: form.values.sortCode2,
        sortCode3: form.values.sortCode3,
        TermsCheck: form.values.TermsCheck,
        Marketingpreferences: form.values.TermsCheck,
      }
      console.log(values)
      const response = await fetch(
        "https://long-tan-chicken-hem.cyclic.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: form.values.email, password }),
        }
      )
      if (!response.ok) {
        throw new Error("Error: " + response.status)
      }

      // console.log("workingsdsd", response1.data)
      // Sign-up successful
      const responseData = await response.json()
      const userId = responseData.userId // Access the _id field from the response
      localStorage.setItem("userId", userId)
      console.log("Sign-up successful. User ID:", userId)
      if (isLogin !== "/lego2sell-client/") {
        navigation(`/lego2sell-client/check-your-details`)
      } else {
        navigation(`/lego2sell-client/`)
      }
      // Reset form inputs
      setEmail("")
      setPassword("")
      const response1 = await axios.post(
        `https://long-tan-chicken-hem.cyclic.app/MyDetails/${userId}`,
        payload
      )
      console.log("sdsds", response1.data)
      // Navigate to another route
    } catch (error) {
      console.error("An error occurred:", error)
      // Handle the error as needed
    }

    // setFormData(values)
    window.scrollTo({ top: 0, behavior: "smooth" })
    // nextStep()
  }

  return (
    <div className="flex w-full px-6 items-center justify-center flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create Account | LEGO®</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Sell, LEGO, sell2lego, lego" />
        <meta name="viewport" content="width=device-width" />
        <meta
          property="og:description"
          content="WeBuyBricks is the fast, FREE and easy way to sell LEGO® online for cash! We’ll buy complete collections or a mismatched bag of bricks - start selling now."
        />
      </Helmet>
      <section className="lg:pt-24 py-10">
        <div className="container max-w-6xl md:text-center">
          <h1 className="h1 text-2xl lg:text-4xl font-bold mb-6">
            Create your account
          </h1>
          <p className="font-medium lg:text-base text-sm text-gray-400">
            Ready to create an account and start selling LEGO®? Enter your
            details below to get started.{" "}
          </p>
        </div>
      </section>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        id="login-form"
        className="py-6 flex-col lg:flex-row w-full lg:w-3/6 flex"
        method="post"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold">My Details</h3>
          <div className="py-3">
            <Select
              {...form.getInputProps("title")}
              withAsterisk
              label="Title"
              placeholder="Pick one"
              searchable
              onSearchChange={onSearchChange}
              searchValue={searchValue}
              nothingFound="No options"
              data={["Dr", "Miss", "Mr", "Mrs", "Ms", "Rev", "Sir"]}
            />
          </div>
          <div class=" py-3">
            <TextInput
              type="text"
              withAsterisk
              label="First Name"
              placeholder="First Name"
              {...form.getInputProps("firstName")}
            />
          </div>
          <div class=" py-3">
            <TextInput
              withAsterisk
              label="Last Name"
              placeholder="Last Name"
              {...form.getInputProps("lastName")}
            />
          </div>
          <div class=" py-3">
            <TextInput
              type="email"
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
          </div>
          <div class=" py-3">
            <TextInput
              withAsterisk
              label="Telephone"
              placeholder="Telephone"
              {...form.getInputProps("Telephone")}
            />
          </div>

          <div className="py-4">
            <h1 className="text-2xl font-bold ">Address Details</h1>

            <p className="text-gray-500 py-1">
              Please enter your address details below.
            </p>
            <div className="">
              <div className="">
                <div class=" py-3">
                  <TextInput
                    withAsterisk
                    label="Street Address1"
                    placeholder="StreetAddress1"
                    {...form.getInputProps("StreetAddress1")}
                  />
                </div>
                <div class=" py-3">
                  <TextInput
                    withAsterisk
                    label="Street Address2"
                    placeholder="StreetAddress2"
                    {...form.getInputProps("StreetAddress2")}
                  />
                </div>
                <CountryCity
                  setSelectedState={setSelectedState}
                  setSelectedCity={setSelectedCity}
                  setSelectedCoutry={setSelectedCoutry}
                  form={form}
                />
              </div>
            </div>
          </div>
          <Divider className="" />
          <div className="py-6">
            <h1 className="text-2xl font-bold ">Payment details</h1>

            <p className="text-gray-500 py-1">
              How would you like to get paid?
            </p>
            <div className="">
              <div className="">
                <Radio.Group
                  defaultValue="Paypal"
                  onChange={setPaymentDetails}
                  withAsterisk
                >
                  <Group mt="xs">
                    <label
                      className={` ${
                        PaymentDetails === "BackTransfer"
                          ? "border-2 border-blue-500"
                          : ""
                      } flex items-center gap-4 border rounded-xl px-8 py-7`}
                    >
                      <Radio value="BackTransfer" label="Bank Transfer" />
                    </label>
                    <label
                      className={`${
                        PaymentDetails === "Paypal"
                          ? "border-2 border-blue-500"
                          : ""
                      } flex items-center gap-4 border rounded-xl px-8 py-6`}
                    >
                      <Radio value="Paypal" />
                      <img
                        className="w-24"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                        alt=""
                      />
                    </label>
                  </Group>
                </Radio.Group>
              </div>
            </div>
            {PaymentDetails === "Paypal" && (
              <div className="py-6">
                <h1 className="text-2xl font-bold ">Paypal Email *</h1>
                <div class=" py-3">
                  <TextInput
                    type="email"
                    withAsterisk
                    label="Need for revice your payment"
                    placeholder="Paypal Email"
                    {...form.getInputProps("Paypalemail")}
                  />
                </div>
                <div class="rounded-md bg-[#F8F8FE] p-4 text-sm text-[#706AEA] text-center mt-4">
                  We'll direct transfer to your PayPal account within{" "}
                  <strong class="font-bold">5 working days</strong> of receiving
                  your LEGO®.
                </div>
              </div>
            )}
            {PaymentDetails === "BackTransfer" && (
              <div className="py-6">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
                    <label className="w-full flex text-2xl font-bold mb-2">
                      Account number<span className="text-[#E52D3B]">*</span>
                    </label>
                    <TextInput
                      {...form.getInputProps("accountNumber")}
                      placeholder="Account number"
                      type="text"
                      autoComplete="off"
                      name="customer_paymentinfo_bank"
                      id="customer_paymentinfo_bank"
                      title="Enter Account Number"
                      className="h-[67px] rounded-3xl lg:rounded-xl w-full lg:pl-6 pl-0 km_ignore"
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-4">
                    <label className="w-full flex text-2xl font-bold mb-2">
                      Sort code<span className="text-[#E52D3B]">*</span>
                    </label>
                    <div className="flex items-center">
                      <div className=" w-full lg:w-3/12">
                        <TextInput
                          {...form.getInputProps("sortCode1")}
                          type="text"
                          maxLength={2}
                          autoComplete="off"
                          title="Sort code digits 1 & 2"
                          className="h-[67px] rounded-3xl lg:rounded-xl w-full lg:pl-6 pl-1 km_ignore"
                          name="customer_paymentinfo_bank_sort1"
                          id="customer_paymentinfo_bank_sort1"
                          defaultValue=""
                        />
                      </div>
                      <div className="lg:px-4 px-1 -mt-3">-</div>
                      <div className=" w-full lg:w-3/12">
                        <TextInput
                          {...form.getInputProps("sortCode2")}
                          type="text"
                          autoComplete="off"
                          title="Sort code digits 3 & 4"
                          maxLength={2}
                          className="h-[67px]  rounded-3xl lg:rounded-xl w-full lg:pl-6 pl-1 km_ignore"
                          name="customer_paymentinfo_bank_sort2"
                          id="customer_paymentinfo_bank_sort2"
                          defaultValue=""
                        />
                      </div>
                      <div className="lg:px-4 px-1  -mt-3">-</div>
                      <div className=" w-full lg:w-3/12">
                        <TextInput
                          {...form.getInputProps("sortCode3")}
                          type="text"
                          autoComplete="off"
                          title="Sort code digits 5 & 6"
                          maxLength={2}
                          className="h-[67px]  rounded-3xl lg:rounded-xl w-full lg:pl-6 pl-1 km_ignore"
                          name="customer_paymentinfo_bank_sort3"
                          id="customer_paymentinfo_bank_sort3"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-[#F8F8FE] p-4 text-sm text-[#706AEA] text-center mt-4">
                  We'll pay directly to your account the{" "}
                  <strong className="font-bold">same day</strong> we receive
                  your LEGO®.
                </div>
              </div>
            )}
          </div>

          <div className="">
            <hr class="my-16"></hr>
            <div>
              <h3 className="h3 text-2xl font-bold mb-6">Password</h3>
              <p className="mb-6">
                Choose a secure password - a combination of letters, numbers and
                special characters is usually best.
              </p>
              <div className="mb-6">
                <label className="w-full flex font-bold text-sm mb-2">
                  Password<span className="text-[#E52D3B]">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="py-4 px-6 border rounded-xl w-full"
                  // {...form.getInputProps("password")}
                  type="password"
                />
              </div>
              <div>
                <label className="w-full flex font-bold text-sm mb-2">
                  Repeat password<span className="text-[#E52D3B]">*</span>
                </label>
                <input
                  value={repeatpassword}
                  onChange={(e) => setRepeatpassword(e.target.value)}
                  placeholder="repeatpassword"
                  className="py-4 px-6 border rounded-xl w-full"
                  // {...form.getInputProps("password")}
                  type="password"
                />
                {password !== repeatpassword && (
                  <p className="py-2 text-red-500">
                    Repeat Password Most Be Some
                  </p>
                )}
              </div>
              <PasswordStrengthMeter password={password} />
            </div>
            <hr class="my-16"></hr>
            <div>
              <h3 className="h3 text-3xl font-bold mb-6">
                Marketing preferences
              </h3>

              <div className="mb-4">
                <label className="flex items-center gap-2">
                  <Checkbox {...form.getInputProps("Marketingpreferences")} />
                  Please send me exclusive voucher codes and latest news by
                  email
                </label>
              </div>
              <div>
                <label className="flex items-center gap-2">
                  {/* <input type="checkbox" className="mr-3" defaultValue={1} />I */}
                  <Checkbox {...form.getInputProps("TermsCheck")} />
                  agree to the
                  <Link
                    to={"/lego2sell-client/terms-and-conditions/"}
                    title="Terms and Conditions"
                    target="_blank"
                    className="text-[#706AEA] font-bold"
                  >
                    {" "}
                    terms and conditions{" "}
                  </Link>
                </label>
              </div>
              <div className="max-w-xl mx-auto text-center mt-14">
                {/* <input
                  type="button"
                  id="submitregister"
                  className="bg-[#69B832] text-white rounded-full h-[80px] w-full flex items-center justify-center font-bold text-lg"
                  defaultValue="Register"
                /> */}
                <button
                  type="submit"
                  className="bg-[#69B832] text-white rounded-full h-[80px] w-full flex items-center justify-center font-bold text-lg"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* demo */}
      {/* <div className="flex min-h-full h-[84.6vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="/Images/Logo1.png"
            alt="Lego2sell"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit2} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block  pl-4  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            You already Have Account
            <Link
              to="/lego2sell-client/login/"
              className="font-semibold pl-2 leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default SignUpForm
