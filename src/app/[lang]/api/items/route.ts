import { NextRequest, NextResponse } from 'next/server';
import mongoose from "mongoose";
import Items from '../../../../models/Items';
import {isAdmin} from "../auth/[...nextauth]/route";

export async function POST(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await request.json();
    const itemDoc = await Items.create(data);

    return new NextResponse(itemDoc);
}

export async function PUT(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const {_id, ...data} = await request.json();
    await Items.findByIdAndUpdate(_id, data);
    return NextResponse.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL);
    return NextResponse.json(
        await Items.find()
    )
}

export async function DELETE(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const url = new URL(request.url);
    const _id = url.searchParams.get('_id');
    if (await isAdmin()) {
      await Items.deleteOne({_id});
    }
    return Response.json(true);
  }