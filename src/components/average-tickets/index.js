import { useContext } from "react";
import { Heading } from "@chakra-ui/react";

import { DataContext } from "../../context/data";

function AverageTickets() {
  const context = useContext(DataContext);
  return <div>AverageTickets {context.test}
  </div>;
}

export default AverageTickets;
