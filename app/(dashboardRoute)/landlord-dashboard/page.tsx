import {
    Building2,
    DollarSign,
    Eye,
    Home,
    PlusCircle,
    Users,
    FileText,
    CheckCircle,
} from 'lucide-react';

import StatCard from '../_components/stat-card';
import DashboardHeader from '../_components/dashboard-header';

const LandlordDashboardPage = async () => {
    return (
        <div className="space-y-6">
            {/* Header */}

            <DashboardHeader
                title={
                    <>
                        Welcome to{' '}
                        <span className="text-cyan-600">Landlord</span>{' '}
                        Dashboard
                    </>
                }
                description="Manage your properties, rental requests and earnings"
            />

            {/* Statistics */}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Properties"
                    value="24"
                    icon={Building2}
                    description="Listed properties"
                />

                <StatCard
                    title="Active Rentals"
                    value="18"
                    icon={Home}
                    description="Currently rented"
                />

                <StatCard
                    title="Rental Requests"
                    value="12"
                    icon={Users}
                    description="Pending requests"
                />

                <StatCard
                    title="Total Earnings"
                    value="$12,500"
                    icon={DollarSign}
                    description="Monthly income"
                />
            </div>

            {/* Property Overview */}

            <div className="rounded-xl border p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">My Properties</h2>

                    <button className="rounded-md bg-cyan-600 px-4 py-2 text-sm text-white hover:bg-yellow-500 hover:text-black transition">
                        Add Property
                    </button>
                </div>

                <div className="mt-5 space-y-4">
                    {[
                        {
                            title: 'Luxury Apartment in Dhaka',
                            status: 'Available',
                            views: '1.2K',
                        },
                        {
                            title: 'Modern Family House',
                            status: 'Rented',
                            views: '850',
                        },
                        {
                            title: 'Commercial Office Space',
                            status: 'Pending Approval',
                            views: '640',
                        },
                    ].map((property) => (
                        <div
                            key={property.title}
                            className="flex items-center justify-between rounded-lg border p-4 transition hover:bg-muted"
                        >
                            <div>
                                <h3 className="font-medium">
                                    {property.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {property.status}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Eye size={16} />
                                {property.views}
                                views
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rental Requests */}

            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">
                    Recent Rental Requests
                </h2>

                <div className="mt-5 space-y-4">
                    {[
                        {
                            name: 'Md. Rahim',
                            property: 'Luxury Apartment',
                            status: 'Pending',
                        },
                        {
                            name: 'Sadia Ahmed',
                            property: 'Family House',
                            status: 'Approved',
                        },
                        {
                            name: 'Karim Hasan',
                            property: 'Office Space',
                            status: 'Rejected',
                        },
                    ].map((request) => (
                        <div
                            key={request.name}
                            className="flex items-center justify-between rounded-lg border p-4"
                        >
                            <div>
                                <h3 className="font-medium">{request.name}</h3>

                                <p className="text-sm text-muted-foreground">
                                    {request.property}
                                </p>
                            </div>

                            <span
                                className={`
                                    rounded-full px-3 py-1 text-xs font-medium
                                    ${
                                        request.status === 'Approved'
                                            ? 'bg-green-100 text-green-700'
                                            : request.status === 'Rejected'
                                              ? 'bg-red-100 text-red-700'
                                              : 'bg-yellow-100 text-yellow-700'
                                    }
                                `}
                            >
                                {request.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}

            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">Quick Actions</h2>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <div className="cursor-pointer rounded-lg border p-5 transition hover:bg-muted">
                        <PlusCircle className="mb-3 text-cyan-600" size={24} />

                        <h3 className="font-medium">Add New Property</h3>

                        <p className="text-sm text-muted-foreground">
                            Create a new rental listing
                        </p>
                    </div>

                    <div className="cursor-pointer rounded-lg border p-5 transition hover:bg-muted">
                        <FileText className="mb-3 text-cyan-600" size={24} />

                        <h3 className="font-medium">Manage Properties</h3>

                        <p className="text-sm text-muted-foreground">
                            Edit or remove listings
                        </p>
                    </div>

                    <div className="cursor-pointer rounded-lg border p-5 transition hover:bg-muted">
                        <CheckCircle className="mb-3 text-cyan-600" size={24} />

                        <h3 className="font-medium">Manage Requests</h3>

                        <p className="text-sm text-muted-foreground">
                            Approve or reject tenants
                        </p>
                    </div>
                </div>
            </div>

            {/* Performance */}

            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">Performance Summary</h2>

                <div className="mt-5 grid gap-5 md:grid-cols-3">
                    <div className="rounded-lg bg-cyan-50 p-5">
                        <h3 className="font-medium">Property Views</h3>

                        <p className="mt-2 text-3xl font-bold text-cyan-600">
                            15.4K
                        </p>
                    </div>

                    <div className="rounded-lg bg-yellow-50 p-5">
                        <h3 className="font-medium">Conversion Rate</h3>

                        <p className="mt-2 text-3xl font-bold text-yellow-600">
                            72%
                        </p>
                    </div>

                    <div className="rounded-lg bg-green-50 p-5">
                        <h3 className="font-medium">Completed Rentals</h3>

                        <p className="mt-2 text-3xl font-bold text-green-600">
                            48
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandlordDashboardPage;
