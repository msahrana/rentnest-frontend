import { ArrowLeft, XCircle } from 'lucide-react';

import Link from 'next/link';

const PaymentCancelPage = () => {
    return (
        <div
            className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-muted/30
            p-6
            "
        >
            <div
                className="
                w-full
                max-w-md
                rounded-xl
                border
                bg-background
                p-8
                text-center
                shadow-lg
                "
            >
                <XCircle
                    size={70}
                    className="
                    mx-auto
                    text-red-600
                    "
                />

                <h1
                    className="
                    mt-5
                    text-3xl
                    font-bold
                    "
                >
                    Payment Cancelled
                </h1>

                <p
                    className="
                    mt-3
                    text-muted-foreground
                    "
                >
                    Your payment process was cancelled. You can try again
                    anytime.
                </p>

                <Link
                    href="/dashboard/tenant"
                    className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-cyan-600
                    py-3
                    text-white
                    transition
                    hover:bg-yellow-500
                    "
                >
                    <ArrowLeft size={18} />
                    Back To Dashboard
                </Link>
            </div>
        </div>
    );
};

export default PaymentCancelPage;
