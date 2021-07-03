import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";

function TaState() {
  const context = useContext(DataContext);
  return <div>TaState {context.test}</div>;
}

export default TaState;





