//home page of the application //
import React from 'react'
import Header from './header'

function Home(props) {

  return (
    <div>
      <Header />
      <div className='my-content mx-auto container items-center'>
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='w-1/2 mx-auto mb-10 text-center '>
              <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
                Welcome! Create a new meeting or join an ongoing meeting
              </h1>
              <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
                Stay on this page for Video Conferencing. Click on Chat to chat with your friends!
              </p>
              <div className='flex mt-6 justify-center'>
                <div className='w-16 h-1 rounded-full bg-green-700 inline-flex'></div>
              </div>
            </div>
            <div className='flex flex-wrap -m-4'>
              <div className='p-4 lg:w-1/2 md:w-full'>
                <div className='flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
                  <div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0'>
                    <i className='fa fa-plus text-2xl' aria-hidden='true'></i>
                  </div>
                  <div className='flex-grow'>
                    <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                      New meeting
                    </h2>
                    <p className='leading-relaxed text-base'>
                      Create a new meeting
                    </p>

                    <input
                      className='mt-2 w-full border-2 border-gray-200 px-2 py-1 rounded-md'
                      type='text'
                      name='Room'
                      placeholder='Type unique meeting id'
                      onChange={(e) => props.setRoom(e.target.value)}
                    />

                    <input
                      className='mt-1 w-full border-2 border-gray-200 px-2 py-1 rounded-md'
                      id='password'
                      type='text'
                      placeholder='Password for the meeting (optional)'
                      onChange={(e) => props.setPassword(e.target.value)}
                    />

                    <button
                      className='mt-4 text-white bg-green-700 border-0 py-1 px-5 focus:outline-none hover:bg-green-700 rounded'
                      onClick={(e) => {
                        props.handleClick(e, props)
                      }}
                      type='submit'
                    >
                      <span>New Meeting</span>
                      <i
                        className='ml-2 fa fa-long-arrow-right'
                        aria-hidden='true'
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className='p-4 lg:w-1/2 md:w-full'>
                <div className='flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col'>
                  <div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0'>
                    <i
                      className='fa fa-sign-in text-2xl'
                      aria-hidden='true'
                    ></i>
                  </div>
                  <div className='flex-grow'>
                    <h2 className='text-gray-900 text-lg title-font font-medium mb-3'>
                      Join a meeting
                    </h2>
                    <p className='leading-relaxed text-base'>
                      Join an ongoing meeting
                    </p>

                    <div className='mt-3'>
                      <input
                        className='w-full border-2 border-gray-200 px-2 py-1 rounded-md'
                        type='text'
                        name='room'
                        placeholder='Unique meeting id'
                        onChange={(e) => props.setRoom(e.target.value)}
                      />
                      <input
                        className='mt-1 w-full border-2 border-gray-200 px-2 py-1 rounded-md'
                        id='password'
                        type='text'
                        placeholder='Password for the meeting (optional)'
                        onChange={(e) => props.setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      className='mt-4 text-white bg-green-700 border-0 py-1 px-5 focus:outline-none hover:bg-green-700 rounded'
                      onClick={(e) => {
                        props.handleClick(e, props)
                      }}
                      type='submit'
                    >
                      <span>Join Meeting</span>
                      <i
                        className='ml-2 fa fa-long-arrow-right'
                        aria-hidden='true'
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
