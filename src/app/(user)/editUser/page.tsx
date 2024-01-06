'use client';
import UserDetailForm from "@/components/userDetailForm/userDetailForm";
import { useSearchParams } from "next/navigation";

export default function EditUser() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    return (
      <div>
        <h1>Edit user</h1>
        <UserDetailForm actionType="edit"/>
      </div>
    );
  }