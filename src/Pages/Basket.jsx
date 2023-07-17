import { Loader } from "@mantine/core"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useLocation, useNavigate } from "react-router-dom"

const Basket = () => {
  const location = useLocation()
  const navigation = useNavigate()
  // const data = location.state && location.state.data
  const SearchValue = location.state.SearchValue
  const condition = location.state.condition
  const [price, setPrice] = useState(null)
  const storedUserId = localStorage.getItem("userId")
  const [data, setData] = useState()
  const route = location.pathname
  console.log("demo9999", price)
  useEffect(() => {
    const fetchData = async () => {
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
        console.log("Data", data)
        setData(data)
      } catch (error) {
        console.log(error)
        // alert("Could not find the LEGO you are looking for.")
      } finally {
        console.log("Complete")
        // Set loading state back to false
      }
    }

    fetchData() // Call the fetchData function
  }, [SearchValue])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://long-tan-chicken-hem.cyclic.app//calculate-price",
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
        setPrice(discountedPrice)
        localStorage.setItem("Price", discountedPrice.toFixed(2))
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
    <div className="lg:px-12 lg:flex-row flex-col px-4 h-[88vh] lg:h-[84vh] space-x-0 lg:space-x-8 items-start flex py-8">
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Sell LEGO® | WeBuyBricks.co.uk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Sell, LEGO, sell2lego, lego" />
        <meta name="viewport" content="width=device-width" />
        <meta
          property="og:description"
          content="WeBuyBricks is the fast, FREE and easy way to sell LEGO® online for cash! We’ll buy complete collections or a mismatched bag of bricks - start selling now."
        />
      </Helmet>
      <div className="border w-full flex-1 py-6 px-4 lg:px-12  border-gray-300 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img
              className="lg:w-44 w-26 py-2 object-contain  border rounded-lg px-4 border-gray-300 h-14 lg:h-32"
              src={data?.body?.image_url}
              alt=""
            />
            <h3 className="text-lg font-semibold">
              {data?.body?.name} {SearchValue}
            </h3>
          </div>
          <div className="flex items-center lg:py-0 py-4 gap-6">
            {price ? (
              <h2 className="text-[#706AEA] font-semibold">
                £{price.toFixed(2)}
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
      <div className="flex-1 w-full lg:flex-[0.4]">
        <div className="w-full  mt-10 md:mt-0  md:relative bottom-0 left-0 right-0 z-10">
          <div className="bg-white rounded-2xl  shadow-[0_4px_25px_rgba(38,50,92,0.1)] p-4 px-6 md:p-8 text-center ">
            <h2 className="h4 mb-4 hidden md:block">Offer summary</h2>
            <div className="flex flex-row md:flex-col items-center justify-between">
              <div className="text-[#706AEA] text-xl md:text-5xl font-bold mb-0 md:mb-2 order-2 md:order-1">
                {price ? <h2> £{price.toFixed(2)}</h2> : <Loader size="xs" />}
              </div>
              <div className="font-bold text-xl md:text-base order-1 md:order-2">
                1 Item
              </div>
            </div>
            <button
              onClick={() => {
                if (storedUserId === "") {
                  navigation("/lego2sell-client/login/", {
                    state: { route },
                  })
                } else {
                  navigation("/lego2sell-client/check-your-details", {
                    state: { data, price, SearchValue, condition },
                  })
                }
              }}
              type="button"
              className="hover:scale-[1.05] transition-all mt-4 w-full text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-xl bg-blue-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[65px]  xl:text-[18px]"
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
