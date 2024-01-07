'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { createUser, updateUser } from '@/service/userService';
import {User} from '@/model/user';


type ActionType = 'add' | 'edit';

interface UserDetailFormProps {
    actionType: ActionType;
    user?: User;
}

const UserDetailForm: React.FC<UserDetailFormProps> = ({
    actionType,
    user,
}) => {
    const router = useRouter();
    const [id, setId] = useState(user?.id || 0);
    const [name, setName] = useState(user?.name || '');
    const [surname, setSurname] = useState(user?.surname || '');
    const [email, setEmail] = useState(user?.email || '');
    const [error, setError] = useState('');

    useEffect(() => {
        if (actionType === 'edit') {
            setName(user?.name || '');
            setSurname(user?.surname || '');
            setEmail(user?.email || '');
            setId(user?.id || 0);
        }
    }, [user]);

    // Clear form
    const clearForm = () => {
        setName('');
        setSurname('');
        setEmail('');
    }

    const handleSubmit = async () => {
        const user: User = {
            id: id,
            name: name,
            surname: surname,
            email: email,
            created_at: '',
            updated_at: ''
        };

        // Create user
        if (actionType === 'add') {
            try {
                const result = await createUser(user);
                if (result.error == null) {
                    setError('User created successfully');
                    // Clear form
                    clearForm();
                }
                else {
                    setError(result.error);
                }
            }
            catch (e) {
                setError((e as Error).message);
            }
        }

        // Edit User
        else if (actionType === 'edit') {
            try {
                const result = await updateUser(user);
                if (result.error == null) {
                    setError('User edited successfully');
                }
                else {
                    setError(result.error);
                }
            }
            catch (e) {
                setError((e as Error).message);
            }
        }
    };
    const handleBack = () => {
        router.back();
    };

    return (
        <form>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Surname:
                <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <button type="button" onClick={handleBack}>Back</button>
            <button type="button" onClick={handleSubmit}>{actionType === 'add' ? 'Create' : 'Save'}</button>
            <p> {error} </p>
        </form>
    );
};

export default UserDetailForm;
