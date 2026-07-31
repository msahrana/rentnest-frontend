import { CheckCircle2, Home, Receipt } from 'lucide-react';

import Link from 'next/link';

interface Props {
    searchParams: Promise<{
        session_id?: string;
    }>;
}

const PaymentSuccessPage = async ({ searchParams }: Props) => {
    const { session_id } = await searchParams;

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
                <CheckCircle2
                    size={70}
                    className="
                    mx-auto
                    text-green-600
                    "
                />

                <h1
                    className="
                    mt-5
                    text-3xl
                    font-bold
                    "
                >
                    Payment Successful
                </h1>

                <p
                    className="
                    mt-3
                    text-muted-foreground
                    "
                >
                    Your rental payment has been completed successfully. Your
                    rental status will be updated shortly.
                </p>

                {session_id && (
                    <div
                        className="
                            mt-5
                            rounded-lg
                            bg-muted
                            p-4
                            text-left
                            "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                "
                        >
                            <Receipt size={18} />
                            Stripe Session ID
                        </div>

                        <p
                            className="
                                mt-2
                                break-all
                                text-xs
                                text-muted-foreground
                                "
                        >
                            {session_id}
                        </p>
                    </div>
                )}

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
                    <Home size={18} />
                    Go To Dashboard
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
