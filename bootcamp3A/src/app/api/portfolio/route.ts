import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/helper/db";
import portfolioSchema from "@/app/database/portfolioSchema";



export async function GET(req: NextRequest) {
  await connectDB(); // function from db.ts before

  try {
    const projs = await portfolioSchema.find().orFail();
    return NextResponse.json(projs);
  } catch (err) {
    return NextResponse.json("No Projects Found.", { status: 404 });
  }
}
