import styled from 'styled-components'

interface container {
    right?: boolean
}

interface box {
    blue?: boolean
}

export const MessageContainer = styled.div<container>`
    display: flex;
    justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};
    padding: 0.3rem;
    margin-top: 5px;
`
export const SentText = styled.p`
    display: flex;
    align-items: center;
    color: #757474;
    letter-spacing: 0.3px;
    margin-left:5px;
`
export const MessageBox = styled.div<box>`
    background:${props => props.blue ? '#2979FF' : '#F3F3F3'};
    border-radius:20px;
    padding: 4px 20px;
    color: ${props => props.blue ? 'white' : 'black'};
    display: inline-block;
    max-width: 80%;
`
export const MessageText = styled.p`
    width:100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.1em;
    word-wrap: break-word;
`
