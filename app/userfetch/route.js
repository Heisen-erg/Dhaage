import mongoose from "mongoose"
import { NextResponse ,NextRequest} from "next/server"
import {THREADS} from "@/models/thread.model"
import {comments} from "@/models/thread.model"



export async function POST(request){
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
 const {mail} = await request.json()

// console.log(request)
// const {searchParams} = new URL(request.url);
//     const param = searchParams.get("page")

//  const page = param ||  1;
//  const pageSize = 10; // Adjust this as needed
//  const skip = (page - 1) * pageSize;

 const result = await THREADS.find({usermail:mail}).sort({_id:'-1'})
//    .skip(skip)
//    .limit(pageSize);
    //  const result = await THREADS.find().sort({_id:-1})
     
 
 
 return  NextResponse.json(result)
 
 
 
 }
 export async function PUT(request){
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
const {threadid} = await request.json()

await THREADS.deleteOne({_id:threadid})
await comments.deleteMany({threadid:threadid})

return  NextResponse.json({message:"successfully deleted the post"})

 }