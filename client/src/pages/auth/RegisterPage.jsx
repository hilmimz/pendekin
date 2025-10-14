import Navbar from "../../components/auth/Navbar"
import InputField from "../../components/InputField"
import Button from "../../components/auth/Button"
import { Link } from "react-router-dom"

export default function RegisterPage(params) {
  return(
    <>
      <section className="flex-col">
        <Navbar/>
        <div className="bg-accent h-[calc(100vh-60px)] pt-10">
          <div className="bg-white w-md mx-auto p-10 rounded-2xl">
            <h3>Please enter your details</h3>
            <h1 className="text-secondary text-2xl font-bold">Hi, Let's Join Us</h1>
            <div className="pt-8 pb-5 flex-col space-y-4">
              <div>
                <h3>Name</h3>
                <InputField type="text" placeholder="Enter your name"/>
              </div>
              <div>
                <h3>Email</h3>
                <InputField type="email" placeholder="Enter your email address"/>
              </div>
              <div>
                <h3>Password</h3>
                <InputField type="password" placeholder="Enter your password"/>
              </div>
            </div>
            <Button title="Register"/>
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