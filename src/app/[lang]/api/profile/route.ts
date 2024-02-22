import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import {User} from '@/models/User';
import {UserMeta} from '@/models/UserMeta';


export async function PUT(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await request.json();
    const {_id, name, image, ...otherUserInfo} = data;
  
    let filter = {};
    if (_id) {
      filter = {_id};
    } else {
      const session = await getServerSession(authOptions);
      const email = session.user.email;
      filter = {email};
    }
  
    const user = await User.findOne(filter);
    await User.updateOne(filter, {name, image});
    await UserMeta.findOneAndUpdate({email:user.email}, otherUserInfo, {upsert:true});
  
    return NextResponse.json(true);
}

export async function GET(request: NextRequest) {
    mongoose.connect(process.env.MONGODB_URL);

  const url = new URL(request.url);
  const _id = url.searchParams.get('_id');

  let filterUser = {};
  if (_id) {
    filterUser = {_id};
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({});
    }
    filterUser = {email};
  }

  const user = await User.findOne(filterUser).lean();
  const userInfo = await UserMeta.findOne({email:user.email}).lean();

  return Response.json({...user, ...userInfo});
}