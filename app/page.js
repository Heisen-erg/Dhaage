"use client"
import React from "react";
import Bottombar from "@/Components/Bottombar";
import Mainscreen from "@/Components/Mainscreen";
import Topbar from "@/Components/Topbar";
import { useEffect } from "react";
import axios from "axios"
import Middlebar from "@/Components/Middlebar";
import Leftbar from "@/Components/Leftbar";
import Card1 from "@/Components/Card1"
import dhaage from "@/public/assets/dhaage.png"
import Tanishq from "@/Components/Tanishq"
import { Spinner } from "@nextui-org/react";
export default function Home() {
const[data,setdata]=React.useState([])
const[spinner,setspinner]=React.useState(true)
useEffect(() => {
  axios.get("/thread/user").then((response)=>{setdata((response.data).reverse())
    return ( setspinner(false))})
    
  
  
  

}, )




  return (  

<>

<div className=" h-fit bg-black" > 
<Topbar/>  


<div className='flex   ' >
        <Leftbar/>
        {spinner? <div className="flex w-full justify-center items-center"> <Spinner /> </div> :
        <div style={{height:'fit-content',minHeight:'80vh'}}  className='flex  items-center flex-col gap-6 z-0 text-gray-400 w-full  lg:w-5/6 '>
          {/* <Card1 photo={dhaage} thread={"#THIS IS THREADS(CLONE)  #CURRENTLY UNDER DEVELOPMENT #BUT YOU CAN CREATE YOUR THREAD UNDER CREATE SECTION "} /> */}
         
{data.map((response)=>{

  return  <Card1 photo={response.image} postimage={response.postimage} username={response.using} thread={response.thread} key={response._id} id={response._id} />
})}


   </div>}
     
    </div>

<Bottombar/>


</div>

    

  </>


  
 )
}
