import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Heading, Image, Box } from "@chakra-ui/react";
import './style.scss'
import green from '../../utilities/assets/ticketG.svg'
import red from '../../utilities/assets/ticketR.svg'
import yellow from '../../utilities/assets/ticketY.svg'
function TicketsStatus() {
  const context = useContext(DataContext);
  // context.dailyTicketsInfo
  return <div className='ticketStatus'>
    <Box alignItems='space-around' className='flexRow item2'>
      <Box className='flexCol'>
        <Heading color='#F43943' size='lg'>{context.dailyTicketsInfo.closed}</Heading>
        <Heading fontWeight='500' size='xs'>Closed tickets</Heading>
      </Box>
      <Box w='100%'><Image m='0 auto' w='50%' src={red} /></Box>

    </Box>
    <Box alignItems='space-around' className='flexRow item2'>
      <Box className='flexCol'>
        <Heading color='#43BE5F'  size='lg'>{context.dailyTicketsInfo.opened}</Heading>
        <Heading fontWeight='500' size='xs'>Opened tickets</Heading>
      </Box>
      <Box w='100%'><Image m='0 auto' w='50%' src={green} /></Box>

    </Box>
    <Box alignItems='space-around' className='flexRow item2'>
      <Box className='flexCol'>
        <Heading color='#FFD359'  size='lg'>{context.dailyTicketsInfo.claimed}</Heading>
        <Heading fontWeight='500' size='xs'>Claimed tickets</Heading>
      </Box>
      <Box w='100%'><Image m='0 auto' w='50%' src={yellow} /></Box>

    </Box>


  </div>;
}

export default TicketsStatus;


