"use client"

import { Spinner } from '@nextui-org/react'
import React from 'react'

const loading = () => {
  return (

    <div className=' h-screen flex justify-center items-center bg-black' style={{width:'100vw'}}>
   <Spinner  />
   </div>
  )
}

export default loading