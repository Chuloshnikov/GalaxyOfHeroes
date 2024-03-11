import { NextRequest, NextResponse } from 'next/server';
import mongoose from "mongoose";
import News from '../../../../models/News';

export async function POST(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await request.json();
    const newsDoc = await News.create(data);

    return new NextResponse(newsDoc);
}

export async function PUT(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const {_id, ...data} = await request.json();
    await News.findByIdAndUpdate(_id, data);
    return NextResponse.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL);
    return NextResponse.json(
        await News.find()
    )
}

export async function DELETE(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const url = new URL(request.url);
    const _id = url.searchParams.get('_id');
    if (await isAdmin()) {
      await News.deleteOne({_id});
    }
    return Response.json(true);
  }