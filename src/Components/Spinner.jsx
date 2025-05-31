import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='absolute left-[800px] top-[300px] '>
      <div className='spinner '> </div>
      <p className='font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner
