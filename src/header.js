//header for the appplication
import React from 'react'
import {
  Link,
  Route
} from 'react-router-dom'

export default function Header(props) {

  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>

        <Link to="/"
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <span className='w-10 h-10 text-white p-2 bg-green-700 rounded-full text-center'>
            <i className='fa fa-video-camera' aria-hidden='true'></i>
          </span>

          <span className='ml-3 text-xl'>Video Chat</span>

        </Link>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400  flex flex-wrap items-center text-base justify-center'>
          <Link to="/chat" className='mr-5 hover:text-gray-900'>
            Chat
          </Link>
        </nav>

        <Route
          exact
          path='/chat'
          render={(routerProps) => (
            <>
              {localStorage.getItem('username') !== null && localStorage.getItem('password') !== null ? <button
                className='mt-4 text-white bg-green-700 border-0 py-1 px-5 focus:outline-none hover:bg-green-800 rounded'
                onClick={(e) => {
                  localStorage.removeItem('username');
                  localStorage.removeItem('password');
                  window.location = '/'

                }}
                type='submit'
              >
                <span>Logout</span>
                <i
                  className='ml-2 fa fa-sign-out'
                  aria-hidden='true'
                ></i>
              </button> : null}

            </>
          )}
        />


      </div>
    </header>
  )
}
