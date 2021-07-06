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
  Badge,
  Heading,
  Divider
} from "@chakra-ui/react";

function SideNav() {
  const context = useContext(DataContext);
  // context.users
  return (
    <div className="sidenav">
      <Heading p='8px' textAlign='center' size='xs'>Teachers Assistants</Heading>
      {/* <Divider  m='5px' size='sm' /> */}
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                style={{ display: "flex", justifyContent: "space-between" }}
                flex="1"
                textAlign="left"
              >
                <Heading size="xs" fontWeight="500">
                  Available
                </Heading>
                <Badge className="flexRow" colorScheme="green">
                  {context.users.available.length}
                </Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Card users={context.users.available} color={"green"} />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                style={{ display: "flex", justifyContent: "space-between" }}
                flex="1"
                textAlign="left"
              >
                <Heading size="xs" fontWeight="500">
                  In Ticket
                </Heading>
                <Badge className="flexRow" colorScheme="yellow">
                  {context.users.inTicket.length}
                </Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Card users={context.users.inTicket} color={"yellow"} />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                style={{ display: "flex", justifyContent: "space-between" }}
                flex="1"
                textAlign="left"
              >
                <Heading size="xs" fontWeight="500">
                  Not Available
                </Heading>
                <Badge className="flexRow" colorScheme="red">
                  {context.users.notAvailable.length}
                </Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Card users={context.users.notAvailable} color={"red"} />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                style={{ display: "flex", justifyContent: "space-between" }}
                flex="1"
                textAlign="left"
              >
                <Heading size="xs" fontWeight="500">
                  Excused
                </Heading>

                <Badge className="flexRow" colorScheme="purple">
                  {context.users.excused.length}
                </Badge>
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Card users={context.users.excused} color={"purple"} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default SideNav;
