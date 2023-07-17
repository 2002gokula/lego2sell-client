import { Divider, Group, Radio, Select, TextInput, Loader } from "@mantine/core"
import { useForm } from "@mantine/form"
import React, { useEffect, useState } from "react"
import { DatePickerInput } from "@mantine/dates"
import CountryData from "../../CountryData.json"
import cities from "../../cities.json"
import CountryCitits from "../../CountryCitits.json"
import axios from "axios"
import { Helmet } from "react-helmet"
// import Select from "react-select"
const DetailsForm = ({ setActive, setFormData, storedUserId }) => {
  const [searchValue, onSearchChange] = useState("")
  const [PaymentDetails, setPaymentDetails] = useState("Paypal")
  const [data, setData] = useState()
  const [getCountry, setGetCountry] = useState()
  const [getState, setGetState] = useState()
  const [countryid, setCountryid] = useState("")
  const [state, setState] = useState([])
  console.log(state)
  const [stateid, setStateid] = useState("")
  const price = localStorage.getItem("Price")
  const handlecounty = (e) => {
    const getcountryId = e.target.value
    const getStatedata = CountryCitits.find(
      (country) => country.country_id === getcountryId
    ).states
    setState(getStatedata)
    setCountryid(getcountryId)
  }
  console.log(data)

  const handlestate = (e) => {
    const stateid = e.target.value
    //console.log(stateid);
    setStateid(stateid)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Get Country id" + countryid + " And " + stateid)
  }

  // useEffect(() => {
  //   const reloadTimeout = setTimeout(() => {
  //     window.location.reload()
  //   }, 5500) // Reload after 5 seconds

  //   return () => {
  //     clearTimeout(reloadTimeout) // Clear the timeout when the component unmounts
  //   }
  // }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://long-tan-chicken-hem.cyclic.app/Mydetails/${storedUserId}`
        )
        setData(response.data.Mydetails[0])
      } catch (error) {
        console.error("An error occurred:", error)
        // Handle the error as needed
      }
    }

    fetchData()
  }, [setData])
  const [firstName, setFirstName] = useState()
  const form = useForm({
    initialValues: {
      email: data?.email,
      paymentMethod: PaymentDetails,
      firstName: data?.firstName,
      lastName: data?.lastName,
      Telephone: data?.Telephone,
      title: data?.title,
      StreetAddress1: data?.StreetAddress1,
      termsOfService: true,
      StreetAddress2: data?.StreetAddress2,
      city: data?.city,
      Country: data?.Country,
      Paypalemail: data?.Paypalemail,
      accountNumber: data?.accountNumber,
      sortCode1: data?.sortCode1,
      sortCode2: data?.sortCode2,
      sortCode3: data?.sortCode3,
    },

    validate: {},
  })

  const nextStep = () =>
    setActive((current) => {
      // if (form.validate().hasErrors) {
      //   return current
      // }
      return current < 3 ? current + 1 : current
    })
  // console.log("gokula", formData)
  // const payload = {
  //   paymentMethod: formData.paymentMethod,
  //   paypalEmail: formData.Paypalemail,
  //   sortCode: formData.sortCode1,
  // }
  // if (PaymentDetails !== "paypal") {
  //   payload.accountNumber = formData.accountNumber
  // }
  const [cityData, setCityData] = useState([])
  // console.log(cityData)
  const country = [...new Set(cityData.map((items) => items.country))]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
        )
        const data = await response.json()
        setCityData(data)
      } catch (error) {
        console.error("Error fetching city data:", error)
      }
    }

    fetchData()
  }, [])
  console.log("demo", firstName)
  return (
    <div className="!h-[100%]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Confirm your details| LEGO®</title>
        <meta property="og:title" content="Sell LEGO® | WeBuyBricks.co.uk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Sell, LEGO, sell2lego, lego" />
        <meta name="viewport" content="width=device-width" />
        <meta
          property="og:description"
          content="WeBuyBricks is the fast, FREE and easy way to sell LEGO® online for cash! We’ll buy complete collections or a mismatched bag of bricks - start selling now."
        />
      </Helmet>
      <h1 className="text-4xl font-bold text-center">Confirm your details</h1>
      <form
        onSubmit={form.onSubmit(async (values) => {
          // try {
          //   const response = await axios.post(
          //     `https://long-tan-chicken-hem.cyclic.app//MyDetails/${storedUserId}`,
          //     values
          //   )

          //   console.log("workingsdsd", response.data)
          // } catch (error) {
          //   console.error(error)
          // }

          setFormData(values)
          window.scrollTo({ top: 0, behavior: "smooth" })
          nextStep()
        })}
        id="login-form"
        className=""
        method="post"
      >
        <div className="py-6 w-full flex-col lg:flex-row space-x-0 lg:space-x-12 flex">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">My Details</h3>
            <div className="py-3">
              <Select
                value={data?.title}
                defaultValue={data?.title}
                {...form.getInputProps("title")}
                withAsterisk
                label="Title"
                placeholder="Pick one"
                searchable
                onSearchChange={onSearchChange}
                searchValue={data?.title}
                nothingFound="No options"
                data={["Dr", "Miss", "Mr", "Mrs", "Ms", "Rev", "Sir"]}
              />
            </div>
            <div class=" py-3">
              <TextInput
                onChange={setFirstName}
                defaultValue={data?.firstName}
                value={data?.firstName}
                type="text"
                withAsterisk
                label="First Name"
                placeholder="First Name"
                {...form.getInputProps("firstName")}
              />
            </div>
            <div class=" py-3">
              <TextInput
                defaultValue={data?.lastName}
                withAsterisk
                label="Last Name"
                placeholder="Last Name"
                {...form.getInputProps("lastName")}
              />
            </div>
            <div class=" py-3">
              <TextInput
                defaultValue={data?.email}
                value={data?.email}
                type="email"
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
            </div>
            <div class=" py-3">
              <TextInput
                defaultValue={data?.Telephone}
                value={data?.Telephone}
                withAsterisk
                label="Telephone"
                placeholder="Telephone"
                {...form.getInputProps("Telephone")}
              />
            </div>
            {/* <div class=" py-4">
              <DatePickerInput
                {...form.getInputProps("DOB")}
                label="Date of Birth"
                placeholder="DOB"
                value={value}
                onChange={setValue}
                mx="auto"
              />
            </div> */}
            {/* <Divider className="" /> */}
            <div className="py-4">
              <h1 className="text-2xl font-bold ">Address Details</h1>

              <p className="text-gray-500 py-1">
                Please enter your address details below.
              </p>
              <div className="">
                <div class=" flex items-center justify-between py-3">
                  {/* <div className="flex w-full gap-12 items-center"> */}
                  {/* <Select
                      {...form.getInputProps("PostCode")}
                      withAsterisk
                      label="Find by post code"
                      placeholder="Pick one"
                      searchable
                      onSearchChange={setSearchPost}
                      searchValue={SearchPost}
                      nothingFound="No options"
                      data={["React", "Angular", "Svelte", "Vue"]}
                    /> */}
                  {/* <button
                      onClick={() => navigation("/check-your-details")}
                      type="button"
                      className="hover:scale-[1.05] transition-all mt-4 w-1/5 text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-full bg-blue-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[45px]  xl:text-[18px]"
                    >
                      Search
                    </button> */}
                  {/* </div> */}
                  {/* <button onClick={() => setOpenaddress(!openaddress)}>
                    <a
                      title="Forgotten Password"
                      class="text-sm  font-bold text-[#706AEA]"
                    >
                      Enter address manually
                    </a>
                  </button> */}
                </div>

                <div className="">
                  <div class=" py-3">
                    <TextInput
                      defaultValue={data?.StreetAddress1}
                      value={data?.StreetAddress1}
                      withAsterisk
                      label="Street Address1"
                      placeholder="StreetAddress1"
                      {...form.getInputProps("StreetAddress1")}
                    />
                  </div>
                  <div class=" py-3">
                    <TextInput
                      defaultValue={data?.StreetAddress2}
                      value={data?.StreetAddress2}
                      withAsterisk
                      label="Street Address2"
                      placeholder="StreetAddress2"
                      {...form.getInputProps("StreetAddress2")}
                    />
                  </div>

                  <div className="py-3">
                    <Select
                      defaultValue={data?.Country}
                      value={data?.Country}
                      onChange={(e) => handlecounty(e)}
                      withAsterisk
                      label="Country"
                      placeholder="Pick Country"
                      name="Country"
                      searchable
                      searchValue={data?.Country}
                      data={CountryCitits.map((items) => items.country_name)}
                      {...form.getInputProps("Country")}
                    />
                  </div>
                  <div className="py-3">
                    <Select
                      searchValue={data?.State}
                      {...form.getInputProps("city")}
                      withAsterisk
                      label="Town / city"
                      placeholder=" Pick Town / city "
                      searchable
                      // nothingFound="No options"
                      data={cities.data.map((value) => value.city)}
                    />
                  </div>
                  {data?.city && (
                    <div className="py-3">
                      <Select
                        searchValue={data?.city}
                        {...form.getInputProps("city")}
                        withAsterisk
                        label="city"
                        placeholder=" Pick Town / city "
                        searchable
                        // nothingFound="No options"
                        data={cities.data.map((value) => value.city)}
                      />
                    </div>
                  )}
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
                      defaultValue={data?.Paypalemail}
                      value={data?.Paypalemail}
                      type="email"
                      withAsterisk
                      label="Need for revice your payment"
                      placeholder="Paypal Email"
                      {...form.getInputProps("Paypalemail")}
                    />
                  </div>
                  <div class="rounded-md bg-[#F8F8FE] p-4 text-sm text-[#706AEA] text-center mt-4">
                    We'll direct transfer to your PayPal account within{" "}
                    <strong class="font-bold">5 working days</strong> of
                    receiving your LEGO®.
                  </div>
                </div>
              )}
              {PaymentDetails === "BackTransfer" && (
                <div className="py-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
                      <label className="w-full flex text-2xl font-bold mb-2">
                        Account number
                        <span className="text-[#E52D3B]">*</span>
                      </label>
                      <TextInput
                        defaultValue={data?.accountNumber}
                        value={data?.accountNumber}
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
                            defaultValue={data?.sortCode1}
                            value={data?.sortCode1}
                            {...form.getInputProps("sortCode1")}
                            type="text"
                            maxLength={2}
                            autoComplete="off"
                            title="Sort code digits 1 & 2"
                            className="h-[67px] rounded-3xl lg:rounded-xl w-full lg:pl-6 pl-1 km_ignore"
                            name="customer_paymentinfo_bank_sort1"
                            id="customer_paymentinfo_bank_sort1"
                          />
                        </div>
                        <div className="lg:px-4 px-1 -mt-3">-</div>
                        <div className=" w-full lg:w-3/12">
                          <TextInput
                            {...form.getInputProps("sortCode2")}
                            type="text"
                            defaultValue={data?.sortCode2}
                            value={data?.sortCode2}
                            autoComplete="off"
                            title="Sort code digits 3 & 4"
                            maxLength={2}
                            className="h-[67px]  rounded-3xl lg:rounded-xl w-full lg:pl-6 pl-1 km_ignore"
                            name="customer_paymentinfo_bank_sort2"
                            id="customer_paymentinfo_bank_sort2"
                          />
                        </div>
                        <div className="lg:px-4 px-1  -mt-3">-</div>
                        <div className=" w-full lg:w-3/12">
                          <TextInput
                            {...form.getInputProps("sortCode3")}
                            defaultValue={data?.sortCode3}
                            value={data?.sortCode3}
                            type="text"
                            autoComplete="off"
                            title="Sort code digits 5 & 6"
                            maxLength={2}
                            className="h-[67px]  rounded-3xl lg:rounded-xl w-full lg:pl-6 pl-1 km_ignore"
                            name="customer_paymentinfo_bank_sort3"
                            id="customer_paymentinfo_bank_sort3"
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
          </div>
          <div className="flex-[0.4]">
            <div className="bg-white relative lg:!fixed !top-18 w-full lg:w-[340px] rounded-2xl shadow-[0_4px_25px_rgba(38,50,92,0.1)] p-4 px-6 md:p-8 text-center">
              <h2 className="h4 mb-4 hidden md:block">Offer summary</h2>
              <div className="flex flex-row md:flex-col items-center justify-between">
                <div className="text-[#706AEA] text-xl md:text-5xl font-bold mb-0 md:mb-2 order-2 md:order-1">
                  <h2>
                    {price ? <h2>{` £ ${price}`}</h2> : <Loader size="xs" />}
                  </h2>
                </div>
                <div className="font-bold text-xl md:text-base order-1 md:order-2">
                  1 Item
                </div>
              </div>
              <button
                type="submit"
                className="hover:scale-[1.05] transition-all mt-4 w-full text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-xl bg-blue-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[65px]  xl:text-[18px]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DetailsForm
