import { useState } from "react"
import { Stepper, Button, Group } from "@mantine/core"
import DetailsForm from "../componet/DetailsForm"
import Summary from "../componet/Summary"
import { useLocation } from "react-router-dom"
const Details = () => {
  const location = useLocation()
  const data = location.state && location.state.data
  const price = location.state.price
  const SearchValue = location.state.SearchValue
  const condition = location.state.condition
  console.log(SearchValue)
  const [formData, setFormData] = useState([])
  const [active, setActive] = useState(0)
  const storedUserId = localStorage.getItem("userId")
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))
  return (
    <div className="py-12 flex  items-center justify-center">
      <div className="w-[80%] ">
        <Stepper
          active={active}
          mx={{ display: "flex" }}
          onStepClick={setActive}
          breakpoint="sm"
        >
          <Stepper.Step label="My Details" description="Create an account">
            <DetailsForm
              storedUserId={storedUserId}
              formData={formData}
              setFormData={setFormData}
              condition={condition}
              price={price}
              data={data}
              setActive={setActive}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Offer Summary"
            description=" overview of an offer "
          >
            <Summary
              storedUserId={storedUserId}
              formData={formData}
              prevStep={prevStep}
              condition={condition}
              SearchValue={SearchValue}
              price={price}
              data={data}
            />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Get full access">
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </div>
    </div>
  )
}

export default Details
