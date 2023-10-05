
import Topbar from '@/Components/Topbar';
import Leftbar from '@/Components/Leftbar';
import Bottombar from '@/Components/Bottombar';

import './globals.css'
import lay from "./layoutprovider"
import Auth from './provider';
import {Providers} from "./providers";
import { Inter } from 'next/font/google'
// import { Toaster } from "@/shadcn/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DHAAGE',
  description: 'Heisenberg Web Network',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <div className=" h-fit bg-black" > 
<Topbar/>  


<div className='flex' >
        <Leftbar/> */}
 <Providers> <Auth>
  <>
   <div className=" h-fit bg-black" > 
<Topbar/>  


<div className='flex' >
        <Leftbar/>





{children}

   

</div>
     
     
     </div>
 
 <Bottombar/>
 </>
 </Auth>  </Providers >
 {/* </div>
     
     
    </div>

<Bottombar/> */}
   </body>
    </html>
  )
}
