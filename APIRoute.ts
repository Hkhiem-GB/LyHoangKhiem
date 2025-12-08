// @ts-ignore
import { NextResponse } from "next/server";
// @ts-ignore
import { connectDB } from "@/lib/mongodb";
// @ts-ignore
import { User } from "@/models/User";

export async function GET() {
    await connectDB();
    const users = await User.find();
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    const body = await req.json();
    await connectDB();
    const user = await User.create(body);
    return NextResponse.json(user);
}
