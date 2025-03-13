import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {

    const { email, password, name, githubId } = await req.json();


    if (!email || !password || !name || !githubId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }


    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name, // Name passed from frontend
        githubId, // Github ID passed from frontend
      },
    });

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return NextResponse.json({ error: "Server error", details: err.message }, { status: 500 });
  }
}
