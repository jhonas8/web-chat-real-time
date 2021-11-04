import { Socket } from 'socket.io'

type user_type ={
    id: string,
    name: string,
    room: string,
}

class Users {
    readonly addUser: Function
    readonly getUser: Function
    readonly removeUser : Function
    readonly allUsers: Function
    private users : user_type[] = []

    constructor(){
        this.addUser = ({id, name, room} : user_type) : object | user_type =>{
            const check = this.users.find( user => user.name === name && user.room === room )
            if(check) return {error: "Username already exists!"}
            
            const user: user_type = { id, name, room } 
            this.users.push(user)

            return { user }
        }
        this.getUser = (socket: Socket): user_type => this.users.find(
            user => user.id === socket.id
        )!
        this.removeUser = (socket: Socket): void | object =>{
            const index = this.users.findIndex(
                user => user.id === socket.id
            )

            if(index !== -1){
                this.users = this.users
                            .slice(0, index)
                            .concat(this.users.slice(index+1))
            }
        }
        this.allUsers = (room: string): user_type[]=>{
            const users = this.users.filter( user => user.room === room)

            return users
        }
    }
}

export default new Users()