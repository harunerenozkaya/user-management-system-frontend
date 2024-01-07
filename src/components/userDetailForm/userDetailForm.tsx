'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { createUser, updateUser } from '@/service/userService';
import {User} from '@/model/user';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState('');

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
                    setStatus('User created successfully');
                    setStatusType('success')
                    // Clear form
                    clearForm();
                }
                else {
                    setStatus(result.error);
                    setStatusType('danger')
                }
            }
            catch (e) {
                setStatus((e as Error).message);
                setStatusType('danger')
            }
        }

        // Edit User
        else if (actionType === 'edit') {
            try {
                const result = await updateUser(user);
                if (result.error == null) {
                    setStatus('User edited successfully');
                    setStatusType('success')
                }
                else {
                    setStatus(result.error);
                    setStatusType('danger')
                }
            }
            catch (e) {
                setStatus((e as Error).message);
                setStatusType('danger')
            }
        }
    };
    const handleBack = () => {
        router.back();
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <h2 className="text-center mb-4">{actionType === 'add' ? 'Create a new user' : 'Edit user'}</h2>
                    <br/>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Surname:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" className="btn btn-secondary me-md-2" onClick={handleBack}>Back</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>{actionType === 'add' ? 'Create' : 'Save'}</button>
                        </div>
                        {status && statusType === 'success' && <div className="alert mt-3 alert-success">{status}</div>}
                        {status && statusType === 'danger' && <div className="alert mt-3 alert-danger">{status}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserDetailForm;
