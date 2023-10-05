import mongoose from "mongoose"
import { NextResponse ,NextRequest} from "next/server"
// import {THREADS} from "@/models/thread.model"
// import {comments} from "@/models/thread.model"
import { Users } from "@/models/thread.model"

export async function POST(request){
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    console.log("connection true")
    
    const result = await request.json()
    // if(Users.findOne({Usermail:result.Usermail})){return NextResponse.json({message:"Already exists"})}
    
    await Users.create(result)
    return NextResponse.json({"message":"successfully uploaded"})
    
    
    }
    