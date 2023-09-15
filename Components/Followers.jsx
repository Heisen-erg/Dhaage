"use client"


import React from "react";

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

export default function App() {
  return (
    <div  className=" bg-black h-screen flex items-center w-full flex-col">
      <Tabs color="primary" variant="underlined"  fullWidth aria-label="Options">
        <Tab className="text-2xl text-white" key="photos" title="Followers">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>
        <Tab className="text-2xl text-slate-100 z-1" key="music" title="Following">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
       
      </Tabs>
    </div>  
  );
}
