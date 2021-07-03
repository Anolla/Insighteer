import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/data";

function Levels() {
  const context = useContext(DataContext);
  return <Heading>Levels {context.test}</Heading>;
}

export default Levels;
