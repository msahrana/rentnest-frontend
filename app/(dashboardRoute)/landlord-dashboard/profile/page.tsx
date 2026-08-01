import ProfileForm from '../../tenant-dashboard/profile/_components/profile-form';
import { cookies } from 'next/headers';

const getMyProfile = async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
        headers: {
            Cookie: cookieStore.toString(),
        },

        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch profile');
    }

    const result = await res.json();

    return result.data.profile;
};

const TenantProfilePage = async () => {
    const profile = await getMyProfile();

    return (
        <div className="container mx-auto py-8">
            <ProfileForm profile={profile} />
        </div>
    );
};

export default TenantProfilePage;
