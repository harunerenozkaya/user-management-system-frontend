'use client';
import {User} from '@/model/user';
import { useRouter } from "next/navigation";

interface UserRowProps {
    user: User;
}

const UserRow: React.FC<UserRowProps> = ({user}) => {
    const router = useRouter();
    const handleDeleteUser = () => {
    
    };

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams();
        params.set(name, value);
    
        return params.toString();
    };

    const handleRouteEdit = () => {
        router.push("/editUser" + "?" + createQueryString("id", user.id.toString()));
    };

    console.log(user);
    return (
        <div key={user.id}>
            <li>{user.name} {user.surname} {user.email} {user.created_at} {user.updated_at}</li>
            <button onClick={handleRouteEdit}>Edit</button>
            <button onClick={handleDeleteUser}>Delete</button>
        </div>
    );
}

export default UserRow;

