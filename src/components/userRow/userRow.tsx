'use client';
import {User} from '@/model/user';
import Link from 'next/link';

interface UserRowProps {
    user: User;
}

const UserRow: React.FC<UserRowProps> = ({user}) => {
    const handleDeleteUser = () => {
    
    };

    return (
        <div key={user.id}>
            <li>{user.name} {user.surname} {user.email} {user.createdAt} {user.updatedAt}</li>
            <Link href={`/editUser?id=${user.id}`}><button>Edit</button></Link>
            <button onClick={handleDeleteUser}>Delete</button>
        </div>
    );
}

export default UserRow;

