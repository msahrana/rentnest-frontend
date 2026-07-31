export const getMyPayments = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/payments`,
        {
            cache: 'no-store',
        },
    );

    return response.json();
};
