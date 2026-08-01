import { cookies } from 'next/headers';

const BACKEND_API_URL = process.env.BACKEND_API_URL;

export interface AdminDashboardStats {
    totalUsers: number;
    totalProperties: number;
    pendingRequests: number;
    bannedUsers: number;
    activeLandlords: number;
    activeTenants: number;
}

export async function getAdminDashboard(): Promise<AdminDashboardStats> {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('accessToken')?.value;

    const res = await fetch(`${BACKEND_API_URL}/api/admin/dashboard`, {
        cache: 'no-store',

        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) {
        const error = await res.text();

        console.log(error);

        throw new Error('Failed to fetch admin dashboard');
    }

    const result = await res.json();

    const overview = result.data.overview;

    return {
        totalUsers: overview.users.total,

        totalProperties: overview.properties.total,

        pendingRequests: overview.rentalRequests.pending,

        bannedUsers: overview.users.banned,

        activeLandlords: overview.users.landlords,

        activeTenants: overview.users.tenants,
    };
}
