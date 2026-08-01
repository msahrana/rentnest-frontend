import { getAdminUsers } from './actions';

import UserTable from './_components/UserTable';

interface AdminPageProps {
    searchParams: Promise<{
        page?: string;
        search?: string;
    }>;
}

const AdminPage = async ({ searchParams }: AdminPageProps) => {
    const params = await searchParams;

    const page = Number(params.page) || 1;

    const search = params.search || '';

    const result = await getAdminUsers(page, search);

    const users = result?.data || [];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">User Management</h1>

                <p className="text-muted-foreground">
                    Manage users, roles and account status
                </p>
            </div>

            <UserTable users={users} />
        </div>
    );
};

export default AdminPage;
