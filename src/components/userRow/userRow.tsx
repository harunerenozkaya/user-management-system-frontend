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
        <tr>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>{user.created_at}</td>
            <td>{user.updated_at}</td>
            <td>
                <button className="btn btn-secondary btn-sm me-2" onClick={handleRouteEdit}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={handleDeleteUser}>Delete</button>
            </td>
        </tr>
    );
}

export default UserRow;

