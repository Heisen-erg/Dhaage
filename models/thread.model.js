import mongoose from "mongoose";

import { Schema } from "mongoose";

const thread = new Schema({


    thread: String,
    image: String,
    commenting:

    {

       type:Schema.Types.ObjectId,
       ref:'comments'
        
        
    

    }
















})

const THREADS = mongoose.models.dhaage || mongoose.model('dhaage', thread)
export { THREADS }



const Message = new Schema({


   threadid:String,
    comment:String
        
       
    
    
    
    
    })
    
    
    const comments = mongoose.models.comments || mongoose.model('comments', Message)
    export { comments }