import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/createUser"><button>Create New User</button></Link>
      <Link href="/editUser"><button>Edit User</button></Link>
    </div>
  );
}
