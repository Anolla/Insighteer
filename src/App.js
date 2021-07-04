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
import { ChakraProvider } from "@chakra-ui/react";
import { Else, If, Then } from "react-if";
import { Image } from "@chakra-ui/react";

import error from "./utilities/assets/error.gif";
import "./utilities/reset.scss";
import "./utilities/global.scss";
import "zingchart/es6";

function App() {
  return (
    <If condition={window.screen.width > 600}>
      <Then>
        <ChakraProvider>
          <DataProvider>
            <Nav />
            <SideNav />
            <main>
              <div className="daily">
                <Totals />
                <Chart />
                <TicketsStatus />
              </div>
              <div className="blocks">
                <Levels />
                <AverageTickets />
                <TaState />
              </div>
              <Footer />
            </main>
          </DataProvider>
        </ChakraProvider>
      </Then>
      <Else>
        <Image style={{ width: "100%" }} src={error} />
        <h4 style={{ textAlign: "center", padding: "15px", color: "#99aab5" }}>
          This Dashboard is only supported for larger screens
        </h4>
      </Else>
    </If>
  );
}

export default App;
