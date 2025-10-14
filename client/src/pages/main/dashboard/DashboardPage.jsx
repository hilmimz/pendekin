import Navbar from "../../../components/DashboardPage/Navbar"
import Card from "../../../components/DashboardPage/Card"

export default function DashboardPage(params) {
  return(
    <div className="bg-background-gray h-screen pt-5">
      <Navbar/>
      <main>
        <Card/>
      </main>
    </div>
  )
}