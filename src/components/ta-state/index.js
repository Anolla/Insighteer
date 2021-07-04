import { useContext } from "react";
import { DataContext } from "../../context/data";
import {
  Box,Heading
} from "@chakra-ui/react"

function TaState() {
  const context = useContext(DataContext);
  // Emojis context.dailyTicketsInfo.opened context.dailyTicketsInfo.users.available 
  return  <Box className='item' borderWidth="0px" p='6' overflow="hidden">
  <Heading size='sm'>Status</Heading>
</Box>;
}

export default TaState;





