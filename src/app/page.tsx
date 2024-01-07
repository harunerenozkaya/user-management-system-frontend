'use client';
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '@/service/userService';
import UserList from '@/components/userList/userList';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container mt-5">
            <h1 className="text-center flex-grow-1">Users</h1>
            <Link href="/createUser"><button className="col btn btn-primary mb-3 align-items-right">Create New User</button></Link>
            {error && <div className="alert">{error}</div>}
            {users && <UserList users={users} />}
        </div>
    );
}
