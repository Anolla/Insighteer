import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/data";
import { Heading } from "@chakra-ui/react";
import ZingChart from "zingchart-react";

import './style.scss'
function Chart() {
  const context = useContext(DataContext);
  const [data, setData] = useState([[], []])

  useEffect(() => {
    const time = []
    const tickets = []
    context.chart.forEach((bar) => {
      time.push(bar.hour)
      tickets.push(bar.numOfTickets)
    })
    setData([time, tickets])
  }, [context.chart])

  var myConfig = {
    type: "bar",
    plotarea: {
      adjustLayout: true
    },
    scaleX: {
      labels: data[0]
    },
    series: [{
      values: data[1]
    }
    ]
  };
  // context.chart
  return <div className='chart'>
    <ZingChart height="100%" width="100%" data={myConfig} />
  </div>;
}

export default Chart;




