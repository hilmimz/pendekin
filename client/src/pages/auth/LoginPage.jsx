import Navbar from "../../components/auth/Navbar"
import InputField from "../../components/InputField"
import Button from "../../components/auth/Button"
import { Link } from "react-router-dom"

export default function LoginPage(params) {
  return(
    <>
      <section className="flex-col">
        <Navbar/>
        <div className="bg-accent h-[calc(100vh-60px)] pt-10">
          <div className="bg-white w-md mx-auto p-10 rounded-2xl">
            <h3>Please enter your details</h3>
            <h1 className="text-secondary text-2xl font-bold">Hi, Wellcome Back</h1>
            <div className="pt-8">
              <h3>Email</h3>
              <InputField type="email" placeholder="Enter your email address"/>
              <h3>Password</h3>
              <InputField type="password" placeholder="Enter your password"/>
            </div>
            <div className="flex justify-between pt-3 pb-8">
            <div className="flex items-center gap-1">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
              <h3>Remember for 14 days</h3>
            </div>
              <h3 className="text-primary font-medium cursor-pointer">Forget your password?</h3>
            </div>
            <Button title="Login"/>
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