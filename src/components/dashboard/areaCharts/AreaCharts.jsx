import AreaProgressChart from "./AreaProgressChart";
import StackedAreaChart from './AreaBarChart';
import VerticalProgressBar from "./VerticalProgressBar";

const AreaCharts = () => {
  return (
    <section className="content-area-charts">
      <StackedAreaChart />
      {/* <AreaProgressChart /> */}
      <VerticalProgressBar/>
    </section>
  );
};

export default AreaCharts;
