import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ChangePassword = () => {
  const [email, setEmail] = useState()
  const [validUrl, setValidUrl] = useState()
  const param = useParams()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:5100/sendpasswordlink",
        { email }
      )
      setMessage(response.data.message)
      // You can perform any additional logic here after receiving the response
    } catch (error) {
      setMessage("An error occurred. Please try again.")
    }
  }
  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:5100/forgotpassword/${param.id}/${param.token}`
        const { data } = await axios.get(url)
        console.log(data)
        setValidUrl(true)
      } catch (error) {
        console.log(error)
        setValidUrl(false)
      }
    }
    verifyEmailUrl()
  }, [param])

  return (
    <div>
      <div className="w-full lg:w-9/12 lg:pl-20 py-12 lg:py-24">
        <h1 className="h1 mb-8">Recover your password</h1>
        <form onSubmit={handleSubmit}>
          <p className="mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
          <div className="mb-8">
            <label className="w-full flex font-bold text-sm mb-2">
              Email<span className="text-[#E52D3B]">*</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="customer_email"
              id="customer_email"
              className="h-[67px] border border-[rgba(133,138,149,0.4)] rounded-3xl lg:rounded-xl w-full pl-6"
              placeholder="Your email"
              type="email"
              defaultValue=""
            />
          </div>

          <button
            className="cursor-pointer bg-blue-500 text-white rounded-xl h-[80px] w-full flex items-center justify-center font-bold text-lg"
            type="submit"
          >
            Send Link
          </button>
        </form>
        {validUrl ? (
          <div className={styles.container}>
            <img
              src={success}
              alt="success_img"
              className={styles.success_img}
            />
            <h1>Email verified successfully</h1>
            <Link to="/login">
              <button className={styles.green_btn}>Login</button>
            </Link>
          </div>
        ) : (
          <h1>404 Not Found</h1>
        )}
      </div>
    </div>
  )
}

export default ChangePassword
