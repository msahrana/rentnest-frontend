/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    AlertTriangle,
    Building2,
    CheckCircle2,
    ShieldCheck,
    Users,
    UserCheck,
    UserX,
    Clock,
    Home,
} from 'lucide-react';

import DashboardHeader from '../_components/dashboard-header';
import StatCard from '../_components/stat-card';
import { getAdminDashboard } from '@/lib/admin';

const AdminDashboardPage = async () => {
    // TODO: Replace with API data
    const stats = await getAdminDashboard();

    return (
        <div className="space-y-6">
            {/* Header */}
            <DashboardHeader
                title={
                    <>
                        Welcome to{' '}
                        <span className="text-yellow-500">Admin</span> Dashboard
                    </>
                }
                description="
                    Monitor users, properties, rental requests and
                    overall platform activity
                "
            />

            {/* Main Statistics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Users"
                    value={stats.totalUsers.toString() || '0'}
                    icon={Users}
                    description="Registered accounts"
                />

                <StatCard
                    title="Properties"
                    value={stats.totalProperties.toString() || '0'}
                    icon={Building2}
                    description="Total listings"
                />

                <StatCard
                    title="Pending Requests"
                    value={stats.pendingRequests.toString() || '0'}
                    icon={Clock}
                    description="Rental requests waiting"
                />

                <StatCard
                    title="Banned Users"
                    value={stats.bannedUsers.toString() || '0'}
                    icon={UserX}
                    description="Blocked accounts"
                />
            </div>

            {/* Platform Health */}
            <div className="rounded-xl border bg-background p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Platform Overview</h2>

                    <ShieldCheck className="text-cyan-600" size={26} />
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {/* Active Users */}
                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <UserCheck className="text-green-600" />

                            <h3 className="font-semibold">Active Users</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">
                            {stats.totalUsers - stats.bannedUsers}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Currently active accounts
                        </p>
                    </div>

                    {/* Landlords */}
                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <Home className="text-cyan-600" />

                            <h3 className="font-semibold">Landlords</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">
                            {stats.activeLandlords}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Property owners
                        </p>
                    </div>

                    {/* Tenants */}
                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <Users className="text-yellow-500" />

                            <h3 className="font-semibold">Tenants</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">
                            {stats.activeTenants}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Registered renters
                        </p>
                    </div>
                </div>
            </div>

            {/* Moderation Activities */}
            <div className="rounded-xl border p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Recent Activities</h2>

                    <button
                        className="
                        rounded-md
                        bg-cyan-600
                        px-4
                        py-2
                        text-sm
                        text-white
                        transition
                        hover:bg-yellow-500
                        "
                    >
                        View All
                    </button>
                </div>

                <div className="mt-5 space-y-4">
                    {[
                        {
                            title: 'New property submitted for review',
                            status: 'Waiting admin approval',
                            icon: Clock,
                        },

                        {
                            title: 'User account activated',
                            status: 'Account verification completed',
                            icon: CheckCircle2,
                        },

                        {
                            title: 'Suspicious account detected',
                            status: 'Requires moderation',
                            icon: AlertTriangle,
                        },
                    ].map((activity) => {
                        const Icon = activity.icon;

                        return (
                            <div
                                key={activity.title}
                                className="
                                flex
                                items-center
                                gap-4
                                rounded-lg
                                border
                                p-4
                                hover:bg-muted
                                transition
                                "
                            >
                                <Icon className="text-cyan-600" size={22} />

                                <div>
                                    <h3 className="font-medium">
                                        {activity.title}
                                    </h3>

                                    <p
                                        className="
                                        text-sm
                                        text-muted-foreground
                                        "
                                    >
                                        {activity.status}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Admin Actions */}
            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">Admin Actions</h2>

                <div
                    className="
                    mt-5
                    grid
                    gap-4
                    md:grid-cols-3
                    "
                >
                    <AdminAction
                        icon={Users}
                        title="Manage Users"
                        description="
                        Search users and ban/unban accounts
                        "
                    />

                    <AdminAction
                        icon={Building2}
                        title="Manage Properties"
                        description="
                        Review and moderate listings
                        "
                    />

                    <AdminAction
                        icon={ShieldCheck}
                        title="Content Moderation"
                        description="
                        Monitor platform activities
                        "
                    />
                </div>
            </div>
        </div>
    );
};

function AdminAction({
    icon: Icon,
    title,
    description,
}: {
    icon: any;
    title: string;
    description: string;
}) {
    return (
        <div
            className="
            cursor-pointer
            rounded-lg
            border
            p-5
            transition
            hover:bg-muted
            "
        >
            <Icon className="mb-3 text-cyan-600" size={28} />

            <h3 className="font-semibold">{title}</h3>

            <p
                className="
                text-sm
                text-muted-foreground
                "
            >
                {description}
            </p>
        </div>
    );
}

export default AdminDashboardPage;
