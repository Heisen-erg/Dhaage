"use client"


import React from "react";
import Userpost from "@/Components/Userpost"
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function App() {
  return (<>

    
    <div  className=" bg-black h-fit min-h-[100vh] flex items-center pt-5  flex-col ">
      <Tabs color="primary" size="lg"   aria-label="Options">
        <Tab className="  text-sm text-white" style={{width:'30vw'}} key="photos" title="Your Posts">
      <Userpost/> 
        
         
        </Tab>
        <Tab className="text-sm text-slate-100 z-1" key="music" title="Interactions">
        <div className="flex w-full flex-col">
    <Tabs color="secondary" size="lg" >
      
        <Tab  title={"followers"}>
            <h1 className="text-center">Coming soon.......</h1>
        </Tab>
        <Tab  title={"following"}>
        <h1 className="text-center">Coming soon.......</h1>
        </Tab>
      
    </Tabs>
  </div>    
        </Tab>
       
      </Tabs>
    </div>  

    </>
  );
}
