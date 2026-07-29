import {
    Building2,
    CalendarCheck,
    CreditCard,
    Heart,
    MessageSquare,
    Clock,
    Home,
    CheckCircle2,
} from 'lucide-react';

import DashboardHeader from '../_components/dashboard-header';
import StatCard from '../_components/stat-card';

const TenantDashboardPage = async () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <DashboardHeader
                title={
                    <>
                        Welcome to{' '}
                        <span className="text-yellow-500">Tenant</span>{' '}
                        Dashboard
                    </>
                }
                description="Manage your rental requests, payments and favorite properties"
            />

            {/* Statistics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Active Rentals"
                    value="3"
                    icon={Home}
                    description="Currently rented properties"
                />

                <StatCard
                    title="Requests"
                    value="12"
                    icon={Clock}
                    description="Rental requests sent"
                />

                <StatCard
                    title="Payments"
                    value="$2.5K"
                    icon={CreditCard}
                    description="Total paid amount"
                />

                <StatCard
                    title="Favorites"
                    value="24"
                    icon={Heart}
                    description="Saved properties"
                />
            </div>

            {/* Rental Status Overview */}
            <div className="rounded-xl border bg-background p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Rental Overview</h2>

                    <Building2 className="text-cyan-600" size={24} />
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-600" />

                            <h3 className="font-semibold">Approved</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">5</p>

                        <p className="text-sm text-muted-foreground">
                            Ready for payment
                        </p>
                    </div>

                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <Clock className="text-yellow-500" />

                            <h3 className="font-semibold">Pending</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">4</p>

                        <p className="text-sm text-muted-foreground">
                            Waiting landlord approval
                        </p>
                    </div>

                    <div className="rounded-lg border p-5">
                        <div className="flex items-center gap-3">
                            <CalendarCheck className="text-cyan-600" />

                            <h3 className="font-semibold">Completed</h3>
                        </div>

                        <p className="mt-3 text-3xl font-bold">8</p>

                        <p className="text-sm text-muted-foreground">
                            Previous rentals
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Rental Requests */}
            <div className="rounded-xl border p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Recent Rental Requests
                    </h2>

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
                        Browse Properties
                    </button>
                </div>

                <div className="mt-5 space-y-4">
                    {[
                        {
                            name: 'Modern Apartment in Dhaka',
                            status: 'APPROVED',
                            price: '$850/month',
                        },

                        {
                            name: 'Luxury Family House',
                            status: 'PENDING',
                            price: '$1200/month',
                        },

                        {
                            name: 'Office Space',
                            status: 'REJECTED',
                            price: '$600/month',
                        },
                    ].map((item) => (
                        <div
                            key={item.name}
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
                            <div>
                                <h3 className="font-medium">{item.name}</h3>

                                <p className="text-sm text-muted-foreground">
                                    {item.price}
                                </p>
                            </div>

                            <span
                                className={`
                                    rounded-full
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold

                                    ${
                                        item.status === 'APPROVED' &&
                                        'bg-blue-100 text-blue-600'
                                    }

                                    ${
                                        item.status === 'PENDING' &&
                                        'bg-yellow-100 text-yellow-600'
                                    }

                                    ${
                                        item.status === 'REJECTED' &&
                                        'bg-red-100 text-red-600'
                                    }

                                    `}
                            >
                                {item.status}
                            </span>
                        </div>
                    ))}
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
                        <Building2 className="mb-3 text-cyan-600" />

                        <h3 className="font-semibold">Find Properties</h3>

                        <p className="text-sm text-muted-foreground">
                            Explore available rentals
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
                        <CreditCard className="mb-3 text-cyan-600" />

                        <h3 className="font-semibold">Make Payment</h3>

                        <p className="text-sm text-muted-foreground">
                            Complete approved rentals
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
                        <MessageSquare className="mb-3 text-cyan-600" />

                        <h3 className="font-semibold">Write Review</h3>

                        <p className="text-sm text-muted-foreground">
                            Share rental experience
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenantDashboardPage;
