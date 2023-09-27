import React from "react";
import { useRef , useEffect } from "react";
import {Card,CardHeader, CardBody, CardFooter, Avatar, Button, Input, Spinner} from "@nextui-org/react";
import Image from "next/image";
 import Comment from "@/public/assets/comment.svg"
import COMMENT from "@/Components/Comment"
 import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
 import axios from "axios"
 import { useSession } from "next-auth/react";

export default function App({photo,thread,id,username,postimage}) {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const[comment1,setcomment1]=React.useState([])
  const[spinner,setspinner]=React.useState(true)
  const { data: session } = useSession()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
const[comment,setcomment] = React.useState("")
const[disabled,setdisabled]=React.useState(false)
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
setdisabled(true)

await axios.put("/thread/user",{message:comment,threadid:e.target.name,commentavatar:session.user.image,commentuser:session.user.name})
setdisabled(false)
return getting()


  }

  const getting = async (e)=>{
console.log("clicked")
axios.post('/comments',{getthreadid:e.target.name}).then((response)=>{setcomment1(response.data)
return setspinner(false)

} ).catch((err)=>{console.log(err.message)})




  }

  return (<>
    <Card className=" z-0 bg-black pt-12 pb-12 pl-5 w-full lg:w-5/6   "  fullWidth >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={photo} />
          <div className="flex flex-col gap-1 items-start justify-center">
        
            <h5 className="text-small ml-2 tracking-tight text-default-400">{username}</h5>
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
      <CardBody className="px-1 py-5 h-auto w-fit overflow-y-hidden text-small text-default-400">
      { postimage && <> {postimage.endsWith("mp4") && <video ref={videoRef} className="mt-4 lg:h-[300px] lg:w-[400px] " /**id={`video${id}`} onPlayCapture={ () => playVideo(id)}**/ controls height={300} width={300} src={postimage} preload="metadata"  style={{borderTop:'solid white 0.5px'}} />}
       {postimage.endsWith("jpg") && <Image className="mt-4 aspect-auto" controls  height={200} width={300} src={postimage} />}
       {postimage.endsWith("jpeg") && <Image className="mt-4 aspect-auto" controls height={200} width={300} src={postimage} />} 
        {postimage.endsWith("png") && <Image className="mt-4 aspect-auto" controls height={200} width={300} src={postimage} />} </>
      }
        <p className="mt-7">
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
       {session &&  <Button  size="sm" color="slate" name={id}    onPress={onOpen} onPressStart={getting}   className="text-white"  >  COMMENTS </Button>}
         <Modal   isOpen={isOpen} scrollBehavior={"inside"} placement="center" className="  bg-zinc-700" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader  className="flex flex-col gap-1">Comments</ModalHeader>
              <ModalBody  className=" scrollbar-hide justify-start flex flex-col ">
              {spinner? <Spinner/> : comment1.map((response)=>{return <COMMENT commentavatar={response.commentavatar} commentuser={response.commentuser} comment={response.comment} /> })}
              
              </ModalBody>
              <ModalFooter>
               <Input  onChange={(e)=>{setcomment(e.target.value)}}  />
                <Button name={id} Loading={disabled}  color="primary"  onClick={commentsend} >
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
