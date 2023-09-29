"use client"


import React, { useEffect, useState } from 'react'
import Userpostcard from "./Userpostcard"
import axios from "axios"
import { useSession } from 'next-auth/react'
import { Spinner } from '@nextui-org/react'


export default function Userpost ()  {
const[useposts,setuserposts]=useState([])
const[spinner,setspinner]=useState(true)
const { data: session } = useSession()

useEffect( () => {
  
   {session && axios.post("/userfetch",{mail:session.user.email}).then((response)=>{setuserposts(response.data) 
    
    setspinner(false)})}

  

 }, [session])



  return (<>
  {session? 
  <>{spinner? <Spinner/> :
 <section className='h-fit w-[95vw] flex flex-col items-center'>
  {/* <div  className='bg-black ' style={{height:'fit-content',width:'95vw'}} > */}
    {useposts.map((response)=>{
        
        return   <Userpostcard  photo={response.image} postimage={response.postimage}  username={response.using} thread={response.thread} key={response._id} id={response._id}    />                   })}


{/* </div> */}

</section> }</>
:
<h1>Must be signed in</h1>
}</>)
}




