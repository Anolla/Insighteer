import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";
import './style.scss'
function Chart() {
  const context = useContext(DataContext);
  return <div className='chart'>Chart {context.test}</div>;
}

export default Chart;




