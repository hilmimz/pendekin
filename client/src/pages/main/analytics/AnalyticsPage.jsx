import Navbar from "../../../components/DashboardPage/Navbar"
import Button from "../../../components/DashboardPage/links/Button"
import { faCalendar, faPlus } from "@fortawesome/free-solid-svg-icons"
import { faSliders } from "@fortawesome/free-solid-svg-icons"
import Chart from "../../../components/Chart"

export default function Analytics(params) {

  const clickData = [
    { name: "Android", value: 15 },
    { name: "Windows", value: 10 },
    { name: "Iphone", value: 9 },
    { name: "Linux", value: 5 },
    { name: "Others", value: 2 }
  ];

  const chartColors = [
  "#732255", // strong primary
  "#E55050", // red secondary
  "#8fb6d4", // soft blue
  "#B2C6D5", // gray-blue
  "#E7F2E4", // pale greenish accent
];

  return(
    <div className="bg-background-gray h-screen pt-5">
      <Navbar/>
      <main className="px-35 pt-10">
        <section>
          <div className="flex justify-between">
            <header className="font-bold text-xl">Pendekin Analytics</header>
            <Button title="Create Link" icon={faPlus} classname="bg-secondary hover:bg-secondary-hover text-white"/>
          </div>
          <div className="flex items-center gap-2">
          <Button title="01 Oct 2025 → 14 Oct 2025" icon={faCalendar} classname="bg-white hover:bg-gray-200 text-black"/>
          <Button title="Filters" icon={faSliders} classname="bg-white hover:bg-gray-200 text-black"/>
          </div>
        </section>
        <hr class="border-t border-gray-200 my-6 mt-5" />
        <div className="flex justify-between gap-5">
          <div className="bg-white p-10 flex-1/3 rounded-md items-start">
            <header className="pb-5 text-lg font-bold text-tertiary">Top performing link by clicks</header>
                <table class="w-full text-md text-left rtl:text-right text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              #
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Link
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Destination
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Total Clicks
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b border-gray-200">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              1
                          </th>
                          <td class="px-6 py-4">
                              pendekin.com/7j9H7
                          </td>
                          <td class="px-6 py-4">
                              facebook.com
                          </td>
                          <td class="px-6 py-4">
                              20
                          </td>
                      </tr>
                      <tr class="bg-white border-b border-gray-200">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              2
                          </th>
                          <td class="px-6 py-4">
                              pendekin.com/yYt64
                          </td>
                          <td class="px-6 py-4">
                              instagram.com
                          </td>
                          <td class="px-6 py-4">
                              15
                          </td>
                      </tr>
                      <tr class="bg-white">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              3
                          </th>
                          <td class="px-6 py-4">
                              pendekin.com/9Ihg5
                          </td>
                          <td class="px-6 py-4">
                              github.com
                          </td>
                          <td class="px-6 py-4">
                              6
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className="bg-white p-10 rounded-md flex-2/3">
            <header className="text-tertiary font-bold pb-5 text-lg">Total click by device</header>
            <Chart
              title=""
              data={clickData}
              colors={chartColors}
              innerRadius={70}
              outerRadius={100}
            />
          </div>
        </div>
      </main>
    </div>
  )
}