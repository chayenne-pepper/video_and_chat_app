//the whole chat part of the application
import React, { useState, useEffect } from 'react'
import {ChatEngine} from 'react-chat-engine'
import Header from './header'
import axios from 'axios'
const PRODUCT_ID = 'enter-your-project-id-here'
const PRIVATE_KEY = 'enter-your-private-key-here'

export default function Chat() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleCredentials = (username, password) => {
    setUsername(username)
    setPassword(password)
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    setIsLoggedIn(true)
  }

  useEffect(() => {
    if (localStorage.getItem("username") === null || localStorage.getItem("password") === null) {
      setIsLoggedIn(false)
    } else {
      setUsername(localStorage.getItem("username"))
      setPassword(localStorage.getItem("password"))
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      <Header />
      <div className='my-content container mx-auto p-5'>

        {isLoggedIn ? <div >
          <ChatEngine
            height="75vh"
            publicKey={PRODUCT_ID}
            userName={username}
            userSecret={password}
          />
        </div> : <Auth setIsLoggedIn={setIsLoggedIn} handleCredentials={handleCredentials} />}

      </div>

    </>
  )
  
}

//function for authentication
function Auth(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    if (!username || !password) {
      alert('Username and password are required')
      return
    }
    console.log('username and password from handle signup', username, password)

    var data = {
      "username": username,
      "secret": password,
    }

    var config = {
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: {
        'PRIVATE-KEY': PRIVATE_KEY
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        props.handleCredentials(username, password)
      })
      .catch(function (error) {
        alert('user already exist')
        console.log('from login chat', error)
      })
  }


  const handleLogin = () => {
    if (!username || !password) {
      alert('Username and password are required')
      return
    }
    console.log('username from handlelogin ', username, password)

    props.handleCredentials(username, password)

  }



  return (
    <div className='mx-auto container items-center'>
      <div className='flex flex-wrap mt-20'>


        <div className="p-4 w-1/2 ">
          <div className="h-full p-6 rounded-lg border-2 border-green-700 flex flex-col relative overflow-hidden">


            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>Sign In</span>
            </h1>

            <div className='mt-3'>
              <input
                className='w-full border-2 border-gray-200 px-2 py-1 rounded-md'
                type='text'
                name='username'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className='mt-2 w-full border-2 border-gray-200 px-2 py-1 rounded-md'
                id='password'
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button onClick={(e) => {
              e.preventDefault()
              handleLogin()
            }}
              type='submit' className="flex items-center mt-6 text-white bg-green-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-800 rounded">Sign In
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">Sign in to an existing account</p>
          </div>
        </div>



        <div className="p-4 w-1/2 ">
          <div className="h-full p-6 rounded-lg border-2 border-green-700 flex flex-col relative overflow-hidden">


            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>Sign Up</span>
            </h1>

            <div className='mt-3'>
              <input
                className='w-full border-2 border-gray-200 px-2 py-1 rounded-md'
                type='text'
                name='username'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className='mt-2 w-full border-2 border-gray-200 px-2 py-1 rounded-md'
                id='password'
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button onClick={(e) => {
              e.preventDefault()
              handleSignUp()
            }}
              type='submit' className="flex items-center mt-6 text-white bg-green-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-800 rounded">Sign Up
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">Create a new user</p>
          </div>
        </div>


      </div>
    </div>

  )
}





