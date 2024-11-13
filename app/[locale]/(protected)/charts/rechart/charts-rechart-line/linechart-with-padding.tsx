"use client";

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const LineChartWithPadding = ({ height = 300 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer height={height}>
      <LineChart height={height} data={data}>
        <CartesianGrid
          stroke='none'
          strokeDasharray="1 1"
          vertical={false}
        />
        <XAxis
          dataKey="name"
          padding={{ left: 30, right: 30 }}
          tick={{
            fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "12px",
          }}
          tickLine={false}
          stroke='none'
          axisLine={false}
        />
        <YAxis
          tick={{
            fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
            fontSize: "12px",
          }}
          tickLine={false}
          stroke='none'
        />
        <Tooltip />
        <Legend
          formatter={(value, entry) => <span style={{ color: entry.color, marginRight: config.isRtl ? "5px" : "0px" }}>{value}</span>}
        />
        <Line
          type="monotone"
          dataKey="pv"
          dot={{
            stroke: colors.primary,
            strokeWidth: 2,
          }}
          strokeWidth={2}
          stroke={colors.primary}
        />
        <Line
          type="monotone"
          dataKey="uv"
          dot={{
            stroke: colors.info,
            strokeWidth: 2,
          }}
          strokeWidth={2}
          stroke={colors.info}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartWithPadding;
