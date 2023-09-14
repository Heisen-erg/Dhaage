import Link from 'next/link';
import React from 'react';

import Image from 'next/image';
import mapping from "@/Data/leftbar"
import home from "@/public/assets/home.svg"


const Leftbar = () => {
  return (
   <section className='w-1/6 sticky left-0  max-lg:hidden bg-black' style={{height:'80vh',top:'10vh'}} >
<div className='flex flex-col justify-evenly  gap-14  pt-16 items-center w-full' >
    
{/* {mapping.map((response)=>{

return(


<Link className='flex flex-row   gap-5' href={response.path} key={response.name}>
   <Image src={response.logo} width={24} height={24}   />
   <p className=' max-lg:hidden text-2xl text-gray-300 font-mono'>{response.name}</p>
</Link>



)



})} */}

<Link className='flex flex-row   gap-5' href='/' >
   <Image src={home} width={24} height={24}   />
   <p className=' max-lg:hidden text-2xl text-gray-300 font-mono'>Home</p>
</Link>
<Link className='flex flex-row   gap-5' href='/' >
   <Image src={home} width={24} height={24}   />
   <p className=' max-lg:hidden text-2xl text-gray-300 font-mono'>user</p>
</Link>
<Link className='flex flex-row   gap-5' href='/'>
   <Image src={home} width={24} height={24}   />
   <p className=' max-lg:hidden text-2xl text-gray-300 font-mono'>create</p>
</Link>




     </div>








   </section>
  )
}

export default Leftbar