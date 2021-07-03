import Nav from "./components/nav";
import SideNav from "./components/sidenav";
import Totals from "./components/totals";
import Footer from "./components/footer";
import Chart from "./components/chart";
import Levels from "./components/levels";
import TicketsStatus from "./components/tickets-status";
import TaState from "./components/ta-state";
import AverageTickets from "./components/average-tickets";

import {socket } from "./context/socket";
import DataProvider from "./context/data";

import "./utilities/reset.scss";
import "./utilities/global.scss";

function App() {
  return (
    <DataProvider>
      <Nav />
      <SideNav />
      <main>
        <Totals />
        <Chart />
        <TicketsStatus />
        <Levels />
        <AverageTickets />
        <TaState />
        <Footer />
        <button onClick={()=>{socket.emit('changeRole')}}>Change role</button>
        <button onClick={()=>{socket.emit('createTicket')}}>Create</button>
        <button onClick={()=>{socket.emit('claimTicket')}}>Claimd</button>
        <button onClick={()=>{socket.emit('closeTicket')}}>Close</button>
        <button onClick={()=>{socket.emit('changeRoom')}}>Change room</button>
      </main>
    </DataProvider>
  );
}

export default App;
