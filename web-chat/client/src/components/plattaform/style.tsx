import styled from 'styled-components'
import { 
    Stack as St,
    Card as Car
} from 'react-bootstrap'

interface center_props {
    isDesktop?: boolean
}

export const Stack = styled(St)`
    background-color: #2979FF;
    height: 3vh;
    padding: 1rem;
    border-radius: 10px 10px 0 0;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    h4 {
        color: white;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }
    
`

export const Card = styled(Car)`
    
`

export const Centerlized = styled.div<center_props>`
    width:${props => props.isDesktop ? '60vw' : '98vw'};
    height: ${props => props.isDesktop ? '50vh' : '100vh'};
    background-color: white;
    border-radius: 10px 10px;

`