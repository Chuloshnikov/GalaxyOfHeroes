import { authOptions } from "../auth/[...nextauth]/route";
import mongoose from "mongoose";
import {User} from "@/models/User";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL);
    const users = await User.find();
    return NextResponse.json(users);
}


export async function PUT(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const {_id, ...data} = await request.json();
    const session = await getServerSession(authOptions);
    await User.findByIdAndUpdate(_id, data);

    return NextResponse.json(true);
}