import Nav from "./components/nav";
import SideNav from "./components/sidenav";
import Totals from "./components/totals";
import Footer from "./components/footer";
import Chart from "./components/chart";
import Levels from "./components/levels";
import TicketsStatus from "./components/tickets-status";
import TaState from "./components/ta-state";
import AverageTickets from "./components/average-tickets";
import DataProvider from "./context/data";
import { ChakraProvider } from "@chakra-ui/react"

import "./utilities/reset.scss";
import "./utilities/global.scss";
import 'zingchart/es6';

function App() {
  return (
    <ChakraProvider>
      <DataProvider>
        <Nav />
        <SideNav />
        <main>
          <div className='daily'>
            <Totals />
            <Chart />
            <TicketsStatus />
          </div>
          <div className='blocks'>
            <Levels />
            <AverageTickets />
            <TaState />
          </div>
          <Footer />
        </main>
      </DataProvider>
    </ChakraProvider>

  );
}

export default App;
