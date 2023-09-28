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
   
<div className= ' flex sticky top-0 z-50 flex-row w-full items-center justify-between  bg-custom-color backdrop-blur-xl' style={
    {height:'10vh'}
}>

<h1 lang='hi' className= '  text-2xl text-white ml-6 lg:ml-20' style={{fontFamily:'cursive'}} >DHAAGE <span className='text-small ml-1 text-white' >v2.0</span> </h1>
{/* धागे  */}


<Dropdown  >
      <DropdownTrigger>
      
        <Avatar src={session? session.user.image  : ""   } className=' mr-6'  />
        
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions"   className=' bg-slate-300 text-black flex fles-col gap-3'> 
    { session?
         
       
          
          < DropdownItem
         color='default'
       onClick={()=>{

        
        
        
        signOut()}}
          >
          
           Signout
          </DropdownItem>
          :
          <DropdownItem
          color='default'
          onClick={()=>{
            
            
            signIn("google")
      
        }}
             >
             
               Sigin
             </DropdownItem>

          }

    
      </DropdownMenu>
    </Dropdown>





</div>


  )
}

export default Topbar