import { Accordion, Avatar, Group, Modal, Text } from "@mantine/core"
import React, { useEffect, useRef, useState } from "react"
import { charactersList } from "./FAQData"
import { Link } from "react-router-dom"

const Header = () => {
  const [FAQOpen, setFAQOpen] = useState()

  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ))
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setFAQOpen(false)
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setFAQOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="flex border-b items-center w-full justify-between"
    >
      {/* <div className="_left-section_ciok2_10">
        <a className="_nav-link_ciok2_22 _left-section_ciok2_10" href="/">
          Menus
        </a>

        <button
          className="_nav-link_ciok2_22 _left-section_ciok2_10"
          onClick={() => setFAQOpen(!FAQOpen)}
        >
          FAQ's
        </button>
        {FAQOpen && (
          <div className="w-[40%] rounded-2xl shadow-2xl px-6 h-screen overflow-y-scroll absolute top-16 left-36 z-50 bg-white py-12 lg:py-12">
            <h1 className="text-2xl font-bold py-6">
              Frequently asked questions{" "}
            </h1>
            <div className="content-wrapper">
              <div>
                <div>
                  <p>
                    <img
                      src="https://revival-strapi.s3.eu-west-2.amazonaws.com/frequently_asked_questions_f371730e95.webp"
                      alt="frequently-asked-questions.webp"
                    />
                  </p>
                  <p className="font-semibold text-base text-gray-500 py-4">
                    Got a question? Well, you’re in the right place. To find
                    answers to all of our common queries, check out our FAQs
                    below. If you still can’t find an answer to your question or
                    need help with something else, get in touch with us and
                    we’ll guide you as best we can.
                  </p>
                </div>
              </div>
              <div
                className="mt-12 border-t border-[#CCCCCC]"
                itemScope=""
                itemType="https://schema.org/FAQPage"
              >
                <div
                  className="border-b border-[#CCCCCC]"
                  itemScope=""
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div className="">
                    {" "}
                    <Accordion chevronPosition="right">{items}</Accordion>
                  </div>
                </div>
                <div className="mt-16">
                  <h4 className="h4 mb-4 text-black">
                    Can't find an answer to your question?
                  </h4>
                  <p>
                    If you still need help and would like to contact us, you can
                    call us on weekdays from 9 am - 5 pm on{" "}
                    <a
                      href="tel:01706248282"
                      className="font-bold text-[#706AEA]"
                    >
                      Phone Numberr
                    </a>{" "}
                    or email us any time at{" "}
                    <a
                      href="mailto:info@webuybricks.co.uk"
                      className="font-bold text-[#706AEA]"
                    >
                      Email Demo
                    </a>
                    . Alternatively, you can visit our contact us page and use
                    our web form to submit your enquiry. A member of our
                    customer service team will be in contact to help you with
                    your questions.
                  </p>
                  <a
                    title="Contact our team"
                    className="button"
                    href="/contact/"
                  >
                    Contact our team
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link to={"/how-it-works"} className="_right-section_ciok2_15">
        <div className="_nav-option_ciok2_43">
          <div className="_option-column_ciok2_38">
            <p className="_option-heading_ciok2_49">How It Works?</p>
            <p className="_option-text_ciok2_53">Just 4 Easy Steps</p>
          </div>
          <div className="_option-column_ciok2_38">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              color="#e01f59"
              height={30}
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(224, 31, 89)" }}
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={12} y1={8} x2={12} y2={12} />
              <line x1={12} y1={16} x2="12.01" y2={16} />
            </svg>
          </div>
        </div>
        <div className="_nav-option_ciok2_43">
          <div className="_option-column_ciok2_38">
            <p className="_option-heading_ciok2_49">Start Selling</p>
            <p className="_option-text_ciok2_53">0 Item | $0.00</p>
          </div>
          <div className="_option-column_ciok2_38">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              color="#e01f59"
              height={30}
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(224, 31, 89)" }}
            >
              <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
              <path
                fillRule="evenodd"
                d="M6 1a2.498 2.498 0 0 1 4 0c.818 0 1.545.394 2 1 .67 0 1.552.57 2 1h-2c-.314 0-.611-.15-.8-.4-.274-.365-.71-.6-1.2-.6-.314 0-.611-.15-.8-.4a1.497 1.497 0 0 0-2.4 0c-.189.25-.486.4-.8.4-.507 0-.955.251-1.228.638-.09.13-.194.25-.308.362H3c.13-.147.401-.432.562-.545a1.63 1.63 0 0 0 .393-.393A2.498 2.498 0 0 1 6 1z"
              />
            </svg>
          </div>
        </div>
      </Link>
      <div className="_bottom-border_ciok2_57">
        <div className="_color-segment_ciok2_66 _segment-blue_ciok2_70" />
        <div className="_color-segment_ciok2_66 _segment-red_ciok2_74" />
        <div className="_color-segment_ciok2_66 _segment-yellow_ciok2_78" />
        <div className="_color-segment_ciok2_66 _segment-blue_ciok2_70" />
        <div className="_color-segment_ciok2_66 _segment-green_ciok2_82" />
      </div> */}
      <div className="flex justify-between w-full px-6 py-4 items-center">
        <div className="flex gap-8 items-center">
          <Link to="/" className="text-lg font-medium">
            Menus
          </Link>
          <button
            onClick={() => setFAQOpen(!FAQOpen)}
            className="text-lg font-medium"
          >
            FAQS
          </button>
          {FAQOpen && (
            <div className="w-[40%] rounded-2xl shadow-2xl px-6 h-screen overflow-y-scroll absolute top-16 left-36 z-50 bg-white py-12 lg:py-12">
              <h1 className="text-2xl font-bold py-6">
                Frequently asked questions{" "}
              </h1>
              <div className="content-wrapper">
                <div>
                  <div>
                    <p>
                      <img
                        src="https://revival-strapi.s3.eu-west-2.amazonaws.com/frequently_asked_questions_f371730e95.webp"
                        alt="frequently-asked-questions.webp"
                      />
                    </p>
                    <p className="font-semibold text-base text-gray-500 py-4">
                      Got a question? Well, you’re in the right place. To find
                      answers to all of our common queries, check out our FAQs
                      below. If you still can’t find an answer to your question
                      or need help with something else, get in touch with us and
                      we’ll guide you as best we can.
                    </p>
                  </div>
                </div>
                <div
                  className="mt-12 border-t border-[#CCCCCC]"
                  itemScope=""
                  itemType="https://schema.org/FAQPage"
                >
                  <div
                    className="border-b border-[#CCCCCC]"
                    itemScope=""
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <div className="">
                      {" "}
                      <Accordion chevronPosition="right">{items}</Accordion>
                    </div>
                  </div>
                  <div className="mt-16">
                    <h4 className="h4 mb-4 text-black">
                      Can't find an answer to your question?
                    </h4>
                    <p>
                      If you still need help and would like to contact us, you
                      can call us on weekdays from 9 am - 5 pm on{" "}
                      <a
                        href="tel:01706248282"
                        className="font-bold text-[#706AEA]"
                      >
                        Phone Numberr
                      </a>{" "}
                      or email us any time at{" "}
                      <a
                        href="mailto:info@webuybricks.co.uk"
                        className="font-bold text-[#706AEA]"
                      >
                        Email Demo
                      </a>
                      . Alternatively, you can visit our contact us page and use
                      our web form to submit your enquiry. A member of our
                      customer service team will be in contact to help you with
                      your questions.
                    </p>
                    <a
                      title="Contact our team"
                      className="button"
                      href="/contact/"
                    >
                      Contact our team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md:flex gap-8 hidden  items-center ">
          <Link to="/how-it-works" className="flex gap-3 items-center">
            <div className="">
              <h4 className="text-base font-medium">How it Works?</h4>
              <p className="text-sm text-gray-400">Just 4 Easy Steps</p>
            </div>
            <svg
              width={24}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="red"
                  fill-rule="evenodd"
                  d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10.01 4a1 1 0 01-1 1H10a1 1 0 110-2h.01a1 1 0 011 1zM11 6a1 1 0 10-2 0v5a1 1 0 102 0V6z"
                ></path>{" "}
              </g>
            </svg>
          </Link>
          <Link to="/my-account" className="flex gap-3 items-center">
            <div className="">
              <h4 className="text-base font-medium">Start Selling</h4>
              <p className="text-sm text-gray-400">0 item | $0.00</p>
            </div>
            <svg
              width={28}
              viewBox="0 -0.5 25 25"
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
                <path
                  d="M5.24542 8.91722C5.1997 8.50553 4.8289 8.20886 4.41722 8.25458C4.00553 8.3003 3.70886 8.6711 3.75458 9.08278L5.24542 8.91722ZM5.413 17.221L4.66758 17.3038L4.66759 17.3039L5.413 17.221ZM7.4 19L7.39972 19.75H7.4V19ZM17.6 19L17.6001 18.25H17.6V19ZM19.588 17.221L20.3334 17.3039L20.3334 17.3037L19.588 17.221ZM21.2454 9.08269C21.2911 8.67101 20.9944 8.30024 20.5827 8.25457C20.171 8.2089 19.8002 8.50562 19.7546 8.91731L21.2454 9.08269ZM2.5 8.25C2.08579 8.25 1.75 8.58579 1.75 9C1.75 9.41421 2.08579 9.75 2.5 9.75V8.25ZM22.5 9.75C22.9142 9.75 23.25 9.41421 23.25 9C23.25 8.58579 22.9142 8.25 22.5 8.25V9.75ZM4.82918 8.66459C4.64394 9.03507 4.79411 9.48558 5.16459 9.67082C5.53507 9.85606 5.98558 9.70589 6.17082 9.33541L4.82918 8.66459ZM8.17082 5.33541C8.35606 4.96493 8.20589 4.51442 7.83541 4.32918C7.46493 4.14394 7.01442 4.29411 6.82918 4.66459L8.17082 5.33541ZM18.8292 9.33541C19.0144 9.70589 19.4649 9.85606 19.8354 9.67082C20.2059 9.48558 20.3561 9.03507 20.1708 8.66459L18.8292 9.33541ZM18.1708 4.66459C17.9856 4.29411 17.5351 4.14394 17.1646 4.32918C16.7941 4.51442 16.6439 4.96493 16.8292 5.33541L18.1708 4.66459ZM8.75 15C8.75 15.4142 9.08579 15.75 9.5 15.75C9.91421 15.75 10.25 15.4142 10.25 15H8.75ZM10.25 13C10.25 12.5858 9.91421 12.25 9.5 12.25C9.08579 12.25 8.75 12.5858 8.75 13H10.25ZM11.75 15C11.75 15.4142 12.0858 15.75 12.5 15.75C12.9142 15.75 13.25 15.4142 13.25 15H11.75ZM13.25 13C13.25 12.5858 12.9142 12.25 12.5 12.25C12.0858 12.25 11.75 12.5858 11.75 13H13.25ZM14.75 15C14.75 15.4142 15.0858 15.75 15.5 15.75C15.9142 15.75 16.25 15.4142 16.25 15H14.75ZM16.25 13C16.25 12.5858 15.9142 12.25 15.5 12.25C15.0858 12.25 14.75 12.5858 14.75 13H16.25ZM3.75458 9.08278L4.66758 17.3038L6.15842 17.1382L5.24542 8.91722L3.75458 9.08278ZM4.66759 17.3039C4.82238 18.6961 5.99892 19.7495 7.39972 19.75L7.40028 18.25C6.76356 18.2498 6.22877 17.771 6.15841 17.1381L4.66759 17.3039ZM7.4 19.75H17.6V18.25H7.4V19.75ZM17.5999 19.75C19.0012 19.7502 20.1786 18.6966 20.3334 17.3039L18.8426 17.1381C18.7722 17.7712 18.2371 18.2501 17.6001 18.25L17.5999 19.75ZM20.3334 17.3037L21.2454 9.08269L19.7546 8.91731L18.8426 17.1383L20.3334 17.3037ZM2.5 9.75H22.5V8.25H2.5V9.75ZM6.17082 9.33541L8.17082 5.33541L6.82918 4.66459L4.82918 8.66459L6.17082 9.33541ZM20.1708 8.66459L18.1708 4.66459L16.8292 5.33541L18.8292 9.33541L20.1708 8.66459ZM10.25 15V13H8.75V15H10.25ZM13.25 15V13H11.75V15H13.25ZM16.25 15V13H14.75V15H16.25Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
function AccordionLabel({ label, image, description }) {
  return (
    <Group noWrap>
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  )
}
