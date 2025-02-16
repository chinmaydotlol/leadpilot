import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, role, otherRole } = body

    if (!name || !email || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const client = new MongoClient(uri, options)

    try {
      await client.connect()
      const database = client.db("leadpilot-landing")
      const collection = database.collection("subscribers")

      const existingUser = await collection.findOne({ email })
      if (existingUser) {
        return NextResponse.json({ error: "Email already registered" }, { status: 400 })
      }

      const result = await collection.insertOne({
        name,
        email,
        role: role === "Other" ? otherRole : role,
        subscribedAt: new Date(),
      })

      return NextResponse.json(
        {
          message: "Successfully subscribed to beta",
          id: result.insertedId,
        },
        { status: 201 },
      )
    } finally {
      await client.close()
    }
  } catch (error: any) {
    console.error("Subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
