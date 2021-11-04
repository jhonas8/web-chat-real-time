import styled from 'styled-components'
import { 
    Card as CardBoot, 
    Form as FormBoot,
    Button as ButtonBoot
} from 'react-bootstrap' //It's not necessary to import all of them at this file, but it makes the code cleaner


export const CenterDiv = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;

`
export const Card = styled(CardBoot)`
    padding:0.8rem;
    width: ${props=> props.isDesktop ? '30vw' : '90vw'}
`

export const Form = styled(FormBoot)`
`

export const Button = styled(ButtonBoot)`
    margin: 0.4rem 0 -0.8rem 0;
    padding: ${props=> props.isDesktop ? '0.5rem' : '0.3rem'};
    background-color: grey;
    transition: all 0.3s ease-in;
    border: none;
    &:hover {
        background-color: black;
        transition: all 0.3s ease-in;
    }
`