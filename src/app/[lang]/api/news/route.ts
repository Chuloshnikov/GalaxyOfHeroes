import { NextRequest, NextResponse } from 'next/server';
import mongoose from "mongoose";
import News from '../../../../models/News';

export async function POST(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await request.json();
    const newsDoc = await News.create(data);

    return NextResponse(newsDoc);
}