import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import AreaChats from "../../components/dashboard/areaDown/Areachats";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      {/* <AreaTable /> */}
      <AreaChats/>
    </div>
  );
};

export default Dashboard;
