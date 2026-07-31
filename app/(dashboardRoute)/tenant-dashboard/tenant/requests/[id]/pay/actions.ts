'use server';

import { redirect } from 'next/navigation';

const createPayment = async (rentalRequestId: string) => {
    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/payments/create`,
        {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                rentalRequestId,
            }),

            cache: 'no-store',
        },
    );

    return response.json();
};

export async function handlePayment(rentalRequestId: string) {
    const result = await createPayment(rentalRequestId);

    if (result?.data?.paymentUrl) {
        redirect(result.data.paymentUrl);
    }
}
