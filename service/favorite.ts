export const getMyFavorites = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/favorites`,
        {
            cache: 'no-store',
        },
    );

    return response.json();
};
