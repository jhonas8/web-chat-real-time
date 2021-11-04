import { CenterDiv, Card, Form, Button } from './style'
import { Link } from 'react-router-dom'

interface Props {
    getNameRoom: (name:string,room:string)=>void
    NameRoom: {name:string, room:string}
    isDesktop?: boolean
}

export default function Login(props: Props): JSX.Element { 
    const { name, room } = props.NameRoom

    return(
      <CenterDiv>
          <Card isDesktop={props.isDesktop}>
              <Card.Title>
                  Username & Room
              </Card.Title>
              <Card.Body>
                  <Form>
                      <Form.Group>
                          <Form.Label>
                              Username
                          </Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Enter your username'
                            value={name}
                            onChange={(e)=>props.getNameRoom(room,e.target.value)}
                            required
                            //Second parameter receives its own value, since we only want to change the name's value.
                          />
                      </Form.Group>
                      <Form.Group style={{marginTop:'0.4rem'}}>
                          <Form.Label>
                              Room
                          </Form.Label>
                          <Form.Control
                            type='text'
                            placeholder="Enter the room's name"
                            value={room}
                            onChange={(e)=>props.getNameRoom(e.target.value,name)}
                            required
                          />
                      </Form.Group>
                      <Link
                        to='/chat'
                        onClick={ e=> (!name || !room) && e.preventDefault() }
                      >
                          <Button isDesktop={props.isDesktop} type='submit'>
                            Enter
                          </Button>
                      </Link>
                  </Form>
              </Card.Body>
          </Card>
      </CenterDiv>
  )  
}