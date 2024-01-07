'use client';
import {User} from '@/model/user';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { deleteUser } from '@/service/userService';

interface UserRowProps {
    user: User;
}

const UserRow: React.FC<UserRowProps> = ({user}) => {
    const router = useRouter();

    const handleDeleteUser = async () => {
        await deleteUser(user.id);
        // Refresh page after deleting user
        location.reload();
    };

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams();
        params.set(name, value);
    
        return params.toString();
    };

    const handleRouteEdit = () => {
        router.push("/editUser" + "?" + createQueryString("id", user.id.toString()));
    };

    return (
        <div key={user.id}>
            <li>{user.name} {user.surname} {user.email} {user.created_at} {user.updated_at}</li>
            <button onClick={handleRouteEdit}>Edit</button>
            <button onClick={handleDeleteUser}>Delete</button>
        </div>
    );
}

export default UserRow;

