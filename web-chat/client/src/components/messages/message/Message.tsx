import React from 'react'
import { emojify } from '@twuni/emojify' 
import { 
    MessageBox,
    MessageContainer,
    MessageText,
    SentText,
} from './style'

type messagesType = {
    user: string,
    text: string,
}
interface Props {
    message: messagesType
    name: string
}

export default function Message(props: Props) {
    let isSentByUser = false
    if(props.message.user === props.name) isSentByUser = true

    return (
        isSentByUser
        ?(<div>
            <MessageContainer right>
                <MessageBox>
                    <MessageText>
                        {emojify(props.message.text)}
                    </MessageText>
                </MessageBox>
            </MessageContainer>
        </div>)
        :(<div>
            <MessageContainer>
                <MessageBox blue>
                    <MessageText>
                        {emojify(props.message.text)}
                    </MessageText>
                </MessageBox>
                <SentText>
                    {props.message.user}
                </SentText>
            </MessageContainer>
        </div>)
    )
}
