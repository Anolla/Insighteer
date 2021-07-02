import SocketProvider from "./context/socket";
import Nav from "./components/nav";
import SideNav from "./components/sidenav";
import Totals from "./components/totals";
import Footer from "./components/footer";
import Chart from "./components/chart";
import Levels from "./components/levels";
import TicketsStatus from "./components/tickets-status";
import TaState from "./components/ta-state";
import AverageTickets from "./components/average-tickets";

function App() {
  return (
    <SocketProvider>
      <Nav />
      <Totals />
      <Chart />
      <SideNav />
      <main>
        <Chart />
        <TicketsStatus />
        <Levels />
        <AverageTickets />
        <TaState />
        <Footer />
      </main>
    </SocketProvider>
  );
}

export default App;
