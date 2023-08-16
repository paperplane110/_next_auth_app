"use client"
import axios from "axios"
import Link from "next/link"
import React, { useState} from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("")
    const logout = async () => {
        try {
            const resp = await axios.get('/api/users/logout')
            toast.success("logged out")
            router.push("/login")
        } catch (error:any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const resp = await axios.get('/api/users/me')
        console.log(resp.data)
        setData(resp.data.data._id)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <button onClick={logout} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Logout
            </button>
            <hr />
            <button onClick={getUserDetails} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                getUserDetails
            </button>
            <h2>{data === "" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr />
            <p>Profile page</p>
            <hr />
        </div>
    )
}