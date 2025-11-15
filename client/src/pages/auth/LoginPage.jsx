import Navbar from "../../components/auth/Navbar"
import InputField from "../../components/InputField"
import Button from "../../components/auth/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { login } from "../../lib/api"

// TODO
// - add loading

export default function LoginPage() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleLogin(e) {
      e.preventDefault()
      setLoading(true)
      setError("")
  
      try {
        // await new Promise(r => setTimeout(r, 4000))
        const data = await login({email: email, password: password})
        setResult(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }


  return(
    <>
      <section className="flex-col">
        <Navbar/>
        <div className="bg-accent h-[calc(100vh-60px)] pt-10">
          <div className="bg-white w-md mx-auto p-10 rounded-2xl">
          <form onSubmit={handleLogin}>
            <h3>Please enter your details</h3>
            <h1 className="text-secondary text-2xl font-bold">Hi, Wellcome Back</h1>
            <div className="pt-8">
              <p className="text-red-700 min-h-[1.5rem] font-semibold">{error ? error : ""}</p>
              <h3>Email</h3>
              <InputField type="email" placeholder="Enter your email address" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
              <h3>Password</h3>
              <InputField type="password" placeholder="Enter your password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <div className="flex justify-between pt-3 pb-8">
            <div className="flex items-center gap-1">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
              <h3>Remember for 14 days</h3>
            </div>
              <h3 className="text-primary font-medium cursor-pointer">Forget your password?</h3>
            </div>
            <Button type="submit" loading={loading} title={loading ? "Logging in..." : "Login"}/>
          </form>
            <div className="flex gap-1 pb-35">
              <h3>Don't have an account yet?</h3>
              <span className="text-primary font-medium cursor-pointer underline"><Link to="/register">Register</Link></span>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}