import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/data";

function Levels() {
  const context = useContext(DataContext);
  return <div>Levels {context.test}</div>;
}

export default Levels;
