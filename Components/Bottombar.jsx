import Link from 'next/link';
import React from 'react';
import home from "@/public/assets/home.svg"
import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";
import mapping from "@/Data/leftbar"
import seaarch from "@/public/assets/search.svg"

const Bottombar = () => {
  return (
   <section className='  z-5 w-full sticky bottom-0  bg-black  ' style={{height:'10vh'}}>
<div className='flex flex-row lg:hidden  pt-5 justify-evenly max-lg: items-center w-full' >
    
{mapping.map((response)=>{



return(


  <Link className=' active flex flex-row   gap-5  ' key={response.name} href='/'>
  <Image src={response.logo} width={24} height={24}   />
 
   
  </Link>




)





})}


     </div>








   </section>
  )
}

export default Bottombar