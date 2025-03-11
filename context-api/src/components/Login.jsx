import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div className="flex flex-col m-3.5 p-1.5 gap-2 justify-center">
            <h1>Login</h1>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required className=" border-2 h-10 w-50"/>
            {" "}
            <input type="text" placeholder="password"
                value={password} className=" border-2 h-10 w-50"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} className=" bg-blue-600 rounded-md text-white">Login</button>
        </div>
    )
}