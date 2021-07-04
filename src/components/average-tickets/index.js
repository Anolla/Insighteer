import { useContext } from "react";
import { Heading } from "@chakra-ui/react";

import { DataContext } from "../../context/data";

function AverageTickets() {
  const context = useContext(DataContext);
  // context.average
  return <div>AverageTickets 
  </div>;
}

export default AverageTickets;
