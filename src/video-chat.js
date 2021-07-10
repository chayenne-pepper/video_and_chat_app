import React, { useEffect } from 'react' 
import { Jutsu } from 'react-jutsu'
import Header from './header'

const Jitsi = (props) => {

  useEffect(() => {
    setInterval(() => {
      try {
        var iframe = document.getElementById('jitsiConferenceFrame0');
        var innerDoc = iframe.contentDocument
        innerDoc.querySelector(".leftwatermark").style.display = "none"
      }
      catch (e) {
        console.error('handled issue', e)
      }

    }, 1000)
  }, [])

  if (props && !props.shouldMount) return null

  return (
    <>
      <Header />
      <div className='my-content container mx-auto p-5'>
        <Jutsu
          roomName={props.room}
          password={props.password}
          loadingComponent={<p>loading ...</p>}
          errorComponent={<p>Oops, something went wrong</p>}
          containerStyles={{
            width: '1000px', 
            height: '525px', 
            margin: '0 auto',
          }}
          onMeetingEnd={() => {
            console.log('Meeting has ended')
            props.history.push('/chat')
          }}
        />
      </div>
    </>
  )
}

export default Jitsi
