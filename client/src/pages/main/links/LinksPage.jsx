import Navbar from "../../../components/DashboardPage/Navbar"
import SearchBar from "../../../components/DashboardPage/SearchBar"
import Button from "../../../components/DashboardPage/links/Button"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faSliders } from "@fortawesome/free-solid-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import Card from "../../../components/DashboardPage/links/Card"

export default function DashboardPage(params) {
  return(
    <div className="bg-background-gray h-screen pt-5">
      <Navbar/>
      <main className="px-35 pt-10">
        <section>
          <div className="flex justify-between">
            <header className="font-bold text-xl">Your Pendekin Links</header>
            <Button title="Create Link" icon={faPlus} classname="bg-secondary hover:bg-secondary-hover text-white"/>
          </div>
          <div className="flex items-center gap-2">
            <SearchBar classname="w-80" placeholder="search..." textColor="black"/>
            <Button title="Filters" icon={faSliders} classname="bg-white hover:bg-gray-200 text-black"/>
          </div>
        </section>
        <hr class="border-t border-gray-200 my-6 mt-5" />
        <div className="flex items-center justify-between">
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="selected" id="" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
              <label htmlFor="selected">0 selected</label>
            </div>
            <p className="font-bold">Hide</p>
          </div>
          <Button title="Active" icon={faAngleDown} classname="bg-white hover:bg-gray-200 text-black"/>
        </div>
        <Card title="pendekin.com" shortURL="pendekin.com/j7fJu" destinationURL="https://pendekin.com" tags={["social media"]}/>
        <Card title="My Github Portofolio" shortURL="pendekin.com/my-porto" destinationURL="https://github.com/hilmimz" tags={[""]}/>
        <Card title="Linkedin" shortURL="pendekin.com/my-linkidn" destinationURL="https://linkedin.com/hilmimz" tags={["job"]}/>
      </main>
    </div>
  )
}