import mongoose from "mongoose";

import { Schema } from "mongoose";

const thread = new Schema({


    thread: String,
    image: String,
    using:String,
    postimage:String,
    usermail:String,
    commentsnumber:Number,
    test:{
type:String,
default:false


    }


    

















})

const THREADS = mongoose.models.dhaage || mongoose.model('dhaage', thread)
export { THREADS }



const Message = new Schema({


   threadid:String,
    comment:String,
       commentavatar:String,
       commentuser:String 
       
    
    
    
    
    })
    
    
    const comments = mongoose.models.comments || mongoose.model('comments', Message)
    export { comments }



    const user = new Schema({


        Usermail:String,
         Username:String,
            Useravatar:String,
          
            
         
         
         
         
         })
         
         
         const Users = mongoose.models.Users || mongoose.model('Users', user)
         export { Users }
     



