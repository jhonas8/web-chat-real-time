import React, { useState, useEffect } from 'react'
import { CenterDiv } from '../enter/style'
import Plattaform from '../plattaform/Plattaform'
import { socket, socketID, ENDPOINT } from './../../lib/Io'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import $ from 'jquery'

interface Props {
    NameRoom : {name: string, room: string}
    isDesktop : boolean
}

type messagesType = {
    user: string,
    text: string
}

type user_type ={
    id: string,
    name: string,
    room: string,
}

export default function Chat(props: Props): JSX.Element {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<messagesType[]>([])
    const [firstMessages, setFirstMessages] = useState<messagesType[]>([]) //I've separeted the "firt messages" from the posterior ones, reducing the possibility of future conflicts (as repeted messages bug).
    const [users, setUsers] = useState<user_type[]>([])
    const [show, setShow] = useState(false)

    $('window').on('unload',(): void =>{
        socket.emit('disconnection')
    })

    const joinProcess = (): void =>{
        if(props.NameRoom.name && props.NameRoom.room){

            socket.emit('join', props.NameRoom, (error: string)=>setShow(
                error ? true : false
            ))
        }else setShow(true)
    }

    const fetchUsers = ():void =>{
        socket.on('users', (Users: user_type[])=>{
            setUsers(Users)
        })
    }

    const fetchMessages = ():void =>{
        socket.on('firstMessages',(message: messagesType)=>{
            setFirstMessages([...firstMessages,message])
        })
        socket.on('message',(message: messagesType)=>{
            setMessages([...messages,message])
        })
    }

    const sendMessages = ():void =>{
        if(message){
            socket.emit('sendMessage', message)
            setMessages([...messages, {user:props.NameRoom.name, text:message}])
            setMessage('')
        }
    }

    useEffect((): void =>{
        joinProcess()
    },[ENDPOINT])

    useEffect((): void =>{
        fetchMessages()
    },[messages])

    useEffect((): void =>{
        fetchUsers()
    },[users])

    console.log(firstMessages)

    return(
        <>
        <Modal 
            show={show}
            onHide={()=>setShow(false)}
            backdrop='static'
            keyboard={false}
        >
            <Modal.Header>
                {props.NameRoom.name} alredy exists!
            </Modal.Header>
            <Modal.Body>
                Please, choose another username!
            </Modal.Body>
            <Modal.Footer>
                <a href='/'>
                    <Button>
                        OK!
                    </Button>
                </a>
            </Modal.Footer>
        </Modal>
        <CenterDiv>
            <Plattaform
                sendMessage={sendMessages}
                message={message}
                messages={messages}
                NameRoom={props.NameRoom}
                isDesktop={props.isDesktop!}
                setMessage={setMessage}
                users={users}
                firstMessages={firstMessages}
            />
        </CenterDiv>
        </>
    )
}
