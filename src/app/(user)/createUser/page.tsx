import UserDetailForm from "@/components/userDetailForm/userDetailForm";

export default function CreateUser() {
  return (
    <div>
      <h1>Create a new user</h1>
      <UserDetailForm actionType="add"/>
    </div>
  );
}
