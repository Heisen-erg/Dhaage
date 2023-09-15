import React from "react";

import {User} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

export default function App({comment}) {
  return (<div className="flex items-start  flex-col gap-3 ">
    <User  
    className="  justify-self-start" 
     
      description="dhaage user "
      avatarProps={{
        src: ""
      }}
    />
    <Textarea
      isReadOnly
   
      variant="bordered"
      labelPlacement="outside"
     
      defaultValue={comment}
      className="max-w-xs text-white "
    />
    </div>
  );
}
