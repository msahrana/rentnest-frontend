import {
    AlertTriangle,
    Building2,
    CheckCircle2,
    CreditCard,
    ShieldCheck,
    Users,
    UserCheck,
    Clock,
} from 'lucide-react';

import DashboardHeader from '../_components/dashboard-header';
import StatCard from '../_components/stat-card';

const AdminDashboardPage = async () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <DashboardHeader
                title={
                    <>
                        Welcome to <span className="text-yellow-500">Admin</span>{' '}
                        Dashboard
                    </>
                }
                description="Manage users, properties, rental requests and platform activities"
            />

            {/* Statistics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Users"
                    value="2,450"
                    icon={Users}
                    description="Registered users"
                />

                <StatCard
                    title="Properties"
                    value="860"
                    icon={Building2}
                    description="Total listings"
                />

                <StatCard
                    title="Revenue"
                    value="$45.8K"
                    icon={CreditCard}
                    description="Total earnings"
                />

                <StatCard
                    title="Pending Reports"
                    value="18"
                    icon={AlertTriangle}
                    description="Need review"
                />
            </div>

            {/* Platform Overview */}
            <div className="rounded-xl border bg-background p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Platform Overview</h2>

                    <ShieldCheck className="text-cyan-600" size={24} />
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <UserCheck className="text-green-600" />

                            <h3 className="font-semibold">Verified Users</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">1,980</p>

                        <p className="text-sm text-muted-foreground">
                            Active accounts
                        </p>
                    </div>

                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <Building2 className="text-cyan-600" />

                            <h3 className="font-semibold">Active Properties</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">720</p>

                        <p className="text-sm text-muted-foreground">
                            Available rentals
                        </p>
                    </div>

                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <Clock className="text-yellow-500" />

                            <h3 className="font-semibold">Pending Requests</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">56</p>

                        <p className="text-sm text-muted-foreground">
                            Waiting approval
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Activities */}
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
                        hover:bg-yellow-500
                        transition
                        "
                    >
                        View All
                    </button>
                </div>

                <div className="mt-5 space-y-4">
                    {[
                        {
                            title: 'New property submitted by landlord',
                            status: 'Pending approval',
                            icon: Clock,
                        },

                        {
                            title: 'User account verified',
                            status: 'Completed',
                            icon: CheckCircle2,
                        },

                        {
                            title: 'Payment received successfully',
                            status: 'Transaction completed',
                            icon: CreditCard,
                        },
                    ].map((activity) => {
                        const Icon = activity.icon;

                        return (
                            <div
                                key={activity.title}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-lg
                                    border
                                    p-4
                                    hover:bg-muted
                                    transition
                                    "
                            >
                                <div className="flex items-center gap-4">
                                    <Icon className="text-cyan-600" size={22} />

                                    <div>
                                        <h3 className="font-medium">
                                            {activity.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground">
                                            {activity.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">Quick Actions</h2>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div
                        className="
                        cursor-pointer
                        rounded-lg
                        border
                        p-5
                        hover:bg-muted
                        transition
                        "
                    >
                        <Users className="mb-3 text-cyan-600" />

                        <h3 className="font-semibold">Manage Users</h3>

                        <p className="text-sm text-muted-foreground">
                            View, ban and manage accounts
                        </p>
                    </div>

                    <div
                        className="
                        cursor-pointer
                        rounded-lg
                        border
                        p-5
                        hover:bg-muted
                        transition
                        "
                    >
                        <Building2 className="mb-3 text-cyan-600" />

                        <h3 className="font-semibold">Manage Properties</h3>

                        <p className="text-sm text-muted-foreground">
                            Approve and moderate listings
                        </p>
                    </div>

                    <div
                        className="
                        cursor-pointer
                        rounded-lg
                        border
                        p-5
                        hover:bg-muted
                        transition
                        "
                    >
                        <ShieldCheck className="mb-3 text-cyan-600" />

                        <h3 className="font-semibold">Security</h3>

                        <p className="text-sm text-muted-foreground">
                            Monitor platform security
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
