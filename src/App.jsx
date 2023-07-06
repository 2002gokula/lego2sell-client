import React, { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
import "./App.css"
import { Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
const App = () => {
  const [e, setE] = useState("")
  const [opened, { open, close }] = useDisclosure(false)
  const navigation = useNavigate()

  const handleSearch = async () => {
    try {
      const response = await fetch("https://api.lego2sell.com/find-lego", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemCode: e }),
      })
      const data = await response.json()
      console.log("Data", data)
      if (data.message == "SUCCESS") {
        // n.updateLegoData(data.body)

        navigation("/product", { state: { data, e } })
      } else {
        open(true)
        // alert("Could not find the LEGO you are looking for.")
      }
    } catch {
      open(true)
      // alert("Could not find the LEGO you are looking for.")
    }
  }
  const handleInputChange = (event) => {
    const inputValue = event.target.value
    const numericValue = inputValue.replace(/\D/g, "") // Remove non-digit characters

    if (numericValue.length <= 5) {
      setE(numericValue)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }
  return (
    <div>
      {" "}
      <div className="home">
        <div className="home-container">
          <div className="search-box">
            <div className="_home_hj7zo_1">
              {/* <form action=""> */}
              <div className="_home-container_hj7zo_4">
                <img
                  className="w-full object-contain h-[250px] mb-8"
                  src="/Images/search-bg-5c6c0b0a.png"
                  alt="search-img"
                />
                <Modal
                  size="lg"
                  opened={opened}
                  onClose={close}
                  title="Error"
                  centered
                >
                  <div className="flex items-center justify-center">
                    <img
                      className="w-3/4"
                      src="/Images/SearchErrorMessage.jpg"
                      alt=""
                    />
                  </div>
                  <div className="font-semibold mt-6 text-xl md:text-base order-1 md:order-2">
                    Could not find the LEGO you are looking for.
                  </div>
                  <p className="text-gray-400 text-base font-normal py-4">
                    We apologize for the inconvenience, but the LEGO set you are
                    searching for is currently unavailable on our website.
                    Please try searching for a different LEGO set or check back
                    later as our inventory is regularly updated. If you have any
                    further questions or need assistance, please feel free to
                    contact our customer support team. Thank you for your
                    understanding.
                  </p>
                  {/* Modal content */}
                </Modal>

                <div className="w-full flex items-center justify-center">
                  <input
                    placeholder="Enter LEGO Set Code here"
                    // disabled={e?.length === 5}
                    value={e}
                    onKeyPress={handleKeyPress}
                    onChange={handleInputChange}
                    type="number"
                    className="border px-6 w-full md:w-[50%] text-xl font-medium  py-4  rounded-2xl"
                    required
                  />
                </div>
                <button type="submit" onClick={handleSearch}>
                  <img
                    className="_search-btn_hj7zo_15"
                    src="/Images/search-img-6ce3ac56.png"
                    alt="search-btn"
                  />
                </button>
                <p className="text-base font-medium text-gray-400">
                  Search Help
                </p>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
