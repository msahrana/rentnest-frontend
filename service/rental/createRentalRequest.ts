'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export interface CreateRentalRequestPayload {
    propertyId: string;
    moveInDate: string;
    message: string;
}

export async function createRentalRequest(payload: CreateRentalRequestPayload) {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    const response = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Failed to create rental request');
    }

    revalidatePath('/tenant-dashboard/my-requests');

    return result;
}
