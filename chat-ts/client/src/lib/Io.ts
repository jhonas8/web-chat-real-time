import { io } from 'socket.io-client'

export const ENDPOINT = 'http://localhost:5000'

export const socket= io(ENDPOINT)
export let socketID =''
socket.on('connect', ()=>{
    socketID = socket.id
})