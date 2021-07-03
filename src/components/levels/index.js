import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/data";

function Levels() {
  const context = useContext(DataContext);
  // {context.dailyTicketsLevels}
  return <div>Levels </div>;
}

export default Levels;
