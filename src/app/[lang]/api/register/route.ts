import { NextRequest, NextResponse } from 'next/server';
import { User } from "@/models/User";
import { hash } from "bcryptjs";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
  const body = await request.json();
  mongoose.connect(process.env.MONGODB_URL);

  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    throw new Error('Password must be at least 5 characters');
  }

  const {name, email, password } = body;
  const hashedPassword = await hash(password, 12)
  const createdUser = await User.create({name, email, password: hashedPassword});

  return NextResponse.json(createdUser);
}