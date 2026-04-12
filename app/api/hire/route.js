import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();
        
        const client = await clientPromise;
        const db = client.db("portfolio");
        const collection = db.collection("inquiries");
        
        // 3. Save the form inquiry
        const result = await collection.insertOne({
            ...data,
            submittedAt: new Date()
        });

        return NextResponse.json({ 
            success: true, 
            message: "Inquiry saved!", 
            id: result.insertedId 
        }, { status: 201 });

    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ 
            success: false, 
            error: "Internal Server Error" 
        }, { status: 500 });
    }
}
