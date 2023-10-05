"use client"

import { Avatar } from '@nextui-org/react'
import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  Button,
  DropdownItem
} from "@nextui-org/react";
import { signIn,signOut,useSession } from 'next-auth/react';

const Topbar = () => {
  const { data: session } = useSession()
  
  return (
   
<div className= ' flex fixed top-0 z-50 flex-row w-full items-center justify-between  bg-custom-color backdrop-blur-xl' style={
    {height:'10vh'}
}>

<h1 lang='hi' className= '  text-2xl text-white ml-6 xl:ml-14' style={{fontFamily:'cursive'}} >DHAAGE <span className='text-small ml-1 text-white' >v2.0</span> </h1>
{/* धागे  */}


<Dropdown  >
      <DropdownTrigger>
      
        <Avatar src={session? session.user.image  : ""   } className=' mr-6'  />
        
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions"   className=' bg-black rounded-lg  text-black flex fles-col gap-3'> 
    { session?
         
       
          
          < DropdownItem
         className='rounded-lg bg-slate-300 '
       onClick={()=>{

        
        
        
        signOut()}}
          >
          
           SignOut
          </DropdownItem>
          :
          <DropdownItem
          className=' rounded-lg bg-slate-300  '
          onClick={()=>{
            
            
            signIn("google")
      
        }}
             >
             
               SignIn
             </DropdownItem>

          }

    
      </DropdownMenu>
    </Dropdown>





</div>


  )
}

export default Topbar