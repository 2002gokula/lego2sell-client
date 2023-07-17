import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./App.css"
import { Loader, Modal, Tooltip } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Helmet } from "react-helmet"
import ReactLoading from "react-loading"
import { useMediaQuery } from "react-responsive"
const App = () => {
  const [e, setE] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [opened, { open, close }] = useDisclosure(false)
  const navigation = useNavigate()
  // const storedUserId = localStorage.getItem("userId")
  const [opened1, setOpened] = useState(false)

  const handleSearch = async () => {
    try {
      setIsLoading(true) // Set loading state to true

      const response = await fetch(
        "https://long-tan-chicken-hem.cyclic.app/find-lego",
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
      // localStorage.setItem("data", data)
      localStorage.setItem("SearchValue", e)
      if (data.message === "SUCCESS") {
        navigation(`/lego2sell-client/product/`, {
          state: { data, e },
        })
      } else {
        open(true)
        setE("")
        // alert("Could not find the LEGO you are looking for.")
      }
    } catch {
      open(true)
      // alert("Could not find the LEGO you are looking for.")
    } finally {
      setIsLoading(false) // Set loading state back to false
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
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })
  // console.log(query)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lego2Sell | LEGO®</title>
        <meta property="og:title" content="Sell LEGO® | WeBuyBricks.co.uk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Sell, LEGO, sell2lego, lego" />
        <meta name="viewport" content="width=device-width" />
        <meta
          property="og:description"
          content="WeBuyBricks is the fast, FREE and easy way to sell LEGO® online for cash! We’ll buy complete collections or a mismatched bag of bricks - start selling now."
        />
      </Helmet>
      <div className="h-[87.6vh] lg:h-[85.6vh]">
        <div className="">
          <div className="">
            <div className="">
              <div className="flex items-center justify-center flex-col">
                <div className="mt-12">
                  <img
                    className="w-full object-contain h-[290px] py-4"
                    src="./Images/Logo.png"
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
                      src="./Images/SearchErrorMessage.jpg"
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
                    src="./Images/search-img-6ce3ac56.png"
                    alt="search-btn"
                  />
                </button>
                <br />
                <br />

                <Tooltip
                  color="blue"
                  multiline
                  opened={!isDesktopOrLaptop ? opened1 : null}
                  width={isDesktopOrLaptop ? 480 : 280}
                  withArrow
                  transitionProps={{ duration: 200 }}
                  label="To search your LEGO® set just type in the LEGO® ID code found on all LEGO® sets and hit enter or the search button. (Example: 77941)"
                >
                  <button
                    variant="outline"
                    onClick={() => setOpened((o) => !o)}
                    className="text-base font-medium text-gray-400"
                  >
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
