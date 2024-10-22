const data = [
  { id: 1, name: "Instagram", percentValues: 75, visitors: 3678 },
  { id: 2, name: "Google", percentValues: 80, visitors: 4807 },
  { id: 3, name: "Facebook", percentValues: 70, visitors: 5480 },
  { id: 4, name: "Facebook", percentValues: 60, visitors: 1480 },
  { id: 5, name: "Twitter", percentValues: 30, visitors: 2645 },
];

const AreaProgressChart = () => {
  return (
    <div className="progress-table-container">
      <div className="progress-table-info">
        <h4 className="progress-table-title">Social Traffic</h4>
        <button className="btn">See All</button>
      </div>
      <table className="progress-table">
        <thead>
          <tr>
            <th>Referal</th>
            <th>Visitors</th>
            {/* <th>Percentage</th>
            <th>Progress</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{fontSize:"12px"}}>{item.name}</td>
              <td style={{fontSize:"12px"}}>{item.visitors}</td>
              {/* <td></td> */}
              <td className="rr" style={{fontSize:"12px"}}>
              {item.percentValues}%
                <div className="progress-bar">
                  <div
                    className="progress-bar-filled"
                    style={{ width: `${item.percentValues}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AreaProgressChart;
