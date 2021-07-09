import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Grid, GridItem, Divider, Heading } from "@chakra-ui/react"
import './style.scss'

function Totals() {
  const context = useContext(DataContext);
  // context.totals
  return <Grid
    templateColumns="repeat(3, 1fr)"
    gap={2}
    className='total'
  >
    <GridItem d='flex' justifyContent='space-evenly' alignContent='center' colSpan={1} >
      <Heading color='#202020' fontWeight='700' className='flexCol' size='xs'>Total Stats</Heading>
      <Divider orientation="vertical" />
    </GridItem>
    <GridItem d='flex' justifyContent='space-evenly' alignContent='center' colSpan={2}>
      <Heading  fontWeight='500' className='flexCol' size='xs'>{context.totals.tickets} <p>Tickets</p></Heading>
      <Heading  fontWeight='500' className='flexCol' size='xs'>{context.totals.students} <p>Students</p></Heading>
      <Heading  fontWeight='500' className='flexCol' size='xs'>{context.totals.TAs} <p>TAs</p></Heading>
    </GridItem>

    {/* <GridItem colSpan={1}>
    </GridItem> */}

  </Grid>
}

export default Totals;

