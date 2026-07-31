import Link from 'next/link';

import {
    Eye,
    CreditCard,
    CalendarDays,
    Home,
    MessageSquare,
} from 'lucide-react';
import { getMyRentals } from '@/service/rental';

interface RentalRequest {
    id: string;

    status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | 'CANCELLED';

    moveInDate: string;

    message: string;

    property: {
        id: string;

        title: string;

        location: string;

        rent: number;
    };
}

const TenantRequestsPage = async () => {
    const response = await getMyRentals();

    const rentalRequests: RentalRequest[] = response?.data || [];

    return (
        <div
            className="
            space-y-6
            "
        >
            {/* Header */}

            <div>
                <h1
                    className="
                    text-3xl
                    font-bold
                    "
                >
                    My Rental Requests
                </h1>

                <p
                    className="
                    text-muted-foreground
                    "
                >
                    Manage your rental applications
                </p>
            </div>

            {rentalRequests.length > 0 ? (
                <div
                    className="
                        space-y-4
                        "
                >
                    {rentalRequests.map((request) => (
                        <div
                            key={request.id}
                            className="
                                        rounded-xl
                                        border
                                        p-6
                                        "
                        >
                            <div
                                className="
                                            flex
                                            flex-col
                                            gap-5
                                            md:flex-row
                                            md:items-center
                                            md:justify-between
                                            "
                            >
                                {/* Property Info */}

                                <div
                                    className="
                                                space-y-3
                                                "
                                >
                                    <div
                                        className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    "
                                    >
                                        <Home
                                            size={20}
                                            className="
                                                        text-cyan-600
                                                        "
                                        />

                                        <h2
                                            className="
                                                        text-lg
                                                        font-semibold
                                                        "
                                        >
                                            {request.property.title}
                                        </h2>
                                    </div>

                                    <p
                                        className="
                                                    text-sm
                                                    text-muted-foreground
                                                    "
                                    >
                                        {request.property.location}
                                    </p>

                                    <p
                                        className="
                                                    font-semibold
                                                    "
                                    >
                                        ${request.property.rent}
                                        /month
                                    </p>

                                    <p
                                        className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    text-sm
                                                    "
                                    >
                                        <CalendarDays size={16} />
                                        Move In:
                                        {new Date(
                                            request.moveInDate,
                                        ).toLocaleDateString()}
                                    </p>
                                </div>

                                {/* Action */}

                                <div
                                    className="
                                                flex
                                                flex-col
                                                items-end
                                                gap-3
                                                "
                                >
                                    {/* Status */}

                                    <span
                                        className={`
                                                    rounded-full
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-semibold


                                                    ${
                                                        request.status ===
                                                        'APPROVED'
                                                            ? 'bg-green-100 text-green-600'
                                                            : ''
                                                    }



                                                    ${
                                                        request.status ===
                                                        'PENDING'
                                                            ? 'bg-yellow-100 text-yellow-600'
                                                            : ''
                                                    }




                                                    ${
                                                        request.status ===
                                                        'REJECTED'
                                                            ? 'bg-red-100 text-red-600'
                                                            : ''
                                                    }




                                                    ${
                                                        request.status ===
                                                        'COMPLETED'
                                                            ? 'bg-blue-100 text-blue-600'
                                                            : ''
                                                    }



                                                    `}
                                    >
                                        {request.status}
                                    </span>

                                    <div
                                        className="
                                                    flex
                                                    gap-2
                                                    "
                                    >
                                        {/* Details */}

                                        <Link
                                            href={`/tenant-dashboard/tenant/requests/${request.id}`}
                                            className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        rounded-md
                                                        border
                                                        px-4
                                                        py-2
                                                        text-sm
                                                        hover:bg-muted
                                                        "
                                        >
                                            <Eye size={16} />
                                            Details
                                        </Link>

                                        {/* Payment */}

                                        {request.status === 'APPROVED' && (
                                            <Link
                                                href={`/tenant-dashboard/tenant/requests/${request.id}/pay`}
                                                className="
                                                                flex
                                                                items-center
                                                                gap-2
                                                                rounded-md
                                                                bg-cyan-600
                                                                px-4
                                                                py-2
                                                                text-sm
                                                                text-white
                                                                hover:bg-yellow-500
                                                                "
                                            >
                                                <CreditCard size={16} />
                                                Pay
                                            </Link>
                                        )}

                                        {/* review */}
                                        {request.status === 'COMPLETED' && (
                                            <Link
                                                href={`/tenant-dashboard/tenant/reviews/create/${request.property.id}`}
                                                className="
                                                flex
                                                items-center
                                                gap-2
                                                rounded-md
                                                bg-green-600
                                                px-4
                                                py-2
                                                text-sm
                                                text-white
                                                transition
                                                hover:bg-cyan-600
                                                "
                                            >
                                                <MessageSquare size={16} />
                                                Write Review
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className="
                        rounded-xl
                        border
                        p-6
                        text-center
                        text-muted-foreground
                        "
                >
                    No rental requests found.
                </div>
            )}
        </div>
    );
};

export default TenantRequestsPage;
