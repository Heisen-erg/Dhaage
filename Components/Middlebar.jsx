import React from 'react'
import Reactscrolltobottom from "react-scroll-to-bottom"
import Card1 from "@/Components/Card1"

const Middlebar = () => {
  return (
   <div style={{height:'fit-content'}}  className='flex items-center flex-col gap-6 z-0 text-gray-400 w-full  lg:w-5/6 '>

<Card1  />
<Card1/>
<Card1/>
<Card1/>

   </div>
  )
}

export default Middlebar