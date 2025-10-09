import Navbar from "../components/LandingPage/Navbar"
import ShortenURL from "../components/LandingPage/ShortenURL"
import Feature from "../components/LandingPage/Feature"
import StepCard from "../components/LandingPage/StepCard"
import { faChartSimple, faLink, faPalette, faRobot, faTags, faUser } from "@fortawesome/free-solid-svg-icons"

export default function LandingPage() {
  return(
    <>
      <Navbar/>
      <div className="main bg-primary px-[20vw] text-white py-30">
        <h1 className="font-extrabold text-2xl text-center">Shorten your URL Instantly</h1>
        <h3 className="text-center">Create simple and memorable links that look professional and are easier to share. Pendekin gives you full control with optional custom aliases and detailed click statistics.</h3>
        <ShortenURL/>
      </div>
      <div className="features bg-primary px-[20vw] text-white py-30">
        <h1 className="font-extrabold text-2xl text-center text-secondary">Why Choose Pendekin?</h1>
        <h3 className="text-center mt-2">Everything you need to shorten, customize, and track your links in one simple tool.</h3>
        <div className="features flex justify-between mt-15">
          <Feature icon={faLink}  title="Fast URL Shortening"  description="Shorten any long URL instantly with just one click. No delays, no complexity."/>
          <Feature icon={faPalette}  title="Custom Aliases"  description="Make your links more memorable and branded by choosing your own custom aliases."/>
          <Feature icon={faChartSimple}  title="Click Analytics"  description="Track total clicks, traffic sources, device types, and more. So you know how your links are performing."/>
        </div>
        <div className="features flex justify-between mt-15">
          <Feature icon={faUser}  title="User-Friendly Interface"  description="Enjoy a clean, simple, and modern interface designed to be intuitive for everyone."/>
          <Feature icon={faRobot}  title="AI Alias Suggestions"  description="Let our smart AI help you generate short, relevant, and brand-friendly aliases for your links automatically."/>
          <Feature icon={faTags}  title="Scalable Pricing Plans"  description="Start for free and upgrade for more features like advanced analytics, AI boosts, and custom domains."/>
        </div>
      </div>
      <div className="bg-neutral-white pt-30 px-[20vw]">
        <h1 className="text-secondary font-bold text-2xl text-center">How To Use Pendekin?</h1>
        <div className="steps flex justify-center gap-10 py-10">
          <StepCard number="1" title="Signup" description="Create your free Pendekin account to get started. This gives you access to your personal dashboard and link history."/>
          <StepCard number="2" title="Paste URL" description="Enter the full URL you want to shorten in the input field on the dashboard."/>
          <StepCard number="3" title="Pendekin" description="Choose a custom alias or let our AI suggest one for you. Click “Shorten” to generate your short link and start sharing it instantly. You can track clicks and performance from your dashboard."/>
        </div>
      </div>
      <div className="footer bg-neutral-gray text-white text-center pt-30 pb-5 px-[20vw]">
        <h1 className="text-2xl font-bold">Start Shortening Smarter Today</h1>
        <h3 className="pt-5 pb-15">Join thousands of users already creating cleaner, shorter links with Pendekin. Sign up now and experience the power of smart, AI-assisted link management.</h3>
        <button className="border-3 px-10 py-1 rounded-md border-secondary hover:bg-secondary hover:text-black hover:-translate-y-0.5 duration-200 cursor-pointer">Start for free now →</button>
        <hr class="border-t border-gray-600 my-6 mt-15" />
        <h1 className="font-extrabold text-2xl text-secondary py-5">PENDEKIN</h1>
        <h2>Shorter Smarter</h2>
        <ul className="flex gap-4 justify-center">
          <li className="basis-1/12">Home</li>
          <li className="border border-gray-500"></li>
          <li className="basis-1/12">How to use?</li>
          <li className="border border-gray-500"></li>
          <li className="basis-1/12">Features</li>
        </ul>
      </div>
      <div className="bg-neutral-gray text-white text-center pt-5">
        <hr className="border-t border-gray-700" />
        <h3>© 2025 Pendekin. All rights reserved.</h3>
      </div>
    </>
  )
}