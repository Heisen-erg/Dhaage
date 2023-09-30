import mongoose from "mongoose"
import { NextResponse ,NextRequest} from "next/server"
import {THREADS} from "@/models/thread.model"
import {comments} from "@/models/thread.model"


export async function POST(request){
await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
console.log("connection true")

const result = await request.json()


await THREADS.create(result)
return NextResponse.json({"message":"successfully uploaded"})


}



// export async function GET(request){
//    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
// await request
//     const result = await THREADS.find().sort({_id:-1})
    
   

// return  NextResponse.json(result)



// }
export async function GET(request){
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
 await request

const {searchParams} = new URL(request.url);
    const param = searchParams.get("page")

 const page = param ||  1;
 const pageSize = 10; // Adjust this as needed
 const skip = (page - 1) * pageSize;

 const result = await THREADS.find().sort({_id:'-1'})
   .skip(skip)
   .limit(pageSize);
    //  const result = await THREADS.find().sort({_id:-1})
     
 
 
 return  NextResponse.json(result)
 
 
 
 }


export async function PUT(request){
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    const result = await request.json()
    
    const p = await comments.countDocuments({threadid:result.threadid})
   await comments.create({threadid:result.threadid,comment:result.message,commentavatar:result.commentavatar,commentuser:result.commentuser})
    
   await THREADS.updateOne({_id:result.threadid},{commentsnumber:p+1})




return NextResponse.json({"message":"success"})

}


