import mongoose from "mongoose"
import { NextResponse ,NextRequest} from "next/server"
import {THREADS} from "@/models/thread.model"
import {comments} from "@/models/thread.model"


export async function POST(request){
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
 await request
 const get = await request.json()
 console.log(get)
 const response = await comments.find({threadid:get.getthreadid})
console.log(response)



 return NextResponse.json(response)


}