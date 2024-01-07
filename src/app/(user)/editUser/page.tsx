'use client';
import UserDetailForm from "@/components/userDetailForm/userDetailForm";
import {User} from '@/model/user';
import { getUser } from "@/service/userService";
import { useSearchParams } from "next/navigation";
import { useEffect,useState } from "react";

export default function EditUser() {
    const searchParams = useSearchParams();
    const id  = searchParams.get("id");
    const [user, setUser] = useState<User>({id: 0, name: '', surname: '', email: '', created_at: '', updated_at: ''});
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchUser = async () => {
            //Convert id to number
            const idNum = Number(id);

            //Get user from API
            const result = await getUser(idNum);
            if (result.error) {
                setError(result.error);
            } else {
                setUser(result.data);
            }
        };
        fetchUser();
    }, []);

    return (
      <div>
        <h1>Edit user</h1>
        <UserDetailForm actionType="edit" user={user}/>
        <p>{error}</p>
      </div>
    );
  }