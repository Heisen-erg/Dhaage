"use client"

import axios from "axios"
import { Avatar} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import CustomSpinner from "./CustomSpinner"

const SearchUsers = ({username,useravatar}) => {
 const[array,setarray]=useState([])
 const[spinner,setspinner]=useState(true)

useEffect(() => {
    axios.get("/thread/user").then((response)=>{setarray(response.data)
    return setspinner(false)
    })

  
}, )



  return (<>
<div className="min-h-[80vh] bg-black h-fit mb-[10vh] mt-[10vh] w-full">
<h1 className="bg-black text-center text-white text-2xl pt-6" >THREAD TIMELINE</h1>

    { spinner? <CustomSpinner/> :    <div className='bg-black h-fit min-h-[70vh]  w-full flex flex-col gap-3 items-center pt-7  '>
     { array.map((response)=>{ return  <> <div className='flex gap-4 '>
<Avatar className="z-0" src={response.image}/>
<p className='text-white text-xl mt-1' > {response.using}</p>

</div>
 </>
})}
    </div>}
    </div>
    </> )
}

export default SearchUsers