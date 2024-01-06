'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'


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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    const handleBack = () => {
        router.back();
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button onClick={handleBack}>Back</button>
            <button type="submit">{actionType === 'add' ? 'Create' : 'Save'}</button>
        </form>
    );
};

export default UserDetailForm;
