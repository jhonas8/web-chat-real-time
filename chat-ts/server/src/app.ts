import express from 'express'
import { createServer, Server as httpServer } from 'http'
import router from './routers/main_page'
import { Server, Socket } from 'socket.io'
import users from './users/users'
import cors from 'cors'

type name_room ={ 
    name: string,
    room: string,
}

type message = {
    user: string,
    text: string,
}
type user_type ={
    id: string,
    name: string,
    room: string,
}

class App {
    readonly server: httpServer
    private app: express.Express
    private io: Server

    constructor(){
        this.app = express()
        this.server = createServer(this.app)

        this.io = new Server(this.server, {cors:{origin:'*'}})

        this.io.on('connection', (socket: Socket)=>{
            socket.on('join', ({name, room}: name_room, callback: Function)=>{
                const { user, error }: {user:user_type, error:string} = users.addUser({
                                                                        id:socket.id, 
                                                                        name:name, 
                                                                        room:room
                                                                    })
                if(error) return callback(error)
       
                socket.join(user.room)

                if(name && room){ //Guarantee we only emit the message if all above is properly done.
                    socket.emit('message', {
                        user:'Admin',
                        text:`Welcome to ${user.room}!`,
                    })
                    socket.broadcast.to(user.room).emit('message',{
                        user:'Admin',
                        text:`${user.name} has joined!`,
                    })
                    socket.emit('users', users.allUsers(user.room))
                }
            })

            socket.on('sendMessage', (message)=>{
                const user = users.getUser(socket)
        
                socket.to(user.room).emit('message', <message>{
                    user: user.name,
                    text: message,
                })
            })

            socket.on('disconnection',()=>{
                const user = users.getUser(socket)
                socket.leave(user.room)
            })
            
            socket.on('disconnect', ()=>{
                users.removeUser(socket)
            })
        })

        this.app.use(router)
        this.app.use(cors())
    }
}

export default new App().server