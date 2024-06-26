// Client Side Rendering
// useEffect dan useState
"use client"
import {useEffect, useState} from "react"
import baseUrl from "@/lib/baseUrl"
import { useRouter } from "next/navigation"



// Client Component
// Interaksi user
export default function TodoDetail({params}) {
    const [todo, setTodo] = useState({})
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const fetchData = async () => {

        const response = await fetch(`${baseUrl}/todos/${params.id}`)
       
        const data = await response.json();
        setTodo(data)
        setLoading(false)
    }

    useEffect(() => {
        
        const fetching = async () => {
            setLoading(true)
            await fetchData()
        }

        fetching()
    }, [])

    if(loading) {
        return (
            <div>LOADING.....</div>
        )
    } else {
        return (
            <div>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
                <p>{todo.status?.toString()}</p>
                <button onClick={(e) => router.push("/")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">BACK</button>
            </div>
        )
    }

}