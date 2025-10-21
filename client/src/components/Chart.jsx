import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Chart({
  title = "Total Clicks",
  centerTitle = "Clicks", // judul di tengah
  data = [],
  colors = [],
  innerRadius = 60,
  outerRadius = 90,
  }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Pie>

            {/* Label di tengah */}
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-500 text-sm"
            >
              {centerTitle}
            </text>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-800 text-xl font-bold"
            >
              {total}
            </text>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}