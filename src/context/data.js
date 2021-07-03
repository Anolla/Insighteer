import { useState, createContext, useEffect } from "react";
import { socket } from "./socket";

export const DataContext = createContext();

export default function Data(props) {
  const [test, setTest] = useState("from context");
  const [totals, setTotals] = useState({});
  const [users, setUsers] = useState({});
  const [chart, setChart] = useState([]);
  const [dailyTicketsLevels, setDailyTicketsLevels] = useState({});
  const [dailyTicketsInfo, setDailyTicketsInfo] = useState({});
  const [average, setAverage] = useState({});
  /* 
  dailyTickets
   */
  useEffect(() => {
    socket.on("changeRole", (payload) => {
      console.log("from server", payload);
      setUsers(payload.users);
      setTotals(payload.totals);
      console.log("changeRole");
    });
    socket.on("createTicket", (payload) => {
      console.log("from server", payload);
      setTotals(payload.totals);
      setChart(payload.chart);
      setDailyTicketsLevels(payload.dailyTicketsLevels);
      setDailyTicketsInfo(payload.dailyTicketsInfo);
      setAverage(payload.average);
      console.log("createTicket");
    });
    socket.on("claimUnclaimCloseTicket", (payload) => {
      console.log("from server", payload);
      setDailyTicketsInfo(payload.dailyTicketsInfo);
      setAverage(payload.average);
      setUsers(payload.users);
      console.log("claimTicket");
    });
    socket.on("changeRoom", (payload) => {
      console.log("from server", payload);
      setUsers(payload.users);
      console.log("changeRoom");
    });
    console.log("Listen on all");
  }, []);

  const state = {
    test,
    setTest,
    totals,
    users,
    chart,
    dailyTicketsLevels,
    dailyTicketsInfo,
    average,
  };

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
}
