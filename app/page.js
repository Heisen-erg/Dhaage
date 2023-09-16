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
const[spinner,setspinner]=React.useState(true)
// useEffect(() => {
//   axios.get("/thread/user").then((response)=>{setdata((response.data).reverse())
//     return ( setspinner(false))})
    
  
  
  

// }, )
// const fetchMoreData = () => {

//   setTimeout(() => {
//    setState({
//       data: this.state.items.concat(Array.from({ length: 3}))
//     });
//   }, 1500);
// };



  return (  

<>

<div className=" h-fit bg-black" > 
<Topbar/>  


<div className='flex   ' >
        <Leftbar/>
        {/* {spinner? <CustomSpinner/> : */}
        <div style={{height:'fit-content',minHeight:'80vh'}}  className='flex  items-center flex-col gap-6 z-0 text-gray-400 w-full  lg:w-5/6 '>
          {/* <Card1 photo={dhaage} thread={"#THIS IS THREADS(CLONE)  #CURRENTLY UNDER DEVELOPMENT #BUT YOU CAN CREATE YOUR THREAD UNDER CREATE SECTION "} /> */}
          {/* <InfiniteScroll
  dataLength={data.length} 
  next={fetchMoreData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }>
{data.map((response)=>{

   return   <Card1 photo={response.image} postimage={response.postimage} username={response.using} thread={response.thread} key={response._id} id={response._id} />
})} 
</InfiniteScroll>    */}


    <div className='bg-black text-3xl text-white text-center h-screen w-full'>⚠️⚠️⚠️⚠️⚠️⚠️ UNDER MAINTAINANCE</div>
 

export default page
   </div>
     
     
    </div>

<Bottombar/>


</div>

    

  </>


  
 )
}




