import React, { useEffect, useState } from "react"
import Adminorder from "../componet/Adminorder"

const Admin = () => {
  const [data, setData] = useState()
  const fetchInfo = () => {
    return fetch("https://long-tan-chicken-hem.cyclic.app/GetOrder")
      .then((res) => res.json())
      .then((d) => setData(d.data))
  }
  console.log(data)
  useEffect(() => {
    fetchInfo()
  }, [])
  const [SearchValue, setSearchValue] = useState()
  return (
    <div className="">
      <div className="lg:px-44 px-6 py-4 my-6">
        <div className="mt-4 mb-6">
          <h3 className="text-lg font-bold py-2">Search Order</h3>
          {/* <SearchDas data={data} /> */}
          <input
            placeholder="Search User Name"
            className="border px-6 rounded-xl w-full py-4"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {data
          ?.filter((value) => {
            console.log(value.Mydetails[0].firstName)
            return SearchValue
              ? value.Mydetails[0].firstName.includes(SearchValue)
              : value
          })
          .map((value) => (
            <Adminorder data={value.Mydetails} items={value} />
          ))}
      </div>
    </div>
  )
}

export default Admin
