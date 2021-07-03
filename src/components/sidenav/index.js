import { useContext } from "react";
import Card from "./cards";
import { DataContext } from "../../context/data";
import "./style.scss";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Badge
} from "@chakra-ui/react"

function SideNav() {
  const context = useContext(DataContext);
  // context.users
  return <div className="sidenav"><Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }} flex="1" textAlign="left">
            Available <Badge className='flexRow' colorScheme="green">{context.users.available.length}</Badge>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>

      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }} flex="1" textAlign="left">
            In Ticket <Badge className='flexRow' colorScheme="yellow">{context.users.inTicket.length}</Badge>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>

      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }} flex="1" textAlign="left">
            Not Available<Badge className='flexRow' colorScheme="red">{context.users.notAvailable.length}</Badge>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>

      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }} flex="1" textAlign="left">
            Excused<Badge className='flexRow' colorScheme="purple">{context.users.excused.length}</Badge>
          </Box>

          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>

      </AccordionPanel>
    </AccordionItem>
  </Accordion></div>;
}

export default SideNav;
