"use client"


import React from 'react'
import { useState } from 'react';
import {  useSession } from 'next-auth/react'
import {  Modal, Button,Textarea,  ModalContent,useDisclosure,   ModalHeader,   ModalBody,   ModalFooter, Input} from "@nextui-org/react";
import axios from "axios"
import { CldUploadButton } from 'next-cloudinary';
// import cloudinary from '@/utils/Cloudinary';



const Home = () => {
const[thread,setthread]=useState("")
const[image,setimage]=useState("")
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { data: session } = useSession()
    const[showbutton,setshowbutton] = useState(true)


    const send = async ()=>{


 if (image) {

 return axios.post("/thread/user",{thread,image:session.user.image,using:session.user.name,postimage:image}).then((data)=>{alert(data.data.message)})
  }




 axios.post("/thread/user",{thread,image:session.user.image,using:session.user.name,postimage:""}).then((data)=>{alert(data.data.message)

})


    }



    
  return (<>
  { session ?  
           <div className='bg-black h-screen w-full flex justify-center items-center'>  <Button onPress={onOpen}>Create Thread</Button>
      <Modal shadow='lg' backdrop='blur' placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create Thread</ModalHeader>
            {/* <Input onChange={(e)=> setimage(e.target.files[0])} type='file' accept='image/jpeg, image/png image/jpg'  /> */}
           {showbutton && <CldUploadButton className=' bg-slate-400 ml-6 w-[65px] mt-3 mb-3 rounded-lg  '   uploadPreset="pxu3xyuk"  onUpload={(result)=>{ setimage(result.info.url); setshowbutton(false)
            return alert("Successfully added the file")
            }} /> }
            {!showbutton && <p className='ml-6  text-small mt-3 mb-3 '>file uploaded</p>}

              <ModalBody>
              <Textarea
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
      className="max-w-xs"
      onChange={(e)=>{setthread(e.target.value)}}
    />
              </ModalBody>
              <ModalFooter>
                
                <Button onClick={send} color="primary" onPress={onClose}>
                 CREATE
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> </div> 
      : 
      <div className='h-screen w-full bg-black font-mono text-white text-3xl flex justify-center items-center '><h1>You Need To be Signed In To Start Using This Section </h1></div>}
  </>
  )
}

export default Home
