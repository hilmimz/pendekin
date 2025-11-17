import Navbar from "../../components/auth/Navbar"
import InputField from "../../components/InputField"
import Button from "../../components/auth/Button"
import { Link } from "react-router-dom"
import { register } from "../../lib/api"
import { useState } from "react"

export default function RegisterPage(params) {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [result, setResult] = useState("")

  async function handleRegister(e) {
      e.preventDefault()
      setLoading(true)
      setError("")
  
      try {
        // await new Promise(r => setTimeout(r, 4000))
        const data = await register({name: name, email: email, password: password})
        setResult(data.message)
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
          <form onSubmit={handleRegister}>
            <h3>Please enter your details</h3>
            <h1 className="text-secondary text-2xl font-bold">Hi, Let's Join Us</h1>
            <div className="pt-5 pb-5 flex-col space-y-4"> 
              <div>
                <p className={`${error ? 'text-red-700':'text-green-600'} min-h-[1.5rem] font-semibold`}>{error ? error : result ? result : ""}</p>
                <h3>Name</h3>
                <InputField type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div>
                <h3>Email</h3>
                <InputField type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                <h3>Password</h3>
                <InputField type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>
            <Button type="submit" loading={loading} title={loading ? "Registering..." : "Register"}/>
          </form>
            <div className="flex gap-1 pb-35">
              <h3>Already have an account yet?</h3>
              <span className="text-primary font-medium cursor-pointer underline"><Link to="/login">Login</Link></span>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}