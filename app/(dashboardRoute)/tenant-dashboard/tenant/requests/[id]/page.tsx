import Link from 'next/link';
import { ArrowLeft, CalendarDays, Home, User, CreditCard } from 'lucide-react';

interface Props {
    params: Promise<{
        id: string;
    }>;
}

const getSingleRentalRequest = async (id: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/rentals/${id}`,
        {
            cache: 'no-store',
        },
    );

    if (!response.ok) {
        return null;
    }

    return response.json();
};

const RentalRequestDetailsPage = async ({ params }: Props) => {
    const { id } = await params;

    const response = await getSingleRentalRequest(id);

    const rental = response?.data;

    if (!rental) {
        return (
            <div
                className="
                rounded-xl
                border
                p-6
                "
            >
                Rental request not found
            </div>
        );
    }

    return (
        <div
            className="
            space-y-6
            "
        >
            {/* Back Button */}

            <Link
                href="/dashboard/tenant/requests"
                className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-muted-foreground
                hover:text-primary
                "
            >
                <ArrowLeft size={18} />
                Back to Requests
            </Link>

            {/* Property Card */}

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
                    gap-3
                    "
                >
                    <Home
                        className="
                        text-cyan-600
                        "
                    />

                    <h1
                        className="
                        text-2xl
                        font-bold
                        "
                    >
                        {rental.property.title}
                    </h1>
                </div>

                <p
                    className="
                    mt-3
                    text-muted-foreground
                    "
                >
                    {rental.property.location}
                </p>

                <p
                    className="
                    mt-3
                    text-xl
                    font-bold
                    "
                >
                    ${rental.property.rent}
                    /month
                </p>
            </div>

            {/* Request Information */}

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
                    Rental Information
                </h2>

                <div
                    className="
                    mt-5
                    space-y-3
                    "
                >
                    <p>
                        Status:
                        <span
                            className="
                            ml-2
                            rounded-full
                            bg-yellow-100
                            px-3
                            py-1
                            text-sm
                            "
                        >
                            {rental.status}
                        </span>
                    </p>

                    <p
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >
                        <CalendarDays size={18} />
                        Move In:
                        {new Date(rental.moveInDate).toLocaleDateString()}
                    </p>

                    <p>
                        Message:
                        {rental.message}
                    </p>
                </div>
            </div>

            {/* Landlord */}

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
                    gap-3
                    "
                >
                    <User
                        className="
                        text-cyan-600
                        "
                    />

                    <h2
                        className="
                        text-xl
                        font-semibold
                        "
                    >
                        Landlord Information
                    </h2>
                </div>

                <div
                    className="
                    mt-4
                    "
                >
                    <p>{rental.property.landlord.name}</p>

                    <p
                        className="
                        text-muted-foreground
                        "
                    >
                        {rental.property.landlord.email}
                    </p>
                </div>
            </div>

            {/* Payment Button */}

            {rental.status === 'APPROVED' && (
                <Link
                    href={`/tenant-dashboard/tenant/requests/${id}/pay`}
                    className="
                        flex
                        w-fit
                        items-center
                        gap-2
                        rounded-md
                        bg-cyan-600
                        px-5
                        py-3
                        text-white
                        hover:bg-yellow-500
                        "
                >
                    <CreditCard size={18} />
                    Pay Now
                </Link>
            )}
        </div>
    );
};

export default RentalRequestDetailsPage;
