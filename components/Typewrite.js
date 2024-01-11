import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const Typewrite = () => {
  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  // }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='App'>
      <h1>
        {' '}
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Tools that can be used as lectures']}
            loop={true}
            cursor
            cursorStyle='.'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            // onType={handleType}
          />
        </span> 
      </h1>
    </div>
  )

}

export default Typewrite