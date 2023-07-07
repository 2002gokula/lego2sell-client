import { Divider, Group, Radio, Select, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import React, { useState } from "react"
import { DatePickerInput } from "@mantine/dates"
import CountryData from "../../CountryData.json"
import cities from "../../cities.json"
const DetailsForm = ({ setActive, price }) => {
  const [value, setValue] = useState(null)
  const [searchValue, onSearchChange] = useState("")
  const [openaddress, setOpenaddress] = useState()
  const form = useForm({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      Telephone: "",
      DOB: "",
      PostCode: "",
      termsOfService: false,
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
      DOB: (value) => (value < 2 ? "DOB must have at least 2 letters" : null),
      StreetAddress1: (value) =>
        value < 2 ? "StreetAddress1 must have at least 2 letters" : null,
      StreetAddress2: (value) =>
        value < 2 ? "StreetAddress2 must have at least 2 letters" : null,
      PostCode: (value) =>
        value < 2 ? "PostCode must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })
  const nextStep = () =>
    setActive((current) => {
      // if (form.validate().hasErrors) {
      //   return current
      // }
      return current < 3 ? current + 1 : current
    })
  return (
    <div>
      <div class="w-full">
        <h1 className="text-4xl font-bold text-center">Details</h1>
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          id="login-form"
          className="py-6 flex-col lg:flex-row space-x-12 flex"
          method="post"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold">My Details</h3>
            <div className="py-3">
              <Select
                withAsterisk
                label="Title"
                placeholder="Pick one"
                searchable
                onSearchChange={onSearchChange}
                searchValue={searchValue}
                nothingFound="No options"
                data={["Dr", "Angular", "Svelte", "Vue"]}
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
            <div class=" py-4">
              <DatePickerInput
                {...form.getInputProps("DOB")}
                label="DOB"
                placeholder="DOB"
                value={value}
                onChange={setValue}
                mx="auto"
              />
            </div>
            <Divider className="" />
            <div className="py-4">
              <h1 className="text-2xl font-bold ">Address Details</h1>

              <p className="text-gray-500 py-1">
                Simply enter your postcode and choosethe right address from the
                list
              </p>
              <div className="">
                <div class=" flex items-center justify-between py-3">
                  <div className="flex w-full gap-12 items-center">
                    <Select
                      {...form.getInputProps("PostCode")}
                      withAsterisk
                      label="Find by post code"
                      placeholder="Pick one"
                      searchable
                      onSearchChange={onSearchChange}
                      searchValue={searchValue}
                      nothingFound="No options"
                      data={["React", "Angular", "Svelte", "Vue"]}
                    />
                    {/* <button
                      onClick={() => navigation("/check-your-details")}
                      type="button"
                      className="hover:scale-[1.05] transition-all mt-4 w-1/5 text-center lg:ml-0 flex items-center justify-center px-6 lg:px-9 rounded-full bg-blue-500 hover:bg-white hover:text-black  hover:border text-white font-bold text-[15px] h-[49px] lg:h-[45px]  xl:text-[18px]"
                    >
                      Search
                    </button> */}
                  </div>
                  <button onClick={() => setOpenaddress(!openaddress)}>
                    <a
                      title="Forgotten Password"
                      class="text-sm  font-bold text-[#706AEA]"
                    >
                      Enter address manually
                    </a>
                  </button>
                </div>
                {openaddress && (
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
                        withAsterisk
                        label="Town / city"
                        placeholder="Pick one"
                        searchable
                        onSearchChange={onSearchChange}
                        searchValue={searchValue}
                        nothingFound="No options"
                        data={["React", "Angular", "Svelte", "Vue"]}
                        // data={cities.name}
                      />
                    </div>
                    <div className="py-3">
                      {/* <Select
                        withAsterisk
                        label="Country"
                        placeholder="Pick one"
                        searchable
                        onSearchChange={onSearchChange}
                        searchValue={searchValue}
                        nothingFound="No options"
                        data={["React", "Angular", "Svelte", "Vue"]}
                      /> */}
                      <Select
                        withAsterisk
                        label="Country"
                        placeholder="Pick one"
                        name="issuecountry"
                        searchable
                        data={CountryData.countries}
                        {...form.getInputProps("issuecountry")}
                      />
                    </div>
                  </div>
                )}
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
                  <Radio.Group withAsterisk>
                    <Group mt="xs">
                      <div className="flex items-center gap-4 border rounded-xl px-8 py-7">
                        <Radio value="react" label="Bank Transfer" />
                      </div>
                      <div className="flex items-center gap-4 border rounded-xl px-8 py-6">
                        <Radio value="svelte" />
                        <img
                          className="w-24"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                          alt=""
                        />
                      </div>
                    </Group>
                  </Radio.Group>
                </div>
              </div>
              <div className="py-6">
                <h1 className="text-2xl font-bold ">Paypal Email *</h1>
                <div class=" py-3">
                  <TextInput
                    type="email"
                    withAsterisk
                    label="Need for revice your payment"
                    placeholder="Paypal Email"
                    {...form.getInputProps("email")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.4]">
            <div className="w-full mt-10 md:mt-0  md:relative bottom-0 left-0 right-0 z-10">
              <div className="bg-white rounded-2xl  shadow-[0_4px_25px_rgba(38,50,92,0.1)] p-4 px-6 md:p-8 text-center md:sticky md:top-[160px]">
                <h2 className="h4 mb-4 hidden md:block">Offer summary</h2>
                <div className="flex flex-row md:flex-col items-center justify-between">
                  <div className="text-[#706AEA] text-xl md:text-5xl font-bold mb-0 md:mb-2 order-2 md:order-1">
                    <h2>
                      {" "}
                      {price ? (
                        <h2>${price.body.lowestPrice}</h2>
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
                  onClick={nextStep}
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
