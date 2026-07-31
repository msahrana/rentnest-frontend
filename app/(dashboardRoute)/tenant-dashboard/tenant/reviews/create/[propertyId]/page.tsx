import Link from 'next/link';

import { ArrowLeft, Send } from 'lucide-react';

interface Props {
    params: Promise<{
        propertyId: string;
    }>;
}

const createReview = async (formData: FormData) => {
    'use server';

    const propertyId = formData.get('propertyId') as string;

    const rating = Number(formData.get('rating'));

    const comment = formData.get('comment') as string;

    const response = await fetch(`${process.env.BACKEND_API_URL}/api/reviews`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            propertyId,

            rating,

            comment,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to create review');
    }
};

const CreateReviewPage = async ({ params }: Props) => {
    const { propertyId } = await params;

    return (
        <div
            className="
            mx-auto
            max-w-xl
            space-y-6
            "
        >
            <Link
                href="/tenant-dashboard/tenant/reviews"
                className="
                flex
                items-center
                gap-2
                text-sm
                text-muted-foreground
                "
            >
                <ArrowLeft size={18} />
                Back to Reviews
            </Link>

            <div
                className="
                rounded-xl
                border
                bg-background
                p-6
                "
            >
                <h1
                    className="
                    text-2xl
                    font-bold
                    "
                >
                    Create Review
                </h1>

                <p
                    className="
                    mt-2
                    text-muted-foreground
                    "
                >
                    Share your rental experience
                </p>

                <form
                    action={createReview}
                    className="
                    mt-6
                    space-y-5
                    "
                >
                    <input type="hidden" name="propertyId" value={propertyId} />

                    {/* Rating */}

                    <div>
                        <label
                            className="
                            mb-2
                            block
                            font-medium
                            "
                        >
                            Rating
                        </label>

                        <div
                            className="
                            flex
                            gap-2
                            "
                        >
                            <select
                                name="rating"
                                defaultValue="5"
                                className="
                                w-full
                                rounded-md
                                border
                                p-3
                                "
                            >
                                <option value="5">5 Star</option>

                                <option value="4">4 Star</option>

                                <option value="3">3 Star</option>

                                <option value="2">2 Star</option>

                                <option value="1">1 Star</option>
                            </select>
                        </div>
                    </div>

                    {/* Comment */}

                    <div>
                        <label
                            className="
                            mb-2
                            block
                            font-medium
                            "
                        >
                            Comment
                        </label>

                        <textarea
                            name="comment"
                            required
                            rows={5}
                            placeholder="
                            Write your experience...
                            "
                            className="
                            w-full
                            rounded-md
                            border
                            p-3
                            "
                        />
                    </div>

                    <button
                        type="submit"
                        className="
                        flex
                        items-center
                        justify-center
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
                        <Send size={18} />
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateReviewPage;
