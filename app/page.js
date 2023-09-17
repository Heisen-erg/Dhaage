"use client"
import React from "react";
import Bottombar from "@/Components/Bottombar";

import Topbar from "@/Components/Topbar";
import { useEffect } from "react";
import axios from "axios"

import Leftbar from "@/Components/Leftbar";
import Card1 from "@/Components/Card1"
import dhaage from "@/public/assets/dhaage.png"
import CustomSpinner from "@/Components/CustomSpinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@nextui-org/react";
export default function Home() {
const[data,setdata]=React.useState([])
// const[state,setstate]=React.useState(   data: Array.from({ length: 20 }))
const[spinner,setspinner]=React.useState(true)
const[hasmore,sethasmore]=React.useState(true)
useEffect(() => {
  axios.get("/thread/user").then((response)=>{setdata((response.data))
    return ( setspinner(false))})
    
  
  
  

}, )
// const fetchMoreData = () => {
// if(data.length>0)
//   setTimeout(() => {
//    setstate({
//       data: this.state.items.concat(Array.from({ length: 3}))
//     });
//   }, 3000);
//   else (sethasmore(false))
// };



  return (  

<>

<div className=" h-fit bg-black" > 
<Topbar/>  


<div className='flex   ' >
        <Leftbar/>
        {spinner? <CustomSpinner/> :
      
        
        
        
        <div style={{height:'fit-content',minHeight:'80vh'}}  className='flex  items-center flex-col gap-6 z-0 text-gray-400   w-full ' >
{data.map((response)=>{

   return   <Card1 photo={response.image} postimage={response.postimage} username={response.using} thread={response.thread} key={response._id} id={response._id} />
})} </div> 

}


    {/* <div className='bg-black text-3xl text-white text-center h-screen w-full'>⚠️⚠️⚠️⚠️⚠️⚠️ UNDER MAINTAINANCE</div> */}
 


   </div>
     
     
    </div>

<Bottombar/>




    

  </>


  
 )
}




