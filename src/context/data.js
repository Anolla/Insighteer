import { useState, createContext, useEffect } from "react";
import { socket } from "./socket";
import superagent from 'superagent'



export const DataContext = createContext();

export default function Data(props) {
  const [activeCourses, setActiveCourses] = useState(JSON.parse(localStorage.getItem('courses')) ? JSON.parse(localStorage.getItem('courses')) : []);
  const [playing, setPlaying] = useState(false)
  const [song, setSong] = useState(localStorage.getItem('sound') ? localStorage.getItem('sound') : 'sound1')
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
  const [audio, setAudio] = useState(new Audio(`${window.location.origin}/sounds/${song}.mp3`))

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

  const playSound = () => {
    if (!playing) {
      // audio.addEventListener("canplaythrough", event => {
      audio.play();
      // });
      setPlaying(true)
    }
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
      // console.log("from server", payload);
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
    socket.on("sound", (payload) => {
      // if (activeCourses.includes(payload))
      playSound(payload)
    });

    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sound', song)
    setAudio(new Audio(`${window.location.origin}/sounds/${song}.mp3`))
  }, [song])

  const state = {
    totals,
    users,
    chart,
    dailyTicketsLevels,
    dailyTicketsInfo,
    average,
    setActiveCourses,
    setSong,
    song
  };


  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
}
