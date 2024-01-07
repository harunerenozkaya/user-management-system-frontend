import { User } from "@/model/user";

// Get all users
export const getAllUsers = async () => {
    try {
        const response = await fetch('http://localhost:8080/users');
        if (!response.ok) {
            throw new Error('Users cannot be fetched');
        }
        const data = await response.json();
        console.log('Users fetched successfully:', data);
        return { data, error: null };
    } catch (error) {
        console.error('Failed to fetch users:', error);

        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        return { data: null, error: message };
    }
};

// Get user by ID
export const createUser = async (user : User) => {
    try {
        console.log(user);
        const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'*/*',
                'Accept-Encoding':'gzip, deflate, br',
                'Connection':'keep-alive'
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error('User cannot be created');
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        return { data: null, error: message };
    }
}

// Detete user by ID
export const deleteUser = async (id : number) => {
    try {
        const response = await fetch(`http://localhost:8080/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept':'*/*',
                'Accept-Encoding':'gzip, deflate, br',
                'Connection':'keep-alive'
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to delete user with ID: ${id}`);
        }

        console.log(`User with ID: ${id} deleted successfully`);
        return { data: `User with ID: ${id} was deleted successfully`, error: null };
    } catch (error) {
        console.error('Failed to delete user:', error);

        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        return { data: null, error: message };
    }
};

