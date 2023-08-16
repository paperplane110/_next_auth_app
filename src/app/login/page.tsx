"use client"
import Link from "next/link"
import React, {useEffect} from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-hot-toast"

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false) 
    
    const onLogin = async () => {
        try {
            setLoading(true)
            const resp = await axios.post("/api/users/login", user)
            console.log("login successful", resp.data)
            toast.success("Login successful")
            router.push("/profile")
        } catch (error:any) {
            console.log("login error", error.message)
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "loading" : "Login"}</h1>
            <br />
            <label htmlFor="email">email</label>
            <input
                className="p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
                className="p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
                className="p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                onClick={onLogin}
            >Login</button>
            <Link href="/signup">Sign up</Link>
        </div>
    )
}