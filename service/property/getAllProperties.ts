'use server';

import { PropertyResponse } from '@/lib/types';
import { cookies } from 'next/headers';

export async function getAllProperties(): Promise<PropertyResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/properties`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch properties');
    }

    return res.json();
}
