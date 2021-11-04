import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Enter, Chat } from './components';

function App() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined)

  const getNameRoom = (room?:string, name?: string): void =>{
    
    setRoom(room ? room : '') //In case the user clears the input label, the room's value will be set as an empty string
    setName(name ? name : '')
  }

  const responsivness = (): void =>{
    setIsDesktop(window.innerWidth >= 768 ? true : false)
    window.addEventListener('resize', (): void => setIsDesktop(
      window.innerWidth >= 768 ? true : false
    ))
  }

  useEffect(
    responsivness,
  [responsivness])

  return (
   <Router>
     <Switch>
       <Route exact path='/'>
        <Enter 
          getNameRoom={getNameRoom} 
          NameRoom={{name, room}} 
          isDesktop={isDesktop}
        />
       </Route>
       <Route path='/chat'>
         <Chat NameRoom={{name, room}} isDesktop={isDesktop!}/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
