import { Checkbox, Group, Loader, Radio } from "@mantine/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Country, State, City } from "country-state-city"
import { Helmet } from "react-helmet"
const summary = ({
  SearchValue,
  condition,
  prevStep,
  formData,
  storedUserId,
}) => {
  const price = localStorage.getItem("Price")
  // console.log("SearchValue", SearchValue)
  const navigation = useNavigate()
  const [sendMethod, setSendMethod] = useState("Dropoff")
  const [acceptOffer, setAcceptOffer] = useState()
  const [details, setDetails] = useState()
  const [data, setData] = useState(false)
  console.log("demo92387273627632376", data)
  const payload = {
    Deliverymethod: sendMethod,
    Price: price ? price : null,
    noItems: 1,
    Status: "pending",
    ProductName: data?.body?.name,
    ProductId: SearchValue,
    ProductImg: data?.body?.image_url,
    timestamp: new Date(),
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://long-tan-chicken-hem.cyclic.app/Mydetails/${storedUserId}`
        )
        setDetails(response.data.Mydetails[0])
        const response1 = await fetch(
          "https://long-tan-chicken-hem.cyclic.app/find-lego",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ itemCode: SearchValue }),
          }
        )

        const data = await response1.json()
        // console.log("Data", data)
        // localStorage.setItem("data", data)
        if (data.message === "SUCCESS") {
          setData(data)
        } else {
          console.log("error")
          // alert("Could not find the LEGO you are looking for.")
        }
      } catch (error) {
        console.error("An error occurred:", error)
        // Handle the error as needed
      }
    }

    fetchData()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `https://long-tan-chicken-hem.cyclic.app/Getorder/${storedUserId}`,
        payload
      )
      const offerId = response.data.offerId
      navigation("/lego2sell-client/success", {
        state: { data, price, SearchValue, condition, offerId },
      })
      window.scrollTo({ top: 0, behavior: "smooth" })
      console.log("workingsdsd", response.data.offerId)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSearch = async () => {
    try {
      const response = await fetch(
        "https://long-tan-chicken-hem.cyclic.app/find-lego",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemCode: SearchValue }),
        }
      )

      const data = await response.json()
      // console.log("Data", data)
      // localStorage.setItem("data", data)
      localStorage.setItem("SearchValue", e)
      if (data.message === "SUCCESS") {
        setDashPattern(data)
      } else {
        console.log("error")
        // alert("Could not find the LEGO you are looking for.")
      }
    } catch {
      console.log("error")
      // alert("Could not find the LEGO you are looking for.")
    } finally {
      console.log("complete") // Set loading state back to false
    }
  }
  return (
    <>
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
      <h1 className="text-4xl py-4 font-bold text-center">Offer Summary</h1>
      <div className="flex lg:flex-row flex-col space-x-0 lg:space-x-8">
        <div className="flex-1">
          <div className="py-12">
            <h1 className="text-2xl py-6 font-bold ">
              Please Send Your LEGO® Sets
            </h1>

            {/* <p className="text-gray-500 py-1">Select your preferred method*</p> */}
            <div className="">
              <div className="lg:w-2/4 w-full rounded-xl border gap-8 mb-14">
                <div className="relative w-full rounded-b-lg p-6 py-10">
                  <img
                    className="w-full object-contain h-full"
                    src="../Images/brand.jpeg"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-12">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold ">Your Details</h1>
                  <button onClick={prevStep} className="text-blue-500">
                    Edit
                  </button>
                </div>
                {details ? (
                  <div className="border px-6 my-4 py-4 rounded-xl">
                    <div className="flex items-center py-1 gap-4">
                      <h3 className="text-base font-semibold">Name:</h3>
                      <h6 className="text-base">
                        {details?.firstName} {details?.lastName}
                      </h6>
                    </div>
                    <div className="flex items-center  py-1 gap-4">
                      <h3 className="text-base font-semibold">Email:</h3>
                      <h4 className="text-base line-clamp-4 w-[200px] lg:w-full ">
                        {details?.email}
                      </h4>
                    </div>
                    <div className="flex items-center py-1 gap-4">
                      <h3 className="text-base font-semibold">Telephone:</h3>
                      <h6 className="text-base">{details?.Telephone}</h6>
                    </div>
                    <div className="flex items-center py-1 gap-4">
                      <h3 className="text-base font-semibold">Address:</h3>
                      <h6 className="text-base">
                        {details?.StreetAddress1}
                        {details?.city} {details?.Country}
                      </h6>
                    </div>
                    <div className="flex items-center py-1 gap-4">
                      <h3 className="text-base font-semibold">
                        Payment details:
                      </h3>
                      <h6 className="text-base">{details?.paymentMethod}</h6>
                    </div>
                  </div>
                ) : (
                  <div className="py-12">
                    <Loader />
                  </div>
                )}
              </div>
              <div className="">
                <h1 className="text-2xl font-bold py-4 ">
                  What you be sending us
                </h1>
                <div className="flex lg:flex-row flex-col items-center py-6 border rounded-2xl  px-6 justify-between">
                  <div className="flex lg:flex-row flex-col items-center gap-6">
                    <img
                      className="w-44 object-contain  border rounded-lg px-4 border-gray-300 h-32"
                      src={data?.body?.image_url}
                      alt=""
                    />
                    <h3 className="text-lg font-semibold">
                      {data?.body?.name} {SearchValue}
                    </h3>
                  </div>
                  <div className="flex text-blue-500 font-bold items-center gap-6">
                    {price ? <h2> £{price}</h2> : <Loader size="xs" />}
                    <button onClick={() => navigation("/lego2sell-client/")}>
                      <svg
                        width={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g id="Edit / Close_Circle">
                            {" "}
                            <path
                              id="Vector"
                              d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                              stroke="#000000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0.4]">
          <div className="w-full ">
            <div className="bg-white relative lg:!fixed lg:!top-[310px] w-full lg:w-[340px] rounded-2xl  shadow-[0_4px_25px_rgba(38,50,92,0.1)] p-4 px-6 md:p-8 text-center ">
              <h2 className="h4 mb-4 hidden md:block">Offer summary</h2>
              <div className="flex flex-row md:flex-col items-center justify-between">
                <div className="text-[#706AEA] text-xl md:text-5xl font-bold mb-0 md:mb-2 order-2 md:order-1">
                  {price ? <h2> £{price}</h2> : <Loader size="xs" />}
                </div>
                <div className="font-bold text-xl md:text-base order-1 md:order-2">
                  1 Item
                </div>
              </div>
              <div className="flex py-4 gap-1">
                <Checkbox onChange={() => setAcceptOffer(!acceptOffer)} />
                <p>
                  {`I accept the offer of   £
                          ${price} and the `}
                  <span>terms and conditions*</span>
                </p>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!acceptOffer}
                type="button"
                className={` hover:scale-[1.05] ${
                  acceptOffer
                    ? "bg-blue-500 rounded-xl "
                    : "bg-gray-400 rounded-xl  cursor-not-allowed"
                } transition-all mt-4 w-full text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 bg-blue-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[65px]  xl:text-[18px]`}
              >
                Complete Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default summary
