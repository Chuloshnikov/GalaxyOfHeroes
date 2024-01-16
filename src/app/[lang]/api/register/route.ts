import { NextRequest, NextResponse } from 'next/server';
import { User } from "@/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
  const body = await request.json();
  mongoose.connect(process.env.MONGODB_URL);

  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    throw new Error('Password must be at least 5 characters');
  }

  const notHashedPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, salt);

  const createdUser = await User.create(body);
  return NextResponse.json(createdUser);
}