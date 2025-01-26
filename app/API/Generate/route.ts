import { NextResponse } from "next/server"



export async function POST(request: Request) {
    try {
        const { prompt } = await request.json()

        const response = await fetch("http://localhost:3001/API/Generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        })

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}