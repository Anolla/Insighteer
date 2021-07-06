import { useState, createContext, useEffect } from "react";
import { socket } from "./socket";
import superagent from 'superagent'


export const DataContext = createContext();

export default function Data(props) {
  const [test, setTest] = useState("from context");
  const [totals, setTotals] = useState({ tickets: 0, TAs: 44, students: 396 });
  const [users, setUsers] = useState({ available: [], inTicket: [], notAvailable: [], excused: [] });
  const [chart, setChart] = useState([]);
  const [dailyTicketsLevels, setDailyTicketsLevels] = useState({ '102': 0, '201': 0, '301': 0, '401js': 0, '401java': 0, '401py': 0 });
  const [dailyTicketsInfo, setDailyTicketsInfo] = useState({ opened: 0, closed: 0, claimed: 0 });
  const [average, setAverage] = useState({
    avgClaimed: 0,
    avgOpened: 0,
    avgTicketsPerStudent: 1
  });

  const loadAll = async () => {
    const results = await superagent.get('https://bot.codeowners.net/all');
    const payload = results.body;

    // console.log("from server", payload);
    setUsers(payload.users);
    setTotals(payload.total);
    setChart(payload.chart);
    setDailyTicketsLevels(payload.dailyTicketsLevels);
    setDailyTicketsInfo(payload.dailyTicketsInfo);
    setAverage(payload.average);
  }
  useEffect(() => {

    loadAll()
    socket.on("changeRole", (payload) => {
      // console.log("from server", payload);
      setUsers(payload.users);
      setTotals(payload.total);
      // console.log("changeRole");
    });
    socket.on("createTicket", (payload) => {
      // console.log("from server", payload);
      setTotals(payload.total);
      setChart(payload.chart);
      setDailyTicketsLevels(payload.dailyTicketsLevels);
      setDailyTicketsInfo(payload.dailyTicketsInfo);
      setAverage(payload.average);
      // console.log("createTicket");
    });
    socket.on("claimUnclaimCloseTicket", (payload) => {
      console.log("from server", payload);
      setUsers(payload.users);
      setDailyTicketsInfo(payload.dailyTicketsInfo);
      setAverage(payload.average);
      // console.log("claimTicket");
    });
    socket.on("changeRoom", (payload) => {
      // console.log("from server", payload);
      setUsers(payload.users);
      // console.log("changeRoom");
    });

    // let x = 0;
    // setInterval(()=>{
    //   if(x == 4){x =0}
    //   const arr = [[0,1,1] ,[0,1,0] , [0,1,0], [1,1,0] , [1,0,0]]

    //   console.log('done' , arr[x])
    //   setUsers({available : arr[x][1]});
    //   setDailyTicketsInfo({opened : arr[x][0] , claimed : arr[x][2]});
    //   x++
    //   console.log(x)
  
    // },5000)
  }, []);








  const state = {
    test,
    setTest,
    totals,
    users,
    chart,
    dailyTicketsLevels,
    dailyTicketsInfo,
    average
  };


  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
}
