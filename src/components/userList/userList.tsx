import {User} from '@/model/user';
import UserRow from '../userRow/userRow';

const UserList: React.FC = () => {
  const users: User[] = [
    {id: 1, name: 'John', surname: 'Doe', email:'dfsdf@gmail.com' , createdAt: '12-23-2000', updatedAt: '12-23-2000'},
    {id: 2, name: 'Mustafa', surname: 'Demir', email:'dfsdf@gmail.com' , createdAt: '12-23-2000', updatedAt: '12-23-2000'},
    {id: 3, name: 'Kaan', surname: 'Mavi', email:'dfsdf@gmail.com' , createdAt: '12-23-2000', updatedAt: '12-23-2000'},
    {id: 4, name: 'Ali', surname: 'Demir', email:'dfsdf@gmail.com' , createdAt: '12-23-2000', updatedAt: '12-23-2000'},
    {id: 5, name: 'Veli', surname: 'Kemir', email:'dfsdf@gmail.com' , createdAt: '12-23-2000', updatedAt: '12-23-2000'}
];

  return (
    <div>
      {users.map(user => (
        <UserRow user={user}></UserRow>
      ))}
    </div>
  );
}

export default UserList;
