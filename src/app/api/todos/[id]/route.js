import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export const GET = async (req, {params}) => {
    try {
        const {id} = params;
        
        const todo = await prisma.todo.findUnique({
            where: {
                id: +id
            }
        })

        if(!todo)
            throw "Error Not Found"

        return NextResponse.json(todo, {status: 200})
    } catch(err) {
        console.log(err)
        return NextResponse.json({message: "Error"})
    }
}