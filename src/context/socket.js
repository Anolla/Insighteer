import io from 'socket.io-client';

const options = {
  transports: ['websocket'],
  upgrade: false
};
export const socket = io('localhost:3030/', options);