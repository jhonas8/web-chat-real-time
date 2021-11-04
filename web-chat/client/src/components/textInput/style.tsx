import styled from 'styled-components'
import {
    Form as F,
    Button as B,
    Stack as St
} from 'react-bootstrap'

export const Form = styled(F)`
`

export const Button = styled(B)`
    background-color:transparent;
    border:none;
    transition: all 0.3s ease-in;

    &:hover{
        background-color: gray;
        transition: all 0.3s ease-in;
    }
`
export const Stack = styled(St)`
    margin-left: 0.4rem;
`