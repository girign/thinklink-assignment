import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export default function LineChartCustomised({
  data,
  height,
  width,
  strokeWidth = 3,
  strokeColor,
  dotColor,
}) {
  return (
    <LineChart data={data} height={height} width={width}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Line
        dataKey="sales"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        dot={{ fill: dotColor }}
      />
    </LineChart>
  );
}
