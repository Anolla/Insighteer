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
    gui: {
      contextMenu: {
        button: {
          visible: false
        },
        empty: true
      },
    },
    plotarea: {
      adjustLayout: true
    },
    scaleX: {
      // itemsOverlap: true,
      maxItems:24,
      label: {
        text: "Tickets Track"
      },
      labels: data[0],
    },
    series: [{
      values: data[1],
      backgroundColor: '#385898'
    }
    ]
  };
  // context.chart
  return <div className='chart'>
    <ZingChart height="100%" width="100%" data={myConfig} />
  </div>;
}

export default Chart;




