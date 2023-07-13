import { Checkbox, Group, Loader, Radio } from "@mantine/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Country, State, City } from "country-state-city"
const summary = ({
  data,
  price,
  SearchValue,
  condition,
  prevStep,
  formData,
  storedUserId,
}) => {
  // console.log("SearchValue", SearchValue)
  const navigation = useNavigate()
  const [sendMethod, setSendMethod] = useState("Dropoff")
  console.log(formData)
  const [acceptOffer, setAcceptOffer] = useState()
  const [details, setDetails] = useState()
  const payload = {
    Deliverymethod: sendMethod,
    Price: price ? price.toFixed(2) : null,
    noItems: 2,
    Status: "pending",
    ProductName: data.body.name,
    ProductId: SearchValue,
    ProductImg: data.body.image_url,
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://wicked-shoe-cow.cyclic.app/Mydetails/${storedUserId}`
        )
        setDetails(response.data.Mydetails[0])
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
        `https://wicked-shoe-cow.cyclic.app/Getorder/${storedUserId}`,
        payload
      )

      console.log("workingsdsd", response.data)
    } catch (error) {
      console.error(error)
    }
    navigation("/lego2sell-client/success", {
      state: { data, price, SearchValue, condition },
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <h1 className="text-4xl py-4 font-bold text-center">Offer Summary</h1>
      <div className="flex lg:flex-row flex-col space-x-0 lg:space-x-8">
        <div className="flex-1">
          <div className="py-12">
            <h1 className="text-2xl font-bold ">
              How are you sending your LEGO?*
            </h1>

            <p className="text-gray-500 py-1">Select your preferred method*</p>
            <div className="">
              {/* <div className="py-8">
                <Radio.Group withAsterisk>
                  <Group mt="xs">
                    <div className="flex relative items-center gap-4 border rounded-xl px-8 py-7">
                      <Radio value="react" label="Drop off your trade" />
                      <div className=" bg-blue-500 px-4 py-1 rounded-t-lg text-white absolute -top-8 left-0">
                        ⭐ Recommended
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border rounded-xl px-8 py-6">
                      <Radio value="svelte" label="Home Collection" />
                     
                    </div>
                  </Group>
                </Radio.Group>
              </div> */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-14">
                <label
                  htmlFor="deliverymethoddropoff"
                  className={` mt-10 relative ${
                    sendMethod === "Dropoff" ? "border-[#706AEA]" : ""
                  } border-2 bg-white rounded-lg rounded-tl-none shadow-[0_4px_25px_rgba(38,50,92,0.1)] cursor-pointer`}
                >
                  <div
                    className={`font-bold absolute top-[-42px] left-[-2px] p-4 py-2  ${
                      sendMethod === "Dropoff" ? "bg-[#706AEA]" : "bg-gray-300"
                    }  text-white rounded-t-lg`}
                  >
                    ⭐️ Recommended
                  </div>
                  <div className="p-6 border  py-10 flex items-center justify-between">
                    <input
                      value={sendMethod === "Dropoff"}
                      onChange={(e) => setSendMethod("Dropoff")}
                      type="radio"
                      id="deliverymethoddropoff"
                      name="deliverymethod"
                      className="w-[23px] h-[23px]"
                      defaultValue="dropoff"
                      defaultChecked={true}
                    />
                    <div
                      className={` ${
                        sendMethod === "Dropoff"
                          ? " text-[#373845]"
                          : "text-gray-400"
                      }   font-bold text-lg mr-auto ml-4`}
                    >
                      Drop off your trade
                    </div>
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="./Images/evri.webp"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                        />
                      </span>
                      <img
                        src="./Images/evri.webp"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript />
                    </span>
                  </div>
                  <div className="relative rounded-b-lg bg-[rgba(112,106,234,0.05)] p-6 py-10">
                    <div
                      className={`rounded-full   ${
                        sendMethod === "Dropoff"
                          ? "bg-[#706AEA]"
                          : "bg-gray-300"
                      }   text-white font-bold text-sm p-1 px-4 absolute top-[-10px]`}
                    >
                      Fastest Method
                    </div>
                    <div
                      className={`  ${
                        sendMethod === "Dropoff"
                          ? "text-[#706AEA]"
                          : "text-gray-400"
                      }  text-sm md:tracking-wide`}
                    >
                      <strong>No printer? No problem.</strong> The majority of
                      Evri drop off points allow you to print your label in
                      store - by scanning the QR code on your confirmation
                      email.
                    </div>
                  </div>
                </label>
                <label
                  htmlFor="deliverymethodcollection"
                  className={`xl:mt-10  ${
                    sendMethod === "Homecollection" ? "border-[#706AEA]" : ""
                  } bg-white rounded-lg overflow-hidden border-2 shadow-[0_4px_25px_rgba(38,50,92,0.1)] cursor-pointer`}
                >
                  <div className="p-6 py-10 flex items-center justify-between">
                    <input
                      value={sendMethod === "Homecollection"}
                      onChange={(e) => setSendMethod("Homecollection")}
                      type="radio"
                      id="deliverymethodcollection"
                      name="deliverymethod"
                      className="w-[23px] h-[23px]"
                      defaultValue="Homecollection"
                    />
                    <div
                      className={` ${
                        sendMethod === "Homecollection"
                          ? "text-[#706AEA]"
                          : "text-gray-400"
                      } font-bold text-lg mr-auto ml-4`}
                    >
                      Home collection
                    </div>
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="./Images/evri.webp"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                        />
                      </span>
                      <img
                        src="./Images/evri.webp"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript />
                    </span>
                  </div>
                  <div className="bg-[rgba(55,56,69,0.05)] p-6 py-10 h-full">
                    <div
                      className={`${
                        sendMethod === "Homecollection"
                          ? "text-[#706AEA]"
                          : "text-gray-400"
                      }  text-sm md:tracking-wide`}
                    >
                      <strong>Printer required.</strong> Can't get to a drop off
                      point? Simply arrange a convenient collection date &amp;
                      time when you check out.
                    </div>
                  </div>
                </label>
              </div>

              <div className="">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold ">Your Details</h1>
                  <button onClick={prevStep} className="text-blue-500">
                    Edit
                  </button>
                </div>
                <div className="border px-6 my-4 py-4 rounded-xl">
                  <div className="flex items-center py-1 gap-4">
                    <h3 className="text-base font-semibold">Name:</h3>
                    <h6 className="text-base">
                      {details?.firstName} {details?.lastName}
                    </h6>
                  </div>
                  <div className="flex items-center  py-1 gap-4">
                    <h3 className="text-base font-semibold">Email:</h3>
                    <h6 className="text-base">{details?.email}</h6>
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
              </div>
              <div className="">
                <h1 className="text-2xl font-bold py-4 ">
                  What you be sending us
                </h1>
                <div className="flex lg:flex-row flex-col items-center py-6 border rounded-2xl  px-6 justify-between">
                  <div className="flex lg:flex-row flex-col items-center gap-6">
                    <img
                      className="w-44 object-contain  border rounded-lg px-4 border-gray-300 h-32"
                      src={data.body.image_url}
                      alt=""
                    />
                    <h3 className="text-lg font-semibold">
                      {data.body.name} {SearchValue}
                    </h3>
                  </div>
                  <div className="flex text-blue-500 font-bold items-center gap-6">
                    {price ? (
                      <h2> £{price.toFixed(2)}</h2>
                    ) : (
                      <Loader size="xs" />
                    )}
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
          <div className="w-full sticky top-12 mt-10 md:mt-0  md:relative bottom-0 left-0 right-0 z-10">
            <div className="bg-white rounded-2xl  shadow-[0_4px_25px_rgba(38,50,92,0.1)] p-4 px-6 md:p-8 text-center md:sticky md:top-[160px]">
              <h2 className="h4 mb-4 hidden md:block">Offer summary</h2>
              <div className="flex flex-row md:flex-col items-center justify-between">
                <div className="text-[#706AEA] text-xl md:text-5xl font-bold mb-0 md:mb-2 order-2 md:order-1">
                  {price ? <h2> £{price.toFixed(2)}</h2> : <Loader size="xs" />}
                </div>
                <div className="font-bold text-xl md:text-base order-1 md:order-2">
                  1 Item
                </div>
              </div>
              <div className="flex gap-1">
                <Checkbox onChange={() => setAcceptOffer(!acceptOffer)} />
                <p>
                  {`I accept the offer of   £
                          ${price.toFixed(2)} and the `}
                  <span>terms and conditions*</span>
                </p>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!acceptOffer}
                type="button"
                className={` hover:scale-[1.05] ${
                  acceptOffer
                    ? "bg-blue-500 "
                    : "bg-gray-400 cursor-not-allowed"
                } transition-all mt-4 w-full text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-full  hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[65px]  xl:text-[18px]`}
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
