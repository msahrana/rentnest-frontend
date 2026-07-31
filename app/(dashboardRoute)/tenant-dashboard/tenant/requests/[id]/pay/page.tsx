import Link from 'next/link';
import { ArrowLeft, CreditCard, Home } from 'lucide-react';
import { cookies } from 'next/headers';

import { handlePayment } from './actions';

interface Props {
    params: Promise<{
        id: string;
    }>;
}

const getRentalRequest = async (id: string) => {
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/rentals/${id}`,
        {
            cache: 'no-store',

            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    if (!response.ok) {
        console.log(await response.text());

        return null;
    }

    return response.json();
};

const PaymentPage = async ({ params }: Props) => {
    const { id } = await params;

    const rentalResponse = await getRentalRequest(id);

    const rental = rentalResponse?.data;

    if (!rental) {
        return <div>Rental not found</div>;
    }

    return (
        <div className="space-y-6">
            <Link
                href={`/tenant-dashboard/tenant/requests/${id}`}
                className="
                flex
                items-center
                gap-2
                text-sm
                text-muted-foreground
                "
            >
                <ArrowLeft size={18} />
                Back
            </Link>

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
                        Payment Summary
                    </h1>
                </div>

                <div
                    className="
                    mt-6
                    space-y-3
                    "
                >
                    <h2
                        className="
                        text-lg
                        font-semibold
                        "
                    >
                        {rental.property.title}
                    </h2>

                    <p
                        className="
                        text-muted-foreground
                        "
                    >
                        {rental.property.location}
                    </p>

                    <p
                        className="
                        text-3xl
                        font-bold
                        "
                    >
                        ৳ {rental.property.rent}
                        <span className="text-base">/month</span>
                    </p>
                </div>
            </div>

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
                    Complete Payment
                </h2>

                <p
                    className="
                    mt-2
                    text-muted-foreground
                    "
                >
                    Click the button below to continue with Stripe payment.
                </p>

                <form
                    action={handlePayment.bind(null, id)}
                    className="
                    mt-5
                    "
                >
                    <button
                        className="
                        flex
                        items-center
                        gap-2
                        rounded-md
                        bg-cyan-600
                        px-6
                        py-3
                        text-white
                        transition
                        hover:bg-yellow-500
                        "
                    >
                        <CreditCard size={18} />
                        Pay with Stripe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
