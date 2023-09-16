import React from "react";

import {Avatar, User} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

export default function App({comment,commentavatar,commentuser}) {
  return (<div className="flex items-start  flex-col gap-3 ">
   
    <div className="flex gap-3">
<Avatar src={commentavatar}/>
<p className="mt-2 text-lime-300">{commentuser}</p>


    </div>
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
