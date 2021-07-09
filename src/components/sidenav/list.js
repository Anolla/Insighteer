import React from 'react'
import Card from "./cards";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Badge,
  Heading,

} from "@chakra-ui/react";

export default function List(props) {
  return (
    <Accordion allowToggle className='list'>
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
                {props.users.available.length}
              </Badge>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Card users={props.users.available} color={"green"} />
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
                {props.users.inTicket.length}
              </Badge>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Card users={props.users.inTicket} color={"yellow"} />
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
                {props.users.notAvailable.length}
              </Badge>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Card users={props.users.notAvailable} color={"red"} />
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
                {props.users.excused.length}
              </Badge>
            </Box>

            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Card users={props.users.excused} color={"purple"} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
