import React from "react";
import { useRef , useEffect } from "react";
import {Card,CardHeader, CardBody, CardFooter, Avatar, Button, Input, Spinner} from "@nextui-org/react";
import Image from "next/image";
 import Comment from "@/public/assets/commenting.svg"
 import twitter from "@/public/assets/Twitter.svg"
import COMMENT from "@/Components/Comment"
 import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
 import axios from "axios"
 import { animateScroll } from "react-scroll";
 import { useSession } from "next-auth/react";
 import {Chip} from "@nextui-org/react";
 import ScrollToBottom from 'react-scroll-to-bottom';
export default function App({photo,thread,id,username,postimage,number}) {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const[comment1,setcomment1]=React.useState([])
  const[spinner,setspinner]=React.useState(true)
  const { data: session } = useSession()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
const[comment,setcomment] = React.useState("")
const[loadinger,setloadinger]=React.useState(false)
const[threadid,setthreadid]=React.useState("")
const[bottomer,setbottomer]=React.useState(false)
// const [currentVideoIndex, setCurrentVideoIndex] = React.useState("");

// const playVideo = (index) => {
//   if (currentVideoIndex !== null) {
//     const currentVideo = document.getElementById(`video${currentVideoIndex}`);
//     if (currentVideo) {
//       currentVideo.pause();
//     }
//   }

//   const newVideo = document.getElementById(`video${index}`);
//   if (newVideo) {
//     newVideo.play();
//     setCurrentVideoIndex(index);
//   }
// };




const videoRef = useRef(null);
  const [isVideoInView, setIsVideoInView] = React.useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      if (video) {
        const rect = video.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // Video is in the viewport
          setIsVideoInView(true);
        } else {
          // Video is out of the viewport
          setIsVideoInView(false);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    // Check if the video element exists before attempting to play or pause it
    if (video) {
      // Play or pause the video based on visibility
      if (isVideoInView) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [isVideoInView]);

  
  const commentsend = async (e) =>{
setloadinger(true)
if(!comment){setloadinger(false)
  return alert("comment is empty")}
  await axios.put("/thread/user",{message:comment,threadid:e.target.name,commentavatar:session.user.image,commentuser:session.user.name})
  // .then(()=>{})
  setloadinger(false)
  // getting2()
  return


  }
//  const scrollToBottom = () => {
//     animateScroll.scrollToBottom({
//       containerId: "hh"
//     });
// }
useEffect(() => {

  }, [])

  const getting = async (e)=>{
console.log("clicked")
axios.post('/comments',{getthreadid:e.target.name}).then((response)=>{setcomment1((response.data))
  setthreadid(e.target.name)
 setspinner(false)
 
 return
} ).catch((err)=>{console.log(err.message)})




  }
  // const getting2 = async (e)=>{
  //   console.log("clicked")
  //   axios.post('/comments',{getthreadid:threadid}).then((response)=>{setcomment1((response.data))
  //     setspinner(false)
  //     scrollToBottom()
  //   return 
    
  //   } ).catch((err)=>{console.log(err.message)})
    
    
    
    
  //     }

  return (<>
    <Card className=" z-0 bg-black pt-12 pb-12 pl-5 mb-2  w-full lg:w-5/6   "  fullWidth >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={photo} />
          <div className="flex gap-2 ml-[-3vw] md:gap-3 md:ml-0 items-center justify-center">
        
            <h5 className="text-small ml-2 tracking-tight text-default-400">{username}</h5>
            {username === "HEISEN BERG" && <Image src={twitter} alt="" h={24} w={24} />}
            {/* {username === "Arunav Gupta" && <Image src={twitter} alt="" h={24} w={24} />} */}
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-white border-default-200 mr-6 " : "mr-6 text-white  "}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-1 py-5 h-auto w-fit overflow-y-hidden text-small text-default-400">
      { postimage && <> {postimage.endsWith("mp4") && <video ref={videoRef} className="mt-4 lg:h-[400px] md:h-[300px] md:w-[500px] aspect-video rounded-lg shadow-lg lg:w-[500px] " /**id={`video${id}`} onPlayCapture={ () => playVideo(id)}**/ controls height={300} width={300}   loop  muted src={postimage} preload="metadata"  style={{borderTop:'solid white 0.5px'}} />}
       {postimage.endsWith("jpg") && <Image className="mt-4 aspect-auto" controls  height={200} width={200} src={postimage} />}
       {postimage.endsWith("jpeg") && <Image className="mt-4 aspect-auto" controls height={200} width={200} src={postimage} />} 
        {postimage.endsWith("png") && <Image className="mt-4 aspect-auto" controls height={200} width={200} src={postimage} />} </>
      }
      
        <p className="mt-10 mb-5  text-base    lg:w-[40vw] w-[80vw]   text-blue-200">  
       {thread}
        </p> 
        {/* mb-5 is extra  */}
        {/* <span className="pt-2">
          Coming Soon... 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span> */}
      </CardBody>
      <CardFooter className="gap-5  " style={{marginLeft:'-5px'}}>
        {/* <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div> */}
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
        <div className="flex  ">
       <><Button  size="sm" color="slate" name={id}    onPress={onOpen} onPressStart={getting}   className="  text-red-200"  > <Image src={Comment} className=" text-white z-5" width={20} height={20} alt="" srcset="" /> {number && <Chip  className=" text-[12px] pr-7 w-4 h-4 bg-blue-300 text-black mb-4 ml-[-9px] text-center"    >{number}</Chip>} </Button> </>
         <Modal   isOpen={isOpen} scrollBehavior={"inside"} placement="center" className="  bg-zinc-700" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader  className="flex flex-col gap-1">Comments</ModalHeader>
              <ModalBody id="hh"  className=" scrollbar-hide justify-start flex flex-col ">
             
              {spinner? <Spinner/> : comment1.map((response)=>{  return  <COMMENT commentavatar={response.commentavatar} commentuser={response.commentuser} comment={response.comment} /> 
               })}
            
              </ModalBody>
              <ModalFooter>
                {!session && <h1 className="text-center w-full text-slate-300">SignIn to start sending comment</h1>}
              {session && <> <Input  onChange={(e)=>{setcomment(e.target.value)}}  />
                <Button name={id}   color="primary" onClick={commentsend} /**isLoading={loadinger}**/ onPress={onClose} >
                 Comment
                </Button> </>}
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


