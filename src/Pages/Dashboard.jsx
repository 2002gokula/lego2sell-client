import { Modal, Select } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import axios from "axios"
import React, { useEffect, useState } from "react"
import OrderCards from "../componet/OrderCards"
import { useNavigate } from "react-router-dom"
import MyDetails from "../componet/MyDetails"
import { useForm } from "@mantine/form"

const Dashboard = () => {
  const [orderitems, setOrderitems] = useState()
  const navigation = useNavigate()
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(orderitems)
  const storedUserId = localStorage.getItem("userId")
  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await axios.get(
          `https://wicked-shoe-cow.cyclic.app/Getorder/${storedUserId}`
        )

        if (response.status === 200) {
          const { orders } = response.data
          console.log("User orders:", orders)
          setOrderitems(orders)
          // Process the orders data as needed
        } else {
          throw new Error("Error: " + response.status)
        }
      } catch (error) {
        console.error("An error occurred:", error)
        // Handle the error as needed
      }
    }

    fetchUserOrders()
  }, [storedUserId, setOrderitems])
  useEffect(() => {
    if (orderitems) {
      const totalPrice = orderitems.reduce(
        (sum, value) => sum + (value?.Price || 0),
        0
      )
      setTotalPrice(totalPrice)
      localStorage.setItem("totalPrice", totalPrice.toFixed(2))
    }
  }, [orderitems])
  const [SidebarActive, setSidebarActive] = useState(0)
  const DashboardSidebar = [
    {
      title: "Dashboard",
    },
    { title: "Past offers" },
    { title: "My details" },
    { title: "Marketing Preferences" },
    { title: "Change password" },
    { title: "Logout" },
  ]
  const form = useForm({
    initialValues: {
      MarketingPreferences: "",
    },

    validate: {},
  })

  // console.log(totalPrice)
  return (
    <div>
      <section className="overflow-y-scroll lg:flex-row flex-col flex h-[84vh]">
        <div class="w-full lg:w-4/12 relative py-12 lg:py-24">
          <div class="absolute top-[0px] right-[1.5rem] lg:right-[0px] bottom-[0px] min-w-full lg:min-w-[100vw] bg-[rgba(112,106,234,0.05)]"></div>

          <div class="hidden lg:flex">
            <ul class="xl:pl-24 pl-12 flex items-start flex-col">
              {DashboardSidebar.map((value, index) => (
                <button
                  onClick={() => setSidebarActive(index)}
                  class="pb-5 last:pb-0 relative"
                >
                  {SidebarActive === index && (
                    <div class="text-xl text-[#706AEA] absolute top-[-2px] left-[-18px]">
                      <svg
                        className="pt-1"
                        width={7}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="angle-right"
                        class="svg-inline--fa fa-angle-right fa-w-6 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192 512"
                      >
                        <path
                          fill="currentColor"
                          d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
                        ></path>
                      </svg>
                    </div>
                  )}
                  <button
                    onClick={
                      value.title === "Logout"
                        ? () => {
                            localStorage.setItem("userId", "")
                            const storedUserId = localStorage.getItem("userId")
                            console.log(storedUserId)
                            navigation("/lego2sell-client/")
                          }
                        : console.log("demo")
                    }
                    title="Dashboard"
                    class={`font-bold ${
                      SidebarActive === index ? "text-[#706AEA]" : ""
                    } `}
                  >
                    {value.title}
                  </button>
                </button>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col px-6 lg:px-24 w-full  lg:flex-row">
          {SidebarActive === 0 && (
            <div className="w-full lg:pl-20 py-12 lg:py-24">
              <h1 className="text-4xl font-extrabold mb-6">My dashboard</h1>
              <p className="mb-8 text-[#373845] font-bold">
                Packages you're sending
              </p>
              {orderitems?.length === 0 ? (
                <p>No order available.</p>
              ) : (
                orderitems?.map((value, index) => (
                  <OrderCards
                    items={index + 1}
                    length={orderitems.length}
                    key={index}
                    Deliverymethod={value.Deliverymethod}
                    timestamp={value.timestamp}
                    Price={value?.Price}
                    Status={value?.Status}
                    offerId={value?.offerId}
                  />
                ))
              )}

              <a
                title="Sell more Lego®"
                className="hover:scale-[1.05] mb-12 transition-all ml-auto mt-10 lg:ml-0 text-center flex lg:inline-flex justify-center items-center px-6 lg:px-14 rounded-full bg-[#69B832] text-white font-bold text-[15px] h-[49px] lg:h-[65px] text-[15px] xl:text-[18px]"
                href="/lego2sell-client"
              >
                Sell more LEGO®
              </a>
              <div className="lg:hidden mt-10">
                <ul>
                  <li className="relative">
                    <a
                      href="/lego2sell-client/"
                      className="font-bold flex justify-center font-bold w-full items-center text-[#E52D3B] cursor-pointer h-[49px]"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {SidebarActive === 1 && (
            <div className="w-full lg:pl-20 py-12 lg:py-24">
              <h1 className="text-4xl font-extrabold mb-6">Past offers</h1>
              <p className="mb-8 text-[#373845] font-bold">
                Here is a list of your past offers...
              </p>
              {orderitems?.length === 0 ? (
                <p>No order available.</p>
              ) : (
                orderitems?.map((value, index) => (
                  <OrderCards
                    items={index + 1}
                    length={orderitems.length}
                    key={index}
                    Deliverymethod={value.Deliverymethod}
                    timestamp={value.timestamp}
                    Price={value?.Price}
                    Status={value?.Status}
                    offerId={value?.offerId}
                  />
                ))
              )}

              <a
                title="Sell more Lego®"
                className="hover:scale-[1.05] mb-12 transition-all ml-auto mt-10 lg:ml-0 text-center flex lg:inline-flex justify-center items-center px-6 lg:px-14 rounded-full bg-[#69B832] text-white font-bold text-[15px] h-[49px] lg:h-[65px] text-[15px] xl:text-[18px]"
                href="/lego2sell-client"
              >
                Sell more LEGO®
              </a>
              <div className="lg:hidden mt-10">
                <ul>
                  <li className="relative">
                    <a
                      href="/lego2sell-client/"
                      className="font-bold flex justify-center font-bold w-full items-center text-[#E52D3B] cursor-pointer h-[49px]"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {SidebarActive === 2 && <MyDetails />}
          {SidebarActive === 3 && (
            <div className="">
              <div className="w-full lg:pl-20 py-12 lg:py-24">
                <h1 className="mb-6 text-2xl lg:text-5xl font-bold h1">
                  Marketing Preferences
                </h1>
                <p className="mb-4">
                  <strong>
                    You're in control. Please update your marketing preferences.
                  </strong>
                </p>
                <form
                  onSubmit={form.onSubmit((values) => console.log(values))}
                  method="post"
                  className="my-6"
                >
                  <label className="w-full flex font-bold text-sm mb-2">
                    Do you want to hear about special offers, voucher codes and
                    our latest news?
                  </label>
                  {/* <select
                    name="marketingPreference"
                    className="h-[67px] border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6"
                  >
                    <option value={1}>Yes</option>
                    <option value={0}>No</option>
                  </select> */}
                  <Select
                    defaultValue={"Yes"}
                    {...form.getInputProps("MarketingPreferences")}
                    searchable
                    data={["Yes", "No"]}
                  />
                  <button
                    type="submit"
                    className="cursor-pointer bg-blue-500 text-white rounded-xl h-[80px] mt-10 px-16 inline-flex items-center justify-center font-bold text-lg"
                  >
                    Confirm preferences
                  </button>
                </form>
                <div className="lg:hidden mt-10">
                  <ul>
                    <li className="relative">
                      <a className="font-bold flex justify-center font-bold w-full items-center text-[#E52D3B] cursor-pointer h-[49px]">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {SidebarActive === 4 && (
            <div className="w-full lg:w-9/12 lg:pl-20 py-12 lg:py-24">
              <h1 className="h1 mb-8">Recover your password</h1>
              <form
                id="forgotpassword"
                name="forgotpassword"
                action=""
                method="post"
              >
                <p className="mb-6">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>
                <div className="mb-8">
                  <label className="w-full flex font-bold text-sm mb-2">
                    Email<span className="text-[#E52D3B]">*</span>
                  </label>
                  <input
                    name="customer_email"
                    id="customer_email"
                    className="h-[67px] border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6"
                    placeholder="Your email"
                    type="email"
                    defaultValue=""
                  />
                </div>
                <input
                  disabled=""
                  type="button"
                  className="cursor-pointer bg-[#69B832] text-white rounded-full h-[80px] w-full flex items-center justify-center font-bold text-lg"
                  defaultValue="Send link"
                />
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
