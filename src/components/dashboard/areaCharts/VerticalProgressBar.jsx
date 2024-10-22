import React from "react";
import "./AreaCharts.scss";

const data = [
  { month: "Jul", value: 30 },
  { month: "Aug", value: 20 },
  { month: "Sep", value: 10 },
  { month: "Oct", value: 0 },
  { month: "Nov", value: 15 },
  { month: "Dec", value: 25 },
];

const VerticalProgressBar = () => {
  return (
    <div className="progress-chart-container">
      {/* Progress Chart with Heading Inside */}
      <div className="progress-chart">
        {/* Heading Inside the Chart */}
        <div className="chart-header">
          <h1>Perfomance</h1>
          <p>Total orders</p>
        </div>
        <div className="over">
        {/* Y-axis labels */}
        <div className="y-axis">
          <p>30</p>
          <p>20</p>
          <p>10</p>
          <p>0</p>
        </div>

        {/* Progress Bars */}
        <div className="bars-container">
          {data.map((item, index) => (
            <div className="bar-item" key={index}>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{ height: `${item.value * 3.33}%` }} // Scale value for better visual representation
                ></div>
              </div>
              <p className="bar-label">{item.month}</p>
            </div>
          ))}
        </div>
</div>
      </div>
    </div>
  );
};

export default VerticalProgressBar;
