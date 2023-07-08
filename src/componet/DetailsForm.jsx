import { Divider, Group, Radio, Select, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import React, { useState } from "react"
import { DatePickerInput } from "@mantine/dates"
import CountryData from "../../CountryData.json"
import cities from "../../cities.json"
const DetailsForm = ({ setActive, price, condition, setFormData }) => {
  const [value, setValue] = useState(null)
  const [searchValue, onSearchChange] = useState("")
  const [searchcity, onSearchCity] = useState("")
  const [SearchPost, setSearchPost] = useState()
  const [openaddress, setOpenaddress] = useState()
  const [PaymentDetails, setPaymentDetails] = useState("Paypal")

  const form = useForm({
    initialValues: {
      email: "",
      PaymentDetails: PaymentDetails,
      firstName: "",
      lastName: "",
      Telephone: "",
      title: "",
      StreetAddress1: "",
      termsOfService: false,
      StreetAddress2: "",
      city: "",
      Country: "",
      Paypalemail: "",
    },

    validate: {
      firstName: (value) =>
        value < 2
          ? "firstName must have at least 2 letters must have at least 2 letters"
          : null,
      lastName: (value) =>
        value < 2 ? "LastName must have at least 2 letters" : null,
      Telephone: (value) =>
        value < 2 ? "Telephone must have at least 2 letters" : null,
      StreetAddress1: (value) =>
        value < 2 ? "StreetAddress1 must have at least 2 letters" : null,
      StreetAddress2: (value) =>
        value < 2 ? "StreetAddress2 must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      Paypalemail: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  })
  // console.log(form)
  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current
      }
      return current < 3 ? current + 1 : current
    })

  return (
    <div>
      <div class="w-full">
        <h1 className="text-4xl font-bold text-center">Details</h1>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values)
            setFormData(values)
            nextStep()
          })}
          id="login-form"
          className="py-6 flex-col lg:flex-row space-x-12 flex"
          method="post"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold">My Details</h3>
            <div className="py-3">
              <Select
                {...form.getInputProps("title")}
                withAsterisk
                label="Title"
                placeholder="Pick one"
                searchable
                onSearchChange={onSearchChange}
                searchValue={searchValue}
                nothingFound="No options"
                data={["Dr", "Miss", "Mr", "Mrs", "Ms", "Rev", "Sir"]}
              />
            </div>
            <div class=" py-3">
              <TextInput
                type="text"
                withAsterisk
                label="First Name"
                placeholder="First Name"
                {...form.getInputProps("firstName")}
              />
            </div>
            <div class=" py-3">
              <TextInput
                withAsterisk
                label="Last Name"
                placeholder="Last Name"
                {...form.getInputProps("lastName")}
              />
            </div>
            <div class=" py-3">
              <TextInput
                type="email"
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
            </div>
            <div class=" py-3">
              <TextInput
                withAsterisk
                label="Telephone"
                placeholder="Telephone"
                {...form.getInputProps("Telephone")}
              />
            </div>
            {/* <div class=" py-4">
              <DatePickerInput
                {...form.getInputProps("DOB")}
                label="Date of Birth"
                placeholder="DOB"
                value={value}
                onChange={setValue}
                mx="auto"
              />
            </div> */}
            {/* <Divider className="" /> */}
            <div className="py-4">
              <h1 className="text-2xl font-bold ">Address Details</h1>

              <p className="text-gray-500 py-1">
                Simply enter your postcode and choosethe right address from the
                list
              </p>
              <div className="">
                <div class=" flex items-center justify-between py-3">
                  {/* <div className="flex w-full gap-12 items-center"> */}
                  {/* <Select
                      {...form.getInputProps("PostCode")}
                      withAsterisk
                      label="Find by post code"
                      placeholder="Pick one"
                      searchable
                      onSearchChange={setSearchPost}
                      searchValue={SearchPost}
                      nothingFound="No options"
                      data={["React", "Angular", "Svelte", "Vue"]}
                    /> */}
                  {/* <button
                      onClick={() => navigation("/check-your-details")}
                      type="button"
                      className="hover:scale-[1.05] transition-all mt-4 w-1/5 text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-full bg-blue-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[45px]  xl:text-[18px]"
                    >
                      Search
                    </button> */}
                  {/* </div> */}
                  {/* <button onClick={() => setOpenaddress(!openaddress)}>
                    <a
                      title="Forgotten Password"
                      class="text-sm  font-bold text-[#706AEA]"
                    >
                      Enter address manually
                    </a>
                  </button> */}
                </div>

                <div className="">
                  <div class=" py-3">
                    <TextInput
                      withAsterisk
                      label="Street Address1"
                      placeholder="StreetAddress1"
                      {...form.getInputProps("StreetAddress1")}
                    />
                  </div>
                  <div class=" py-3">
                    <TextInput
                      withAsterisk
                      label="Street Address2"
                      placeholder="StreetAddress2"
                      {...form.getInputProps("StreetAddress2")}
                    />
                  </div>
                  <div className="py-3">
                    <Select
                      {...form.getInputProps("city")}
                      withAsterisk
                      label="Town / city"
                      placeholder=" Pick Town / city "
                      searchable
                      nothingFound="No options"
                      data={cities.data.map((value) => value.city)}
                    />
                  </div>
                  <div className="py-3">
                    <Select
                      withAsterisk
                      label="Country"
                      placeholder="Pick Country"
                      name="Country"
                      searchable
                      data={CountryData.countries}
                      {...form.getInputProps("Country")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Divider className="" />
            <div className="py-6">
              <h1 className="text-2xl font-bold ">Payment details</h1>

              <p className="text-gray-500 py-1">
                How would you like to get paid?
              </p>
              <div className="">
                <div className="">
                  <Radio.Group
                    defaultValue="Paypal"
                    onChange={setPaymentDetails}
                    withAsterisk
                  >
                    <Group mt="xs">
                      <label
                        className={` ${
                          PaymentDetails === "BackTransfer"
                            ? "border-2 border-blue-500"
                            : ""
                        } flex items-center gap-4 border rounded-xl px-8 py-7`}
                      >
                        <Radio value="BackTransfer" label="Bank Transfer" />
                      </label>
                      <label
                        className={`${
                          PaymentDetails === "Paypal"
                            ? "border-2 border-blue-500"
                            : ""
                        } flex items-center gap-4 border rounded-xl px-8 py-6`}
                      >
                        <Radio value="Paypal" />
                        <img
                          className="w-24"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                          alt=""
                        />
                      </label>
                    </Group>
                  </Radio.Group>
                </div>
              </div>
              {PaymentDetails === "Paypal" && (
                <div className="py-6">
                  <h1 className="text-2xl font-bold ">Paypal Email *</h1>
                  <div class=" py-3">
                    <TextInput
                      type="email"
                      withAsterisk
                      label="Need for revice your payment"
                      placeholder="Paypal Email"
                      {...form.getInputProps("Paypalemail")}
                    />
                  </div>
                  <div class="rounded-md bg-[#F8F8FE] p-4 text-sm text-[#706AEA] text-center mt-4">
                    We'll direct transfer to your PayPal account within{" "}
                    <strong class="font-bold">5 working days</strong> of
                    receiving your LEGO®.
                  </div>
                </div>
              )}
              {PaymentDetails === "BackTransfer" && (
                <div className="py-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
                      <label className="w-full flex text-2xl font-bold mb-2">
                        Account number<span className="text-[#E52D3B]">*</span>
                      </label>
                      <TextInput
                        {...form.getInputProps("accountNo")}
                        placeholder="Account number"
                        type="text"
                        autoComplete="off"
                        name="customer_paymentinfo_bank"
                        id="customer_paymentinfo_bank"
                        title="Enter Account Number"
                        className="h-[67px] rounded-3xl lg:rounded-xl w-full pl-6 km_ignore"
                      />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-4">
                      <label className="w-full flex text-2xl font-bold mb-2">
                        Sort code<span className="text-[#E52D3B]">*</span>
                      </label>
                      <div className="flex items-center">
                        <div className="w-3/12">
                          <TextInput
                            {...form.getInputProps("SortNo")}
                            type="text"
                            maxLength={2}
                            autoComplete="off"
                            title="Sort code digits 1 & 2"
                            className="h-[67px] rounded-3xl lg:rounded-xl w-full pl-6 km_ignore"
                            name="customer_paymentinfo_bank_sort1"
                            id="customer_paymentinfo_bank_sort1"
                            defaultValue=""
                          />
                        </div>
                        <div className="px-4 -mt-3">-</div>
                        <div className="w-3/12">
                          <TextInput
                            {...form.getInputProps("SortNo")}
                            type="text"
                            autoComplete="off"
                            title="Sort code digits 3 & 4"
                            maxLength={2}
                            className="h-[67px]  rounded-3xl lg:rounded-xl w-full pl-6 km_ignore"
                            name="customer_paymentinfo_bank_sort2"
                            id="customer_paymentinfo_bank_sort2"
                            defaultValue=""
                          />
                        </div>
                        <div className="px-4 -mt-3">-</div>
                        <div className="w-3/12">
                          <TextInput
                            {...form.getInputProps("SortNo")}
                            type="text"
                            autoComplete="off"
                            title="Sort code digits 5 & 6"
                            maxLength={2}
                            className="h-[67px]  rounded-3xl lg:rounded-xl w-full pl-6 km_ignore"
                            name="customer_paymentinfo_bank_sort3"
                            id="customer_paymentinfo_bank_sort3"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F8F8FE] p-4 text-sm text-[#706AEA] text-center mt-4">
                    We'll pay directly to your account the{" "}
                    <strong className="font-bold">same day</strong> we receive
                    your LEGO®.
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-[0.4] sticky top-5">
            <div className="w-full mt-10 md:mt-0  md:relative bottom-0 left-0 right-0 z-10">
              <div className="bg-white  rounded-2xl shadow-[0_4px_25px_rgba(38,50,92,0.1)] p-4 px-6 md:p-8 text-center !sticky top-[160px]">
                <h2 className="h4 mb-4 hidden md:block">Offer summary</h2>
                <div className="flex flex-row md:flex-col items-center justify-between">
                  <div className="text-[#706AEA] text-xl md:text-5xl font-bold mb-0 md:mb-2 order-2 md:order-1">
                    <h2>
                      {" "}
                      {price ? (
                        <h2> £{price.toFixed(5).slice(0, 5)}</h2>
                      ) : (
                        <Loader size="xs" />
                      )}
                    </h2>
                  </div>
                  <div className="font-bold text-xl md:text-base order-1 md:order-2">
                    1 Item
                  </div>
                </div>
                <button
                  type="submit"
                  className="hover:scale-[1.05] transition-all mt-4 w-full text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-full bg-blue-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[65px]  xl:text-[18px]"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DetailsForm
