import { Heading } from "@chakra-ui/react";
import Card from './cards'
import { SocketContext } from '../../context/socket'

import { useContext } from 'react';


function SideNav() {
  const context = useContext(SocketContext)
  return (
    <button onClick={()=>{
      context.socket.emit('test',{id:1})
    }}>test</button>
    );
}

export default SideNav;
