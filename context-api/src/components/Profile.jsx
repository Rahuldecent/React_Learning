
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return (
        <div className="text-3xl">
            Welcome {user.username} 
        </div>
    )
}