'use server';

import { RentalResponse } from '@/lib/types';
import { cookies } from 'next/headers';

export async function getMyRentalRequests(): Promise<RentalResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    const response = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch rental requests');
    }

    return response.json();
}
