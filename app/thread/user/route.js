import mongoose from "mongoose"
import { NextResponse ,NextRequest} from "next/server"
import {THREADS} from "@/models/thread.model"
import {comments} from "@/models/thread.model"


export async function POST(request){
await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
console.log("connection true")

const result = await request.json()
console.log(result)

THREADS.create(result)
return NextResponse.json({"message":"successfully uploaded"})


}



export async function GET(request){
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
await request
    const result = await THREADS.find()

return  NextResponse.json(result)



}


export async function PUT(request){
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    const result = await request.json()
    console.log(result)
   
   await comments.create({threadid:result.threadid,comment:result.message,commentavatar:result.commentavatar,commentuser:result.commentuser})
   




return NextResponse.json({"message":"success"})

}