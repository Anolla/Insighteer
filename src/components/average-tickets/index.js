import { useContext } from "react";
import { Heading } from "@chakra-ui/react";

import { DataContext } from "../../context/data";

function AverageTickets() {
  const context = useContext(DataContext);
  return <Heading>AverageTickets {context.test}
  </Heading>;
}

export default AverageTickets;
