import { useContext } from "react";
import { DataContext } from "../../context/data";
import { Grid, GridItem, Divider, Heading } from "@chakra-ui/react"
import './style.scss'

function Totals() {
  const context = useContext(DataContext);
  // context.totals
  return <Grid
    templateColumns="repeat(4, 1fr)"
    gap={6}
    className='total'
  >
    <GridItem d='flex' justifyContent='space-evenly' alignContent='center' colSpan={1} >
      <Heading color='#202020' fontWeight='700' className='flexCol' size='sm'>Total Stats</Heading>
      <Divider orientation="vertical" />
    </GridItem>
    <GridItem d='flex' justifyContent='space-evenly' alignContent='center' colSpan={2}>
      <Heading color='#595959' className='flexCol' size='sm'>{context.totals.tickets} Tickets</Heading>
      <Heading color='#595959' className='flexCol' size='sm'>{context.totals.students} Students</Heading>
      <Heading color='#595959' className='flexCol' size='sm'>{context.totals.TAs} TAs</Heading>
    </GridItem>

    <GridItem colSpan={1}>
    </GridItem>

  </Grid>
}

export default Totals;

