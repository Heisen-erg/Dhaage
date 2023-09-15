import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Input} from "@nextui-org/react";
import Image from "next/image";
 import Comment from "@/public/assets/comment.svg"

 import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
 import axios from "axios"

export default function App({photo,thread,id}) {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
const[comment,setcomment] = React.useState("")
let hh;

  const commentsend = async (e) =>{

axios.put("/thread/user",{message:comment,threadid:e.target.name})



  }

//   const getting = async (e)=>{

// axios.post('/comments',{getthreadid:e.target.name}).then((response)=>{console.log("success")})



//   }

  return (<>
    <Card className=" z-0 bg-black pt-12 pb-12 pl-5 w-full lg:w-5/6   "  fullWidth >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={photo} />
          <div className="flex flex-col gap-1 items-start justify-center">
        
            <h5 className="text-small ml-2 tracking-tight text-default-400">@dhaage</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-white border-default-200 mr-6 " : "mr-6 text-white "}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-4 h-auto overflow-y-hidden text-small text-default-400">
        <p>
       {thread}
        </p>
        <span className="pt-2">
          Coming Soon... 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-5  ">
        {/* <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div> */}
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
        <div className="flex  ">
         <Button  size="sm" color="slate" name={id} /**onClick={ getting } **/ onPress={onOpen}  >  <Image src={Comment} height={24} width={24}     />  </Button>
         <Modal isOpen={isOpen} placement="center" className=" bg-zinc-700" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Comments</ModalHeader>
              <ModalBody>
               
              </ModalBody>
              <ModalFooter>
               <Input  onChange={(e)=>{setcomment(e.target.value)}}  />
                <Button name={id}  color="primary" onClick={commentsend} onPress={onClose}>
                 Comment
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
          {/* <Button   size="sm" color="slate-100" ><Image src={heart} height={26} width={26} className=" text-black" />  </Button> */}
        </div>
      </CardFooter>
    </Card></>
  );
}
