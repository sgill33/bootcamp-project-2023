import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/helper/db";
import  {IComment} from "@/app/database/blogSchema";
import commentSchema from "@/app/database/commentSchema";

export async function POST(req: NextRequest) {
    await connectDB();
    
    try {
        const { user, comment, time }: IComment = await req.json();

        // validate body
        if (!user || !comment) {
            return NextResponse.json("Invalid Comment.", { status: 400 });
        }
       
        const newComment = new commentSchema({
            user:user,
            comment:comment,
            time:time
        })
        await newComment.save()
        
        return NextResponse.json("Comment Added", { status: 200 });
    } catch(err){
        console.log(`error: ${err}`);
        return NextResponse.json(err, { status: 404 });
    }
}

export async function GET(req: NextRequest) {
    await connectDB(); // function from db.ts before
  
    try {
      const comments = await commentSchema.find().orFail();
      return NextResponse.json(comments);
    } catch (err) {
      return NextResponse.json("No Comments Found.", { status: 404 });
    }
  }