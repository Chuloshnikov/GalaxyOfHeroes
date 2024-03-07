import { NextRequest, NextResponse } from 'next/server';
import {Category} from '@/models/Category';
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const {name, image} = await request.json();
    const category = await Category.create({name, image});
    return Response.json(category)
}


export async function PUT(request: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const {_id, name} = await request.json();
    await Category.updateOne({_id}, {name});

    return Response.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    return NextResponse.json(
    await Category.find()
    );
  }

  export async function DELETE(request: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(request.url);
    const _id = url.searchParams.get('_id');
      await Category.deleteOne({_id});
    return NextResponse.json(true);
  }