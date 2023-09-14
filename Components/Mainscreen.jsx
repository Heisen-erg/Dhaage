import React from 'react'
import Leftbar from './Leftbar'
import Middlebar from './Middlebar'

const Mainscreen = () => {
  return (
    <div className='flex   ' >
        <Leftbar/>
        <Middlebar/>
        {/* style={{height:'200vh'}} */}
    </div>
  )
}

export default Mainscreen