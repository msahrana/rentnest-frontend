'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { PropertyFormInput } from '@/lib/types';

const getToken = async () => {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    if (!token) {
        throw new Error('Authentication token missing');
    }

    return token;
};

export async function createProperty(data: PropertyFormInput) {
    const token = await getToken();

    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/landlord/properties`,

        {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',

                Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify(data),
        },
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Property creation failed');
    }

    revalidatePath('/landlord-dashboard');

    return result;
}

export async function getLandlordProperties() {
    const token = await getToken();

    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/landlord/properties`,

        {
            headers: {
                Authorization: `Bearer ${token}`,
            },

            cache: 'no-store',
        },
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Failed to load properties');
    }

    return result;
}

export async function getLandlordRequests() {
    const token = await getToken();

    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/landlord/requests`,

        {
            headers: {
                Authorization: `Bearer ${token}`,
            },

            cache: 'no-store',
        },
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Failed to load rental requests');
    }

    return result;
}

export async function getCategories() {
    const token = await getToken();

    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/categories`,

        {
            method: 'GET',

            headers: {
                Authorization: `Bearer ${token}`,
            },

            cache: 'no-store',
        },
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch categories');
    }

    return result;
}

export async function deleteProperty(propertyId: string) {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    if (!token) {
        throw new Error('Authentication token missing');
    }

    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/landlord/properties/${propertyId}`,

        {
            method: 'DELETE',

            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Property delete failed');
    }

    revalidatePath('/landlord-dashboard');

    return result;
}

export async function getPropertyById(propertyId: string) {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    if (!token) {
        throw new Error('Authentication token missing');
    }

    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/landlord/properties/${propertyId}`,

        {
            headers: {
                Authorization: `Bearer ${token}`,
            },

            cache: 'no-store',
        },
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch property');
    }

    return result;
}

export async function updateProperty(
    propertyId: string,

    data: PropertyFormInput,
) {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    if (!token) {
        throw new Error('Authentication token missing');
    }

    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/landlord/properties/${propertyId}`,

        {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json',

                Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify(data),
        },
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Property update failed');
    }

    revalidatePath('/landlord-dashboard');

    return result;
}
