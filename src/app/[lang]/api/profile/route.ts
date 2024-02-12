import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import {User} from '@/models/User';


export async function PUT(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await request.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email;


    await User.updateOne({email}, data);

    return NextResponse.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL);
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    return NextResponse.json(
        await User.findOne({email})
    )
}