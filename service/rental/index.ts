'use server';

import { cookies } from 'next/headers';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export const getMyRentals = async () => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('accessToken')?.value;

    const response = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
        cache: 'no-store',

        headers: {
            Cookie: `accessToken=${accessToken}`,
        },
    });

    if (!response.ok) {
        return {
            data: [],
        };
    }

    return response.json();
};

export const createPayment = async (rentalRequestId: string) => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('accessToken')?.value;

    const res = await fetch(`${BASE_URL}/payments/create`, {
        method: 'POST',
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            rentalRequestId,
        }),
    });

    return res.json();
};
