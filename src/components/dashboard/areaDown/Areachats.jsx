import AnalyticsTable from "./areaDown";
import AreaProgressChart from './../areaCharts/AreaProgressChart';


const AreaChats = () => {
  return (
    <section className="content-area-charts">
      <AnalyticsTable/>
      <AreaProgressChart />
    </section>
  );
};

export default AreaChats;
