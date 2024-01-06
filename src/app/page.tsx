import UserList from '@/components/userList/userList';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/createUser"><button>Create New User</button></Link>
      <UserList />
    </div>
  );
}
