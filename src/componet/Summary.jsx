import { Checkbox, Group, Loader, Radio } from "@mantine/core"
import React from "react"
import { Link } from "react-router-dom"

const summary = ({ data, price, SearchValue }) => {
  console.log("SearchValue", SearchValue)
  return (
    <>
      <h1 className="text-4xl py-4 font-bold text-center">Offer Summary</h1>
      <div className="flex space-x-8">
        <div className="flex-1">
          <div className="py-12">
            <h1 className="text-2xl font-bold ">
              How are you sending your LEGO?*
            </h1>

            <p className="text-gray-500 py-1">Select your preferred method*</p>
            <div className="">
              <div className="py-8">
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
                      {/* <img
      className="w-24"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
      alt=""
    /> */}
                    </div>
                  </Group>
                </Radio.Group>
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold ">Your Details</h1>
                  <button className="text-blue-500">Edit</button>
                </div>
                <div className="border px-6 my-4 py-4 rounded-xl">
                  <div className="flex items-center gap-4">
                    <h3 className="text-base">Name:</h3>
                    <h6 className="text-base">Demo</h6>
                  </div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-base">Name:</h3>
                    <h6 className="text-base">Demo</h6>
                  </div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-base">Name:</h3>
                    <h6 className="text-base">Demo</h6>
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl font-bold py-4 ">
                  What you be sending us
                </h1>
                <div className="flex items-center py-6 border rounded-2xl  px-6 justify-between">
                  <div className="flex items-center gap-6">
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
                      <h2>${price.body.lowestPrice}</h2>
                    ) : (
                      <Loader size="xs" />
                    )}
                    <button onClick={() => navigation("/")}>
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
                  {price ? (
                    <h2>${price.body.lowestPrice}</h2>
                  ) : (
                    <Loader size="xs" />
                  )}
                </div>
                <div className="font-bold text-xl md:text-base order-1 md:order-2">
                  1 Item
                </div>
              </div>
              <div className="flex">
                <Checkbox />
                <p>
                  {`I accept the offer of  $${price.body.lowestPrice} and the `}{" "}
                  <span>terms and conditions*</span>
                </p>
              </div>
              <Link
                to="/success"
                // onClick={nextStep}
                type="button"
                className="hover:scale-[1.05] transition-all mt-4 w-full text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-full bg-blue-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[65px]  xl:text-[18px]"
              >
                Complete Offer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default summary
