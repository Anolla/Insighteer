import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";

function Chart() {
  const context = useContext(DataContext);
  return <Heading>Chart {context.test}</Heading>;
}

export default Chart;




