import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";

function TicketsStatus() {
  const context = useContext(DataContext);
  return <Heading>TicketsStatus {context.test}</Heading>;
}

export default TicketsStatus;


