"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { axios } from "axios"

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false) 
    const onLogin = async () => {
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
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