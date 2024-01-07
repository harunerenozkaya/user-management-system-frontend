'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { createUser } from '@/service/userService';
import {User} from '@/model/user';


type ActionType = 'add' | 'edit';

interface UserDetailFormProps {
    actionType: ActionType;
    defaultValues?: {
        name: string;
        surname: string;
        email: string;
    };
}

const UserDetailForm: React.FC<UserDetailFormProps> = ({
    actionType,
    defaultValues,
}) => {
    const router = useRouter();
    const [name, setName] = useState(defaultValues?.name || '');
    const [surname, setSurname] = useState(defaultValues?.surname || '');
    const [email, setEmail] = useState(defaultValues?.email || '');
    const [error, setError] = useState('');

    const clearForm = () => {
        setName('');
        setSurname('');
        setEmail('');
    }

    const handleSubmit = async () => {
        // Create user
        if (actionType === 'add') {
            const user: User = {
                id: 0,
                name: name,
                surname: surname,
                email: email,
                created_at: '',
                updated_at: ''
            };
            try {
                const result = await createUser(user);
                setError('User created successfully');

                // Clear form
                clearForm();
            }
            catch (e) {
                setError((e as Error).message);
            }
        }

        // Edit User
        else if (actionType === 'edit') {
            console.log('Save user');
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
