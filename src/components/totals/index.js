import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";

function Totals() {
  const context = useContext(DataContext);
  return <Heading>Totals {JSON.stringify(context.totals)}</Heading>;
}

export default Totals;

