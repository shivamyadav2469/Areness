import { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const data = [
  {
    month: "Jan",
    loss: 70,
    profit: 100,
  },
  {
    month: "Feb",
    loss: 55,
    profit: 85,
  },
  {
    month: "Mar",
    loss: 35,
    profit: 90,
  },
  {
    month: "April",
    loss: 90,
    profit: 70,
  },
  {
    month: "May",
    loss: 55,
    profit: 80,
  },
  {
    month: "Jun",
    loss: 30,
    profit: 50,
  },
  {
    month: "Jul",
    loss: 32,
    profit: 75,
  },
  {
    month: "Aug",
    loss: 62,
    profit: 86,
  },
  {
    month: "Sep",
    loss: 55,
    profit: 78,
  },
];

const StackedAreaChart = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="area-chart">
      <div className="area-chart-info">
        <h5 className="area-chart-title">Total Revenue</h5>
        <div className="chart-info-data">
          <div className="info-data-value">$50.4K</div>
          <div className="info-data-text">
            <p>5% increase from last month</p>
          </div>
        </div>
      </div>
      <div className="area-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{ fill: theme === LIGHT_THEME ? "#676767" : "#f3f3f3", fontSize: 14 }}
            />
            <YAxis tick={{ fill: theme === LIGHT_THEME ? "#676767" : "#f3f3f3" }} />
            <Tooltip />
            <Area className="are"
              type="monotone"
              dataKey="profit"
              stackId="1"
              stroke="#475be8"
              fill="#475be8"
            />
            <Area
              type="monotone"
              dataKey="loss"
              stackId="1"
              stroke="#e3e7fc"
              fill="#e3e7fc"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedAreaChart;
