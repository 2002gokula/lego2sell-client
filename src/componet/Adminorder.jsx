import { Select } from "@mantine/core"
import axios from "axios"
import React, { useEffect, useState } from "react"

const Adminorder = ({ value, data }) => {
  const [OrderOpen, setOrderOpen] = useState()
  const [Status, setStatus] = useState("pending")
  console.log(Status)
  // console.log(value)
  // const UserData = [
  //   { title: "firstName", Value: data[0].firstName },
  //   { title: "firstName", Value: value.firstName },
  // ]
  const storedUserId = localStorage.getItem("userId")
  const orderId = "64ad7f1357889b3c19c57c9a"
  console.log("demoo", orderId)
  useEffect(() => {
    // Call the handleUpdate function when storedUserId, Status, or orderId changes
    handleUpdate()
  }, [storedUserId, Status, orderId])
  const handleUpdate = () => {
    axios
      .put(
        `https://wicked-shoe-cow.cyclic.app/Getorder/status/${storedUserId}`,
        {
          Status,
          orderId,
        }
      )
      .then((response) => {
        console.log("Data updated:", response.data)
        // Handle successful update
      })
      .catch((error) => {
        console.error("Error updating data:", error)
        // Handle error
      })
  }
  return (
    <div className="py-2">
      <div
        onClick={() => setOrderOpen(!OrderOpen)}
        className="last:mb-0 duration-300 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-2xl py-6 px-8 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="mr-auto font-medium">
            Offer ID: #3434
            <br className="md:hidden" />
            <span className="md:hidden text-[#706AEA] font-bold">£81.50</span>
          </div>
          <div className="rounded-full text-xs px-6 py-2 font-bold bg-[#FDEDD0] text-[#F4A414] mr-7">
            pending
          </div>
          <div className="text-[#706AEA] font-bold mr-6 hidden md:flex">
            £54545
          </div>
          <div className="text-[#706AEA] text-lg">
            <svg
              width={8}
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="angle-right"
              className="svg-inline--fa fa-angle-right fa-w-6 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                fill="currentColor"
                d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
              />
            </svg>
          </div>
        </div>
      </div>
      {OrderOpen && (
        <div className="bg-white duration-300 mt-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-2xl">
          <div className="flex items-start w-full flex-wrap">
            {value.Order.map((value) => (
              <div className="w-2/4">
                <div class="px-6 border-t">
                  <h1 class="text-2xl font-bold py-4 ">
                    What you be sending to
                  </h1>
                  <div class="flex lg:flex-row flex-col items-center py-6 border rounded-2xl  px-6 justify-between">
                    <div class="flex lg:flex-row flex-col items-center gap-6">
                      <img
                        class="w-44 object-contain  border rounded-lg px-4 border-gray-300 h-32"
                        src={value.ProductImg}
                        alt=""
                      />
                      <h3 class="text-lg font-semibold">
                        {value.ProductName} {value.ProductId}
                      </h3>
                    </div>
                    <div class="flex text-blue-500 font-bold items-center gap-6">
                      <h2> £{value.Price}</h2>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-0 lg:p-6 text-xl cursor-pointer">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="times"
                    className="svg-inline--fa fa-times fa-w-10 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-center py-6 px-2 lg:px-6">
                    <h3 className="mr-auto text-lg font-medium mb-4">
                      Offer ID: #{value.offerId}
                    </h3>
                    <div className="rounded-full text-xs px-2 lg:px-6 py-2 font-bold text-[#F4A414] w-full">
                      {/* {value.Status} */}
                      <Select
                        value={Status}
                        onChange={setStatus}
                        label="Change Product Status"
                        placeholder="Pick one"
                        data={[
                          { value: "pending", label: "pending" },
                          { value: "active", label: "active" },
                          { value: "complete", label: "complete" },
                          { value: "waitingList", label: "waitingList" },
                        ]}
                      />
                    </div>
                    <div className="rounded-full text-xs px-2 lg:px-6 py-2 font-bold bg-[#FDEDD0] text-[#F4A414] w-full">
                      {value.Status}
                    </div>
                    <div className="bg-[#F8F8FE] rounded-lg p-2 lg:p-8 mt-8">
                      <div className="flex flex-wrap w-full items-center justify-between">
                        <div>Date &amp; Time</div>
                        <div>{value.timestamp}</div>
                      </div>
                      <div className="flex  flex-wrap w-full items-center justify-between mt-2">
                        <div>No. of items</div>
                        <div>{value.noItems}</div>
                      </div>
                      <div className="flex  flex-wrap w-full items-center justify-between mt-2">
                        <div>Delivery method</div>
                        <div className="flex flex-col justify-end items-end">
                          paypal
                        </div>
                      </div>
                      <div className="flex  flex-wrap w-full items-center justify-between mt-2">
                        <div>Status</div>
                        <div>{value.Status}</div>
                      </div>
                      <hr className="mt-4" />
                      <div className="flex  flex-wrap w-full items-center justify-between mt-4">
                        <div className="font-bold text-lg">
                          Total offer value
                        </div>
                        <div className="font-bold text-lg text-[#706AEA]">
                          £{value.Price}
                        </div>
                      </div>
                      <div className="flex  flex-wrap flex-col mt-8">
                        <a
                          href="https://d2v4pwfq1wtp4e.cloudfront.net/64a684b913af71.38312776.pdf?Policy=ewogICJTdGF0ZW1lbnQiOlsKCXsKCSAgIlJlc291cmNlIjoiaHR0cHM6Ly9kMnY0cHdmcTF3dHA0ZS5jbG91ZGZyb250Lm5ldC82NGE2ODRiOTEzYWY3MS4zODMxMjc3Ni5wZGYiLAoJICAiQ29uZGl0aW9uIjp7CgkJIkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjogMTY4ODYzNjQ1NH0KCSAgfQoJfQogIF0KfQo_&Signature=NIycapoytwsz6RpIV9fTvHHBSphE~v7Sda5pjVKixPgBqtvpKwvnZooSwVQDpRhDKEn2mvClrn8ojlLJLlQNXOwM~Vnxc6vdxj-4YAWgvfxPRlIpxWrLNidHcfcBMm7DDNw9thg~LF~NS9Np2Yg8yoRtqqxi4o1gYUhLMBoelP3lUxUKakZlQE5LT07Vkt1DaFEQxHH3bTh1YrrpBcSKpN5Wm1rIIB0McBKpVc~Re98rp0oSeJE87l7EAFR8dIfwl3JUkHq15IJcGOpM-Wd~GV66jCd8l1UC2cDnnszt59OeGvb1~ejxYNHgw9DMylpD3urF62aCIqrv8IGi85t3OQ__&Key-Pair-Id=K15TXWZAX5M6EY"
                          target="_blank"
                          className="inline-flex w-auto justify-center items-center px-6 lg:px-12 rounded-full bg-[#69B832] text-white font-bold h-[49px] lg:h-[65px] text-[15px] xl:text-[15px] mb-2"
                          rel="noreferrer"
                          tabIndex={0}
                        >
                          Download and print label
                        </a>
                        <button
                          type="button"
                          className="font-bold text-[#706AEA]"
                        >
                          Re-Send label email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
          <div class="px-6 my-4 py-4 rounded-xl">
            {/* {data.map((value) => ( */}
            <div className="">
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">Name:</h3>
                <h6 class="text-base">
                  {data[0].firstName}
                  {data[0].lastName} {data[0].title}
                </h6>
              </div>
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">lastName:</h3>
                <h6 class="text-base">{data[0].lastName} </h6>
              </div>
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">email:</h3>
                <h6 class="text-base">{data[0].email} </h6>
              </div>
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">Telephone:</h3>
                <h6 class="text-base">{data[0].Telephone} </h6>
              </div>
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">StreetAddress1:</h3>
                <h6 class="text-base">{data[0].StreetAddress1} </h6>
              </div>
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">paymentMethod:</h3>
                <h6 class="text-base">{data[0].paymentMethod} </h6>
              </div>
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">Paypalemail :</h3>
                <h6 class="text-base">{data[0].Paypalemail} </h6>
              </div>
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">Country :</h3>
                <h6 class="text-base">{data[0].Country} </h6>
              </div>
              <div class="flex items-center py-1 gap-4">
                <h3 class="text-base font-semibold">city :</h3>
                <h6 class="text-base">{data[0].city} </h6>
              </div>

              {/* {console.log("dde33434343mo", data[0])} */}
            </div>
            {/* ))} */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Adminorder
