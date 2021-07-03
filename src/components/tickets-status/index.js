import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";
import './style.scss'
function TicketsStatus() {
  const context = useContext(DataContext);
  // context.dailyTicketsInfo
  return <div className='ticketStatus'>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>;
}

export default TicketsStatus;


