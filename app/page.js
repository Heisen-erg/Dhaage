"use client"
import React from "react";
import Bottombar from "@/Components/Bottombar";

import Topbar from "@/Components/Topbar";
import { useEffect  , useState } from "react";
import axios from "axios"

import Leftbar from "@/Components/Leftbar";
import Card1 from "@/Components/Card1"
import dhaage from "@/public/assets/dhaage.png"
import CustomSpinner from "@/Components/CustomSpinner";
// import InfiniteScroll from "react-infinite-scroll-component";
import { Button, Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";
export default function Home() {
const[data,setdata]=useState([])

const[spinner,setspinner]=useState(true)
const[loadmore,setloadmore]=useState(false)
const[hiddenloadmore,sethiddenloadmore]=useState(false)
// const[state,setstate]=React.useState(   data: Array.from({ length: 20 }))


// useEffect(() => {
//   axios.get("/thread/user").then((response)=>{setdata((response.data))
//     return ( setspinner(false))})
    
  
  
  

// }, )
const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // const fetchmore = ()=>{
  //   try {
  //     const response = await axios.get(`/thread/user?page=${page}`)
  //     const data1 =  response.data;
     
  //     setItems([...items,...data1]);
  //     console.log(items)
  //     setPage(page + 1);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  

  useEffect(() => {
   
    const fetchItems = async () => {
     
      const response = await axios.get(`/thread/user?page=${page}`)
      
      const data1 =  response.data
      if(!(data1.length)){sethiddenloadmore(true)}
     
      setItems([...items,...data1]);
      setspinner(false)
      setloadmore(false)
    }
    fetchItems();
    
  }, [page]);



  return (  

<>

<div className=" h-fit bg-black" > 
<Topbar/>  


<div className='flex   ' >
        <Leftbar/>
        {spinner? <CustomSpinner/> :
      
        
        
        
        <div style={{height:'fit-content',minHeight:'80vh'}}  className='flex  items-center flex-col gap-6 z-0 text-gray-400   w-full ' >
{items.map((response)=>{

   return   <Card1 photo={response.image} postimage={response.postimage}  username={response.using} thread={response.thread} number={response.commentsnumber} key={response._id} id={response._id} />
})}

{/* <button onClick={()=>{ setloadmore(true) 
  return setPage(page + 1)}} 
  className="text-white  " hidden={hiddenloadmore} disabled={loadmore} >Load more</button> */}
   <Button size="sm" className=" bg-gray-500 mb-32 text-small text-white" style={{marginTop:'-20px'}} onClick={()=>{ setloadmore(true) 
  return setPage(page + 1)}} isDisabled={hiddenloadmore} isLoading={loadmore}>
      Load More
    </Button>
 </div> 


 } 




 


   </div>
     
     
    </div>

<Bottombar/>




    

  </>


  
 )
}






