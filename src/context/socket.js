import io from 'socket.io-client';

const options = {
  transports: ['websocket'],
  upgrade: false
};
console.log('connect')
export const socket = io('https://bot.codeowners.net/', options);