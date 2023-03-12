import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (!user) return (
        <div>
            <h2>You are not logged in</h2>
            <p>Log in to see your profile</p>
        </div>
    );

    return (
        user && (
            <div>
                <img src={user.picture || "hi"} alt={user.name || "hi"} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
}