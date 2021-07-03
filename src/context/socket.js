import io from 'socket.io-client';

const options = {
  transports: ['websocket'],
  upgrade: false
};
console.log('connect')
export const socket = io('localhost:3030/', options);