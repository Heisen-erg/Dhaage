import React from 'react'
import { useState } from 'react';
import {  useSession } from 'next-auth/react'
import {  Modal, Button,Textarea,  ModalContent,useDisclosure,   ModalHeader,   ModalBody,   ModalFooter, Input} from "@nextui-org/react";
import axios from "axios"
import { revalidatePath } from 'next/cache';


const page = () => {
const[thread,setthread]=useState("")
const[image,setimage]=useState("")
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { data: session } = useSession()
    


    const send = async ()=>{


if (image) {
    async function convert(image){

return new Promise((resolve,reject)=>{

 const filereader= new FileReader();
  filereader.readAsDataURL(image);
  filereader.onload=()=>{resolve(filereader.result)}
  filereader.onerror=(error)=>{reject(error)}
})

    }


    const result = await convert(image)
   return axios.post("/thread/user",{thread,image:session.user.image,using:session.user.name,postimage:result}).then((data)=>{alert(data.data.message)})

  }




axios.post("/thread/user",{thread,image:session.user.image,using:session.user.name,postimage:""}).then((data)=>{alert(data.data.message)

})






    }
  return (<>
  {session ?  <div className='bg-black h-screen w-full flex justify-center items-center'>  <Button onPress={onOpen}>Create Thread</Button>
      <Modal shadow='lg' backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create Thread</ModalHeader>
              <Input onChange={(e)=> setimage(e.target.files[0])} type='file' accept='image/jpeg, image/png image/jpg'  />
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
      </Modal> </div> : <div className='h-screen w-full bg-black font-mono text-white text-3xl flex justify-center items-center '><h1>You Need To be Signed In To Start Using This Section </h1></div>}
  </>
  )
}

export default page