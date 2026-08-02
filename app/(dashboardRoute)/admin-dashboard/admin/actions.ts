'use server';

import { cookies } from 'next/headers';

const API_URL =
    process.env.BACKEND_API_URL 

export async function getAdminUsers(page: number = 1, search: string = '') {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    const url = new URL(`${API_URL}/api/admin/users`);

    url.searchParams.set('page', page.toString());

    if (search) {
        url.searchParams.set('search', search);
    }

    const response = await fetch(url.toString(), {
        method: 'GET',

        headers: {
            Authorization: `Bearer ${token}`,

            'Content-Type': 'application/json',
        },

        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch admin users');
    }

    return response.json();
}

export async function updateUserStatus(
    id: string,
    status: 'ACTIVE' | 'BANNED',
) {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    const response = await fetch(`${API_URL}/api/admin/users/${id}`, {
        method: 'PATCH',

        headers: {
            Authorization: `Bearer ${token}`,

            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            status,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to update user status');
    }

    return response.json();
}
