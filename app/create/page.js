"use client"

import React from 'react'
import { useState } from 'react';
import {  useSession } from 'next-auth/react'
import {  Modal, Button,Textarea,  ModalContent,useDisclosure,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/react";
import axios from "axios"


const page = () => {
const[thread,setthread]=useState("")
const router = useRouter()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { data: session } = useSession()
    


    const send = async ()=>{

axios.post("/thread/user",{thread,image:session.user.image}).then((data)=>{alert(data.data.message)



})


    }
  return (<>
  {session ?  <div className='bg-black h-screen w-full flex justify-center items-center'>  <Button onPress={onOpen}>Create Thread</Button>
      <Modal shadow='lg' backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create Thread</ModalHeader>
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
      </Modal> </div> : <div>not signed in</div>}
  </>
  )
}

export default page