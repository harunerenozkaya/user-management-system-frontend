export const getAllUsers = async () => {
    try {
        const response = await fetch('http://localhost:8000/users');
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
