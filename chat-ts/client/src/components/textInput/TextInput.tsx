import React from 'react'
import { Form, Button, Stack } from './style'

interface Props {
    setMessage: Function
    sendMessage: Function
    message: string
}

export default function TextInput(props: Props): JSX.Element {
    const { setMessage, sendMessage, message} = props

    return (
        <Stack direction='horizontal'>
            <Form.Control
                type='text'
                placeholder='Share something...'
                value={message}
                onChange={ e => setMessage(e.target.value) }
                onKeyPress={ e => e.key==='Enter' ? sendMessage() : null }
            />
            <Button onClick={sendMessage}>
                <img src='/assets/icons/send-fill.svg' alt='send-icon'/>
            </Button>
        </Stack>
    )
}
