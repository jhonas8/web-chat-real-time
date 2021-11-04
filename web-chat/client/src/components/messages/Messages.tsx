import React, { useRef, useEffect } from 'react'
import { Container } from './style'
import Message from './message/Message'

type messagesType = {
    user: string,
    text: string,
}

interface Props {
    messages: messagesType[]
    firstMessages: messagesType[]
    name: string
}

export default function Messages(props: Props): JSX.Element {
    const messageEl = useRef<HTMLDivElement>(null)

    useEffect((): void =>{ //Autoscroll
        if(messageEl.current){
            messageEl.current.addEventListener('DOMNodeInserted',(event:any)=>{
                const { currentTarget: target } = event
                if(target){
                    target.scroll({ top: target.scrollHeight, behavior: 'smooth' })
                }
            })
        }
    },[])    

    return (
       <Container ref={messageEl}>
           {props.firstMessages.map(message => <div key={message.user}>
               <Message message={message} name={props.name}/>
           </div>)}
           {props.messages.map(message => <div key={message.user}>
               <Message message={message} name={props.name}/>
           </div>)}
       </Container>
    )
}
