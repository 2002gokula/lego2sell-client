import React, { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
import "./App.css"
import { Modal, Tooltip } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
const App = () => {
  const [e, setE] = useState("")
  const [opened, { open, close }] = useDisclosure(false)
  const navigation = useNavigate()

  const handleSearch = async () => {
    try {
      const response = await fetch(
        "https://wicked-shoe-cow.cyclic.app/find-lego",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemCode: e }),
        }
      )
      const data = await response.json()
      console.log("Data", data)
      if (data.message == "SUCCESS") {
        // n.updateLegoData(data.body)
        navigation("/lego2sell-client/product", { state: { data, e } })
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
      <div className="h-full lg:h-[85.6vh]">
        <div className="">
          <div className="">
            <div className="">
              <div className="flex items-center justify-center flex-col">
                <div className="mt-12">
                  <img
                    className="w-full object-contain h-[290px] py-4"
                    src="/Images/Logo.png"
                    alt="search-img"
                  />
                </div>
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

                <div className="w-full px-6 flex items-center justify-center">
                  <input
                    placeholder="Enter LEGO® Set Code here"
                    // disabled={e?.length === 5}
                    value={e}
                    onKeyPress={handleKeyPress}
                    onChange={handleInputChange}
                    type="text"
                    className="border px-6 py-4 w-full md:w-[50%] text-xl font-medium  rounded-2xl"
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
                <br />
                <br />
                <Tooltip
                  label="To search your LEGO® set just type in the LEGO® ID code found on all LEGO® sets and hit enter or the search button. (Example: 77941)"
                  color="blue"
                  withArrow
                >
                  <button className="text-base font-medium text-gray-400">
                    search help
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
