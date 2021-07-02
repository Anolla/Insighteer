import { createContext } from "react";
import io from 'socket.io-client';

export const SocketContext = createContext();

function SocketProvider(props) {
  const options = {
    transports: ['websocket'],
  };
  const socket = io('localhost:3030/', options);

  const state = {
    socket
  };
  return (
    <SocketContext.Provider value={state}>
      {props.children}
    </SocketContext.Provider>
  );
}
export default SocketProvider;