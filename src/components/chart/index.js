import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";
import './style.scss'
function Chart() {
  const context = useContext(DataContext);
  // context.chart
  return <div className='chart'>Chart</div>;
}

export default Chart;




