import React from "react";
import "./AreaDown.scss";

const tableData = [
  { pageName: "/argon/profile.html", visitors: "1,795", uniqueUsers: "190", bounceRate: "46,53%" },
  { pageName: "/argon/tables.html", visitors: "2,050", uniqueUsers: "147", bounceRate: "50,87%" },
  { pageName: "/argon/charts.html", visitors: "3,513", uniqueUsers: "294", bounceRate: "36,49%" },
  { pageName: "/argon/index.html", visitors: "3,985", uniqueUsers: "319", bounceRate: "46,53%" },
  { pageName: "/argon/", visitors: "4,569", uniqueUsers: "340", bounceRate: "46,53%" },
];

const AnalyticsTable = () => {
  return (
    <div className="analytics-table-container">
    <div className="downhed">
    <h4 className="progress-table-title">Page Visit</h4>
    <button className="btn">See All</button>
    </div>
      <table className="analytics-table">
        <thead>
          <tr>
            <th>Page Name</th>
            <th>Visitors</th>
            <th>Unique Users</th>
            <th>Bounce Rate</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.pageName}</td>
              <td>{row.visitors}</td>
              <td>{row.uniqueUsers}</td>
              <td>{row.bounceRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
