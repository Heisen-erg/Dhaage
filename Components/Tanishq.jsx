import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Input} from "@nextui-org/react";
import Image from "next/image";
 import Comment from "@/public/assets/comment.svg"
import COMMENT from "@/Components/Comment"
 import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
 import tanishq from "@/public/assets/tanishq.jpg"

export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();




  return (<>
    <Card className=" z-0 bg-black pt-12 pb-12 pl-5 w-full lg:w-5/6   "  fullWidth >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://th.bing.com/th/id/OIP.G9aWziCHbvLV-UHFyFRQpgHaEK?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          <div className="flex flex-col gap-1 items-start justify-center">
        
            <h5 className="text-small ml-2 tracking-tight text-default-400">Tanishq Rajput</h5>
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
      <Image
        alt="Tanishq woman"
       
        height={200}
        src={tanishq}
        width={200}
      />
        <p>
       I am Tanishq Available 24 X 7 for night service
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
        
          {/* <Button   size="sm" color="slate-100" ><Image src={heart} height={26} width={26} className=" text-black" />  </Button> */}
        </div>
      </CardFooter>
    </Card></>
  );
}
