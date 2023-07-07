import React from "react"

const Contact = () => {
  return (
    <div className="w-full px-6 lg:px-44 py-12 lg:py-24">
      {/* <h1 className="h1 mb-8"></h1> */}
      <img className="w-[20%]" src="/Images/contact.jpeg" alt="" />
      <p className="mb-6 text-lg text-black font-medium">
        If you can not find the information you need in our FAQ’s then just send
        us a quick email at the address below or via our quick and easy web form
        and one of the team will get back to you ASAP.
      </p>
      <div className="content-wrapper">
        <div className="flex items-center py-6 justify-center flex-col">
          <img src="/Images/email-logo.png" alt="" />
          <h2 className="text-3xl text-blue-600 font-medium">
            Support@lego2sell.com
          </h2>
        </div>

        <h3 className="text-xl font-bold py-4">Get in touch!</h3>
        <form>
          <p className="mb-3 font-normal text-base">
            Fields marked with <span className="text-[#E52D3B]">*</span> are
            required
          </p>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="w-full flex font-bold text-sm mb-2"
            >
              Name<span className="text-[#E52D3B]">*</span>
            </label>
            <input
              className="h-[67px] border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="email"
              className="w-full flex font-bold text-sm mb-2"
            >
              Email<span className="text-[#E52D3B]">*</span>
            </label>
            <input
              className="h-[67px] border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="message"
              className="w-full flex font-bold text-sm mb-2"
            >
              Message<span className="text-[#E52D3B]">*</span>
            </label>
            <textarea
              rows={6}
              className="h-[170px] pt-6 border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6"
              id="message"
              name="message"
              defaultValue={""}
            />
          </div>
          <button
            type="button"
            className="cursor-pointer bg-[#706AEA] text-white rounded-full h-[80px] flex items-center justify-center font-bold text-lg px-20"
            style={{ marginTop: 20 }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
