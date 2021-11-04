import React from 'react'
import { Stack, Card, Centerlized } from './style'
import { TextInput, Messages } from '../'
import Dropdown from 'react-bootstrap/Dropdown'

type messagesType = {
    user: string,
    text: string
}
type user_type ={
    id: string,
    name: string,
    room: string,
}

interface Props {
    NameRoom: {name: string, room: string}
    sendMessage: Function
    setMessage: Function
    message: string
    messages: messagesType[]
    isDesktop: boolean
    users?: user_type[]
}

export default function Plattaform(props: Props) {
    /* @public messages, message, sendMessage, NameRoom */
    const { name, room } = props.NameRoom
    return (
        <Centerlized isDesktop={props.isDesktop}>
            <Stack direction='horizontal' gap={2}> {/* Top infobar*/}
                <div/>
                <Dropdown>
                    <h4>
                        {room}
                        <Dropdown.Toggle style={{width:0, height:0, border:'none', 
                        backgroundColor:'transparent', padding:0, margin:0}}/>
                    </h4>
                    <Dropdown.Menu variant='light'>
                        <ul style={{listStyle:'none'}}>
                            {props.users && (
                                props.users.map(user => <li style={{
                                    color: user.name === props.NameRoom.name ? 'grey' : 'black',
                                    display: 'inline-block'
                                }}>
                                    {user.name}
                                    <img src='/assets/icons/onlineIcon.png' alt='online-icon'
                                        style={{marginLeft:'5px'}}
                                    />
                                </li>)
                            )}
                        </ul>
                    </Dropdown.Menu>
                </Dropdown>
                <a href='/'>
                    <img src='/assets/icons/closeIcon.png' alt='close-icon'/>
                </a>
            </Stack>
            <Messages
                messages={props.messages}
                name={props.NameRoom.name}
            />
            <TextInput
                message={props.message}
                setMessage={props.setMessage}
                sendMessage={props.sendMessage}
            />
        </Centerlized>
    )
}
