import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";
import './style.scss'

function Totals() {
  const context = useContext(DataContext);
  // context.totals
  return <div className='total'>Totals</div>;
}

export default Totals;

