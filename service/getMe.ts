'use server';

import { cookies } from 'next/headers';

export const getMe = async () => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('accessToken')?.value;

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in!',
            data: null,
        };
    }

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
            method: 'GET',

            headers: {
                Cookie: `accessToken=${accessToken}`,
            },

            cache: 'no-store',
        });

        const result = await res.json();

        return result;
    } catch (error) {
        console.log('GET ME ERROR:', error);

        return {
            success: false,
            message: 'Something went wrong!',
            data: null,
        };
    }
};
