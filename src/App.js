import React, { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './home'
import Chat from './chat'
import VideoChat from './video-chat'

function App() {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [shouldMount, setShouldMount] = useState(false)

  const handleClick = (event, returnedProps) => {
    event.preventDefault()
    if (room) {
      console.log('details', room, name, password)
      setShouldMount(true)

      returnedProps.history.push('/meeting')
    } else {
      alert('Please fill the appropriate fields!')
    }
  }

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route
            exact
            path='/chat'
            render={(routerProps) => <Chat {...routerProps} />}
          />

          <Route
            exact
            path='/'
            render={(routerProps) => (
              <Home
                handleClick={handleClick}
                setRoom={setRoom}
                setName={setName}
                setPassword={setPassword}
                {...routerProps}
              />
            )}
          />

          <Route
            path='/meeting'
            render={(routerProps) => (
              <VideoChat
                shouldMount={shouldMount}
                room={room}
                name={name}
                password={password}
                {...routerProps}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
