import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";

function TaState() {
  const context = useContext(DataContext);
  return <Heading>TaState {context.test}</Heading>;
}

export default TaState;





