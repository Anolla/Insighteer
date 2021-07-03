import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";

function TaState() {
  const context = useContext(DataContext);
  // Emojis context.dailyTicketsInfo.opened context.dailyTicketsInfo.users.available 
  return <div>TaState</div>;
}

export default TaState;





