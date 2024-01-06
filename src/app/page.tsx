'use client';
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '@/service/userService';
import UserList from '@/components/userList/userList';
import Link from 'next/link';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await getAllUsers();
            if (result.error) {
                setError(result.error);
            } else {
                setUsers(result.data);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <Link href="/createUser"><button>Create New User</button></Link>
            {error && <div>{error}</div>}
            {users && <UserList users={users} />}
        </div>
    );
}
