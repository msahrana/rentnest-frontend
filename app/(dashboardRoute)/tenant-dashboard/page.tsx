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
import { IPayment, IRentalRequest } from '@/lib/types';
import { getMyPayments } from '@/service/payment';
import { getMyFavorites } from '@/service/favorite';
import Link from 'next/link';

const getMyRentalRequests = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/rental-request`,
        {
            cache: 'no-store',
        },
    );

    if (!response.ok) {
        return {
            data: [],
        };
    }

    return response.json();
};

const TenantDashboardPage = async () => {
    const rentalResponse = await getMyRentalRequests();

    const rentalRequests: IRentalRequest[] = rentalResponse?.data || [];

    const paymentResponse = await getMyPayments();

    const payments: IPayment[] = paymentResponse?.data || [];

    const activeRentals = rentalRequests.filter(
        (item) => item.status === 'APPROVED',
    ).length;

    const pendingRequests = rentalRequests.filter(
        (item) => item.status === 'PENDING',
    ).length;

    const completedRentals = rentalRequests.filter(
        (item) => item.status === 'COMPLETED',
    ).length;

    const totalPaid = payments.reduce(
        (total, payment) => total + (payment.amount || 0),
        0,
    );

    const favoriteResponse = await getMyFavorites();

    const favorites = favoriteResponse?.data || [];

    const favoriteCount = favorites.length;

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
                description="
                Manage your rental requests,
                payments and favorite properties
                "
            />

            {/* Statistics */}

            <div
                className="
                grid
                gap-4
                md:grid-cols-2
                lg:grid-cols-4
                "
            >
                <StatCard
                    title="Active Rentals"
                    value={activeRentals}
                    icon={Home}
                    description="
                    Currently approved properties
                    "
                />

                <StatCard
                    title="Requests"
                    value={rentalRequests.length}
                    icon={Clock}
                    description="
                    Total rental requests
                    "
                />

                <StatCard
                    title="Payments"
                    value={`$${totalPaid}`}
                    icon={CreditCard}
                    description="
                    Total paid amount
                    "
                />

                <StatCard
                    title="Favorites"
                    value={favoriteCount}
                    icon={Heart}
                    description="Saved properties"
                />
            </div>

            {/* Rental Overview */}

            <div
                className="
                rounded-xl
                border
                bg-background
                p-6
                "
            >
                <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                >
                    <h2
                        className="
                        text-xl
                        font-semibold
                        "
                    >
                        Rental Overview
                    </h2>

                    <Building2 className="text-cyan-600" size={24} />
                </div>

                <div
                    className="
                    mt-5
                    grid
                    gap-4
                    md:grid-cols-3
                    "
                >
                    {/* Approved */}

                    <div
                        className="
                        rounded-lg
                        border
                        p-5
                        "
                    >
                        <div
                            className="
                            flex
                            items-center
                            gap-3
                            "
                        >
                            <CheckCircle2 className="text-green-600" />

                            <h3
                                className="
                                font-semibold
                                "
                            >
                                Approved
                            </h3>
                        </div>

                        <p
                            className="
                            mt-3
                            text-3xl
                            font-bold
                            "
                        >
                            {activeRentals}
                        </p>

                        <p
                            className="
                            text-sm
                            text-muted-foreground
                            "
                        >
                            Ready for payment
                        </p>
                    </div>

                    {/* Pending */}

                    <div
                        className="
                        rounded-lg
                        border
                        p-5
                        "
                    >
                        <div
                            className="
                            flex
                            items-center
                            gap-3
                            "
                        >
                            <Clock className="text-yellow-500" />

                            <h3
                                className="
                                font-semibold
                                "
                            >
                                Pending
                            </h3>
                        </div>

                        <p
                            className="
                            mt-3
                            text-3xl
                            font-bold
                            "
                        >
                            {pendingRequests}
                        </p>

                        <p
                            className="
                            text-sm
                            text-muted-foreground
                            "
                        >
                            Waiting landlord approval
                        </p>
                    </div>

                    {/* Completed */}

                    <div
                        className="
                        rounded-lg
                        border
                        p-5
                        "
                    >
                        <div
                            className="
                            flex
                            items-center
                            gap-3
                            "
                        >
                            <CalendarCheck className="text-cyan-600" />

                            <h3
                                className="
                                font-semibold
                                "
                            >
                                Completed
                            </h3>
                        </div>

                        <p
                            className="
                            mt-3
                            text-3xl
                            font-bold
                            "
                        >
                            {completedRentals}
                        </p>

                        <p
                            className="
                            text-sm
                            text-muted-foreground
                            "
                        >
                            Previous rentals
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Rental Requests */}

            <div
                className="
                rounded-xl
                border
                p-6
                "
            >
                <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                >
                    <h2
                        className="
                        text-xl
                        font-semibold
                        "
                    >
                        Recent Rental Requests
                    </h2>

                    <Link href='/properties'><button
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
                    </button></Link>
                </div>

                <div
                    className="
                    mt-5
                    space-y-4
                    "
                >
                    {rentalRequests.length > 0 ? (
                        rentalRequests.map((item) => (
                            <div
                                key={item.id}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-lg
                                    border
                                    p-4
                                    transition
                                    hover:bg-muted
                                    "
                            >
                                <div>
                                    <h3
                                        className="
                                            font-medium
                                            "
                                    >
                                        {item.property?.title ??
                                            'Unknown Property'}
                                    </h3>

                                    <p
                                        className="
                                            text-sm
                                            text-muted-foreground
                                            "
                                    >
                                        {item.property?.rent
                                            ? `$${item.property.rent}/month`
                                            : 'Rent unavailable'}
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
                                            item.status === 'APPROVED'
                                                ? 'bg-blue-100 text-blue-600'
                                                : ''
                                        }


                                        ${
                                            item.status === 'PENDING'
                                                ? 'bg-yellow-100 text-yellow-600'
                                                : ''
                                        }


                                        ${
                                            item.status === 'REJECTED'
                                                ? 'bg-red-100 text-red-600'
                                                : ''
                                        }


                                        ${
                                            item.status === 'COMPLETED'
                                                ? 'bg-green-100 text-green-600'
                                                : ''
                                        }

                                        `}
                                >
                                    {item.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p
                            className="
                                text-muted-foreground
                                "
                        >
                            No rental requests found
                        </p>
                    )}
                </div>
            </div>

            {/* Payment History */}

            <div
                className="
    rounded-xl
    border
    p-6
    "
            >
                <div
                    className="
        flex
        items-center
        justify-between
        "
                >
                    <h2
                        className="
            text-xl
            font-semibold
            "
                    >
                        Payment History
                    </h2>

                    <CreditCard className="text-cyan-600" />
                </div>

                <div
                    className="
        mt-5
        space-y-4
        "
                >
                    {payments.length > 0 ? (
                        payments.map((payment) => (
                            <div
                                key={payment.id}
                                className="
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        border
                        p-4
                        "
                            >
                                <div>
                                    <h3
                                        className="
                                font-medium
                                "
                                    >
                                        {payment.rentalRequest?.property?.title}
                                    </h3>

                                    <p
                                        className="
                                text-sm
                                text-muted-foreground
                                "
                                    >
                                        Transaction: {payment.transactionId}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p
                                        className="
                                font-bold
                                "
                                    >
                                        ${payment.amount}
                                    </p>

                                    <span
                                        className="
                                rounded-full
                                bg-green-100
                                px-3
                                py-1
                                text-xs
                                text-green-600
                                "
                                    >
                                        {payment.status}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p
                            className="
                    text-muted-foreground
                    "
                        >
                            No payment history found
                        </p>
                    )}
                </div>
            </div>

            {/* Quick Actions */}

            <div
                className="
    rounded-xl
    border
    p-6
    "
            >
                <h2
                    className="
        text-xl
        font-semibold
        "
                >
                    Quick Actions
                </h2>

                <div
                    className="
        mt-5
        grid
        gap-4
        md:grid-cols-3
        "
                >
                    {/* Find Properties */}

                    <Link
                        href="/properties"
                        className="
            cursor-pointer
            rounded-lg
            border
            p-5
            transition
            hover:bg-muted
            "
                    >
                        <Building2
                            className="
                mb-3
                text-cyan-600
                "
                        />

                        <h3 className="font-semibold">Find Properties</h3>

                        <p className="text-sm text-muted-foreground">
                            Explore available rentals
                        </p>
                    </Link>

                    {/* Make Payment */}

                    <Link
                        href="/tenant-dashboard/tenant/requests"
                        className="
            cursor-pointer
            rounded-lg
            border
            p-5
            transition
            hover:bg-muted
            "
                    >
                        <CreditCard
                            className="
                mb-3
                text-cyan-600
                "
                        />

                        <h3 className="font-semibold">Make Payment</h3>

                        <p className="text-sm text-muted-foreground">
                            Complete approved rentals
                        </p>
                    </Link>

                    {/* Write Review */}

                    <Link
                        href="/tenant-dashboard/tenant/reviews"
                        className="
            cursor-pointer
            rounded-lg
            border
            p-5
            transition
            hover:bg-muted
            "
                    >
                        <MessageSquare
                            className="
                mb-3
                text-cyan-600
                "
                        />

                        <h3 className="font-semibold">Write Review</h3>

                        <p className="text-sm text-muted-foreground">
                            Share rental experience
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TenantDashboardPage;
