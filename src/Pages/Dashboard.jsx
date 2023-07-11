import { Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import axios from "axios"
import React, { useEffect, useState } from "react"
import OrderCards from "../componet/OrderCards"

const Dashboard = () => {
  const [orderitems, setOrderitems] = useState()
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
  console.log(totalPrice)
  return (
    <div>
      <section className="overflow-hidden h-[84.4vh]">
        <div className="flex flex-col px-6  lg:flex-row">
          <div className="w-full lg:w-9/12 lg:pl-20 py-12 lg:py-24">
            <h1 className="text-4xl font-extrabold mb-6">My dashboard</h1>
            <p className="mb-8 text-[#373845] font-bold">
              Packages you're sending
            </p>
            {orderitems?.map((value, index) => (
              <OrderCards
                length={orderitems.length}
                key={index}
                Deliverymethod={value.Deliverymethod}
                timestamp={value.timestamp}
                Price={value?.Price}
                Status={value?.Status}
                offerId={value?.offerId}
              />
            ))}

            <a
              title="Sell more Lego®"
              className="hover:scale-[1.05] transition-all ml-auto mt-10 lg:ml-0 text-center flex lg:inline-flex justify-center items-center px-6 lg:px-14 rounded-full bg-[#69B832] text-white font-bold text-[15px] h-[49px] lg:h-[65px] text-[15px] xl:text-[18px]"
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
        </div>
      </section>
    </div>
  )
}

export default Dashboard
