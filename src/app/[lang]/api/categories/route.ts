import { NextRequest, NextResponse } from 'next/server';
import {Category} from '@/models/Category';
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
    mongoose.connect(process.env.MONGO_URL);
    const {name, image} = await request.json();
    const category = await Category.create({name, image});
    return Response.json(category)
}




export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
    await Category.find()
    );
  }