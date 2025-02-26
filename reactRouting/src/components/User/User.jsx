import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())
            .then((res) => {
                setUser(res)
                setLoading(false)
            }

            )
    }, [id]);
    if (loading) return <p>Loading user details...</p>;
    if (!user) return <p>User not found!</p>;
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold">User Details</h1>
            <div className="mt-4 border p-4 rounded-lg shadow-md bg-white">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>City:</strong> {user?.address?.city}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company?.name}</p>
            </div>
        </div>
    )
}

export default User