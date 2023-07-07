import { Loader } from "@mantine/core"
import React from "react"
import { useLocation } from "react-router-dom"

const SuccessPage = () => {
  const location = useLocation()
  const condition = location.state.condition
  const price = location.state.price
  return (
    <div>
      <section className="lg:pt-24 px-6 py-10">
        <div className=" md:text-center">
          <div className="text-5xl flex items-center justify-center lg:text-6xl mb-8">
            <svg
              width={44}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check-circle"
              className="svg-inline--fa fa-check-circle fa-w-16 text-[#69B832]"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              />
            </svg>
          </div>
          <h1 className="h1 mb-6">Thank you for selling your LEGO®</h1>
          <div className="text-base md:text-2xl">
            Your offer ID is
            <strong className="font-bold text-[#706AEA]">#5000374</strong> |
            You'll receive{" "}
            {price ? (
              <strong className="font-bold text-[#706AEA]">
                £{price.toFixed(4).slice(0, 4)}
              </strong>
            ) : (
              <Loader size="xs" />
            )}
          </div>
        </div>
      </section>
      <section className="py-10 lg:pb-24">
        <div className="">
          <h2 className="h3 mb-8 md:text-center">
            What you need to do next...
          </h2>
          <div className="relative">
            <div className="grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-none lg:grid-cols-3 gap-16">
              <div className="flex flex-col items-center justify-start text-center">
                <div className="flex items-center justift-center h-[190px]">
                  <img
                    alt=""
                    aria-hidden="true"
                    src="/Images/Image 1.png"
                    className="w-44"
                  />
                </div>
                <div className="font-extrabold mb-4 text-lg">
                  <span className="text-[#706AEA]">1.</span> Pack your LEGO®
                </div>
                <div className="text-[#87888F] leading-7 font-medium max-w-[366px] mx-auto">
                  Pack your LEGO® as per the packaging guidelines.
                </div>
                <div className="mt-auto">
                  <a
                    href="/packaging-guidelines"
                    target="_blank"
                    className="text-[#706AEA] font-bold"
                    title="Packaging guidelines"
                  >
                    Packaging guidelines
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start text-center">
                <div className="flex items-center justift-center h-[190px]">
                  <img
                    alt=""
                    className="w-44"
                    aria-hidden="true"
                    src="/Images/image 2.png"
                  />
                </div>
                <div className="font-extrabold mb-4 text-lg">
                  <span className="text-[#706AEA]">2.</span> Print your label
                </div>
                <div className="text-[#87888F] leading-7 font-medium max-w-[366px] mx-auto">
                  Print off your postage label and attach it. No printer? No
                  Problem just simply write it on some paper and clearly and
                  stick it on the package.
                </div>
                <div className="mt-6">
                  <a
                    className="text-[#706AEA] font-bold"
                    target="_blank"
                    title="EVRi Packing Label"
                    href="https://d2v4pwfq1wtp4e.cloudfront.net/64a684b913af71.38312776.pdf?Policy=ewogICJTdGF0ZW1lbnQiOlsKCXsKCSAgIlJlc291cmNlIjoiaHR0cHM6Ly9kMnY0cHdmcTF3dHA0ZS5jbG91ZGZyb250Lm5ldC82NGE2ODRiOTEzYWY3MS4zODMxMjc3Ni5wZGYiLAoJICAiQ29uZGl0aW9uIjp7CgkJIkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjogMTY4ODYzNjM1M30KCSAgfQoJfQogIF0KfQo_&Signature=BcKnyINnxW~8intzMtNpYPA-O5GPOy3ezYK3CZhArZzMB4sf0vPmvixWHAB9e5gE5M8mQTTAWr9oQ-SlOujxfcSacO7AxsUM1YcEmabwqaUHZHYU6wATaioC04Ud0pETDlZ8IxUX0rkE9zTJkZ9T2ARBoeSBurLMqohYAhN65p~PAdkp7~QOzKTMBnfR7qFW0V82bciYsGJKONLCB~WokIOyZrgY5oA9QfgYInAlRcIY3ThyXKIaNdKRNwWzG7jOvY0D-eh822YgwElq5GJQDiJK17hZir5UNJVTKNGFlFCIMJEnwsSKrMLhukpw~jK5Wx80pdxUAMCkOMAJTMRPJQ__&Key-Pair-Id=K15TXWZAX5M6EY"
                    rel="noreferrer"
                  >
                    Download your label
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start text-center">
                <div className="flex items-center justift-center h-[190px]">
                  <img
                    className="w-44"
                    alt=""
                    aria-hidden="true"
                    src="/Images/image 3.png"
                  />
                </div>
                <div className="font-extrabold mb-4 text-lg">
                  <span className="text-[#706AEA]">3.</span> Takle top a dropoff
                  point
                </div>
                <div className="text-[#87888F] leading-7 font-medium max-w-[366px] mx-auto">
                  Simply drop off your package(s) at the post office or Evri
                  point and they’ll deliver your LEGO® to us.
                </div>
                <div className="mt-auto">
                  <a
                    className="text-[#706AEA] font-bold mt-6"
                    target="_blank"
                    title="EVRi Drop Off point"
                    href="/store-locator"
                  >
                    Evri Postal Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuccessPage
