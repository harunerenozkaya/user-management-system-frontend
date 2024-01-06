import {User} from '@/model/user';
import UserRow from '../userRow/userRow';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserRow key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
