


import './globals.css'
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
      
 <Providers> <Auth> {children}  </Auth>  </Providers > 

   </body>
    </html>
  )
}
