import { Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import React from "react"

const Dashboard = () => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <div>
      <section className="overflow-hidden">
        <div className="flex h-[83.1vh] flex-col lg:flex-row">
          <div className="w-full lg:w-3/12 relative py-12 lg:py-24">
            <div className="absolute top-[0px] right-[-1.5rem] lg:right-[0px] bottom-[0px] min-w-[100vw] bg-[rgba(112,106,234,0.05)]" />
            <div className="relative lg:hidden">
              <select className="bg-white h-[67px] border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6 appearance-none">
                <option value="/my-account">Dashboard</option>
                <option value="/past-offers">Past offers</option>
                <option value="/edit-profile">My details</option>
                <option value="/refer-friend">Refer a friend</option>
                <option value="/marketing-preferences">
                  Marketing preferences
                </option>
                <option value="/edit-profile/edit-password">
                  Change password
                </option>
              </select>
              <svg
                width={14}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sort"
                className="svg-inline--fa fa-sort fa-w-10 absolute top-[25px] right-[25px] pointer-events-none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                />
              </svg>
            </div>
            <div className="hidden lg:flex">
              <ul className="pl-8">
                <li className="pb-5 last:pb-0 relative">
                  <div className="text-xl text-[#706AEA] absolute top-[-2px] left-[-18px]">
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
                  <a
                    title="Dashboard"
                    className="font-bold text-[#706AEA]"
                    href="/lego2sell-client/my-account"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="pb-5 last:pb-0 relative">
                  <a
                    title="My details"
                    className="font-bold false"
                    href="/lego2sell-client/edit-profile/"
                  >
                    My details
                  </a>
                </li>

                <li className="pb-5 last:pb-0 relative">
                  <a
                    title="Change password"
                    className="font-bold false"
                    href="/lego2sell-client/edit-profile/edit-password/"
                  >
                    Change password
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-9/12 lg:pl-20 py-12 lg:py-24">
            <h1 className="text-4xl font-extrabold mb-6">My dashboard</h1>
            <p className="mb-8 text-[#373845] font-bold">
              Packages you're sending
            </p>
            <div
              onClick={open}
              className="mb-4 last:mb-0 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-2xl p-6 px-8 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="mr-auto font-medium">
                  Offer ID: #5000374
                  <br className="md:hidden" />
                  <span className="md:hidden text-[#706AEA] font-bold">
                    £81.50
                  </span>
                </div>
                <div className="rounded-full text-xs px-6 py-2 font-bold bg-[#FDEDD0] text-[#F4A414] mr-7">
                  Pending
                </div>
                <div className="text-[#706AEA] font-bold mr-6 hidden md:flex">
                  £81.50
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
            <Modal
              title="Offer Details"
              centered
              opened={opened}
              onClose={close}
              withCloseButton={true}
            >
              <div className="absolute top-0 right-0 p-6 text-xl cursor-pointer">
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
                <div className="text-center py-6 px-6">
                  <h3 className="mr-auto text-lg font-medium mb-4">
                    Offer ID: #5000374
                  </h3>
                  <div className="rounded-full text-xs px-6 py-2 font-bold bg-[#FDEDD0] text-[#F4A414] w-full">
                    Pending
                  </div>
                  <div className="bg-[#F8F8FE] rounded-lg p-8 mt-8">
                    <div className="flex w-full items-center justify-between">
                      <div>Date &amp; Time</div>
                      <div>Jul 06, 2023 09:07</div>
                    </div>
                    <div className="flex w-full items-center justify-between mt-2">
                      <div>No. of items</div>
                      <div>2</div>
                    </div>
                    <div className="flex w-full items-center justify-between mt-2">
                      <div>Delivery method</div>
                      <div className="flex flex-col justify-end items-end">
                        Drop off
                        <a className="text-[#706AEA] font-bold text-xs cursor-pointer">
                          Change method
                        </a>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between mt-2">
                      <div>Status</div>
                      <div>Pending</div>
                    </div>
                    <hr className="mt-4" />
                    <div className="flex w-full items-center justify-between mt-4">
                      <div className="font-bold text-lg">Total offer value</div>
                      <div className="font-bold text-lg text-[#706AEA]">
                        £81.50
                      </div>
                    </div>
                    <div className="flex flex-col mt-8">
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
            </Modal>
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
