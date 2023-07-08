import { Loader } from "@mantine/core"
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Basket = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const data = location.state && location.state.data
  const SearchValue = location.state.SearchValue
  const condition = location.state.condition
  const [price, setPrice] = useState(null)
  console.log(price)
  // console.log("Discounted Price:", discountedPrice)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://wicked-shoe-cow.cyclic.app/calculate-price",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ itemCode: SearchValue }),
          }
        )

        const priceData = await response.json()
        console.log("Data", priceData)
        const originalPrice = priceData.body.price.qty_avg_price
        const discountPercentage = condition
        const discount = originalPrice * (discountPercentage / 100)
        const discountedPrice = originalPrice - discount
        if (priceData.message === "SUCCESS") {
          setPrice(discountedPrice)
        } else {
          alert("Could not find the LEGO you are looking for.")
        }
      } catch {
        alert("Could not find the LEGO you are looking for.")
      }
    }

    fetchData()
  }, [SearchValue])

  return (
    <div className="lg:px-12  px-4 h-full lg:h-[84vh] space-x-0 lg:space-x-8 items-start flex py-8">
      <div className="border w-full flex-1 py-6 px-4 lg:px-12  border-gray-300 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img
              className="lg:w-44 w-26 py-2 object-contain  border rounded-lg px-4 border-gray-300 h-14 lg:h-32"
              src={data.body.image_url}
              alt=""
            />
            <h3 className="text-lg font-semibold">
              {data.body.name} {SearchValue}
            </h3>
          </div>
          <div className="flex items-center lg:py-0 py-4 gap-6">
            {price ? (
              <h2 className="text-blue-500 font-semibold">
                £{price.toFixed(5).slice(0, 5)}
              </h2>
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
      <div className="lg:flex-[0.4]">
        <div className="w-full  mt-10 md:mt-0 fixed md:relative bottom-0 left-0 right-0 z-10">
          <div className="bg-white rounded-2xl  shadow-[0_4px_25px_rgba(38,50,92,0.1)] p-4 px-6 md:p-8 text-center md:sticky md:top-[160px]">
            <h2 className="h4 mb-4 hidden md:block">Offer summary</h2>
            <div className="flex flex-row md:flex-col items-center justify-between">
              <div className="text-[#706AEA] text-xl md:text-5xl font-bold mb-0 md:mb-2 order-2 md:order-1">
                {price ? (
                  <h2> £{price.toFixed(5).slice(0, 5)}</h2>
                ) : (
                  <Loader size="xs" />
                )}
              </div>
              <div className="font-bold text-xl md:text-base order-1 md:order-2">
                1 Item
              </div>
            </div>
            <button
              onClick={() =>
                navigation("/lego2sell-client/check-your-details", {
                  state: { data, price, SearchValue, condition },
                })
              }
              type="button"
              className="hover:scale-[1.05] transition-all mt-4 w-full text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-full bg-green-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[65px]  xl:text-[18px]"
            >
              Accept Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket
