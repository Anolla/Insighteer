import { useContext } from "react";
import { Heading, Box, Progress, Tooltip } from "@chakra-ui/react";

import { DataContext } from "../../context/data";

function AverageTickets() {
  const context = useContext(DataContext);
  // context.average
  return <Box className='item' borderWidth="0px" p='6' overflow="hidden">
    <Heading size='sm'>Averages</Heading>
    <Box p='8px' d='flex' h='100%' flexDir='column' fontSize='12px' justifyContent='space-evenly'>

      <Box>
        <Heading fontWeight='400' pb='5px' size='xs'>Pending ticket time(minutes)</Heading>
        <Tooltip label={(context.average.avgOpened / 60).toFixed(2)+' minutes'} aria-label="A tooltip">
          <Box d='flex' w='100%'>
            0
            <Progress m='5px' w='100%' colorScheme='facebook' value={context.average.avgOpened / 60} max={5} />
            5
          </Box>
        </Tooltip>
      </Box>
      <Box>
        <Heading fontWeight='400' pb='5px' size='xs'>Ticket processing time(minutes)</Heading>
        <Tooltip label={(context.average.avgClaimed / 60).toFixed(2)+' minutes'} aria-label="A tooltip">
          <Box d='flex' w='100%'>
            0
            <Progress m='5px' w='100%' colorScheme='facebook' value={context.average.avgClaimed / 60} max={20} />
            20
          </Box>
        </Tooltip>
      </Box>
      <Box>
        <Heading fontWeight='400' pb='5px' size='xs'>Tickets per student</Heading>
        <Tooltip label={(context.average.avgTicketsPerStudent).toFixed(2)+' tickets'} aria-label="A tooltip">
          <Box d='flex' w='100%'>
            0
            <Progress m='5px' w='100%' colorScheme='facebook' value={context.average.avgTicketsPerStudent} max={5} />
            4
          </Box>
        </Tooltip>

      </Box>

    </Box>
  </Box>;
}

export default AverageTickets;
