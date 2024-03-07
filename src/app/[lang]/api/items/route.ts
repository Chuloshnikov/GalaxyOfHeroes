import { NextRequest, NextResponse } from 'next/server';
import mongoose from "mongoose";
import Items from '../../../../models/Items';

export async function POST(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await request.json();
    const itemDoc = await Items.create(data);

    return new NextResponse(itemDoc);
}