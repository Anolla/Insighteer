import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../context/data";
import ZingChart from 'zingchart-react';


function Levels() {
  const context = useContext(DataContext);
  const total = context.dailyTicketsLevels[102] + context.dailyTicketsLevels[201] + context.dailyTicketsLevels[301] + context.dailyTicketsLevels['401js'] + context.dailyTicketsLevels['401py'] + context.dailyTicketsLevels['401java']
  const config = {
    type: "pie",
    plot: {
      borderColor: "#2B313B",
      borderWidth: 5,
      // slice: 90,
      valueBox: {
        placement: 'out',
        text: '%t\n%npv%',
        fontFamily: "Open Sans",
        fontSize: '10',
      },

      animation: {
        effect: 2,
        method: 5,
        speed: 900,
        sequence: 1,
        delay: 0
      }
    },
    
    plotarea: {
      margin: "20 0 0 0"
    },
    series: [{
      values: [Number((context.dailyTicketsLevels['102'] / total).toFixed(2))],
      text: '102',
      backgroundColor: '#50ADF5',
      detached: false,
      tooltip: {
        fontSize: '16',
        fontFamily: "Open Sans",
        padding: "5 10",
        text: `%t\n%npv% - ${context.dailyTicketsLevels['102']} ticket`,
      },
    },
    {
      values: [Number((context.dailyTicketsLevels['201'] / total).toFixed(2))],
      text: "201",
      backgroundColor: '#FF7965',
      detached: false,
      tooltip: {
        fontSize: '16',
        fontFamily: "Open Sans",
        padding: "5 10",
        text: `%t\n%npv% - ${context.dailyTicketsLevels['201']} ticket`,
      },
    },
    {
      values: [Number((context.dailyTicketsLevels['301'] / total).toFixed(2))],
      text: '301',
      backgroundColor: '#FFCB45',
      detached: false,
      tooltip: {
        fontSize: '16',
        fontFamily: "Open Sans",
        padding: "5 10",
        text: `%t\n%npv% - ${context.dailyTicketsLevels['301']} ticket`,
      },
    },
    {
      text: '401 JavaScript',
      values: [Number((context.dailyTicketsLevels['401js'] / total).toFixed(2))],
      backgroundColor: '#6877e5',
      detached: false,
      tooltip: {
        fontSize: '16',
        fontFamily: "Open Sans",
        padding: "5 10",
        text: `%t\n%npv% - ${context.dailyTicketsLevels['401js']} ticket`,
      },
    },
      {
        text: '401 Python',
        values: [Number((context.dailyTicketsLevels['401py'] / total).toFixed(2))],
        backgroundColor: '#6FB07F',
        detached: false,
      tooltip: {
        fontSize: '16',
        fontFamily: "Open Sans",
        padding: "5 10",
        text: `%t\n%npv% - ${context.dailyTicketsLevels['401py']} ticket`,
      },
      },
      {
        text: '401 Java',
        values: [Number((context.dailyTicketsLevels['401java'] / total).toFixed(2))],
        backgroundColor: '#b06faa',
        detached: false,
      tooltip: {
        fontSize: '16',
        fontFamily: "Open Sans",
        padding: "5 10",
        text: `%t\n%npv% - ${context.dailyTicketsLevels['401java']} ticket`,
      },
      }
    ]
  };
  return <Box className='item' borderWidth="0px" p='6' overflow="hidden">
    <Heading size='sm'>Levels</Heading>
    <ZingChart height='100%' width='100%' data={config} />
  </Box>;
}

export default Levels;
