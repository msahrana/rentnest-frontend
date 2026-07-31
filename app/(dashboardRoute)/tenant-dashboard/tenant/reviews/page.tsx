import { Star, MessageSquare } from 'lucide-react';

interface Review {
    id: string;

    rating: number;

    comment: string;

    property: {
        id: string;

        title: string;

        location: string;
    };
}

const getMyReviews = async () => {
    const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/reviews/my`,

        {
            cache: 'no-store',
        },
    );

    if (!response.ok) {
        return [];
    }

    const result = await response.json();

    return result.data || [];
};

const TenantReviewPage = async () => {
    const reviews: Review[] = await getMyReviews();

    return (
        <div
            className="
            space-y-6
            "
        >
            <div>
                <h1
                    className="
                    text-3xl
                    font-bold
                    "
                >
                    My Reviews
                </h1>

                <p
                    className="
                    text-muted-foreground
                    "
                >
                    Your property feedback
                </p>
            </div>

            {reviews.length ? (
                <div
                    className="
                        space-y-4
                        "
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
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
                                {review.property.title}
                            </h2>

                            <p
                                className="
                                text-sm
                                text-muted-foreground
                                "
                            >
                                {review.property.location}
                            </p>

                            <div
                                className="
                                mt-3
                                flex
                                "
                            >
                                {Array.from({
                                    length: review.rating,
                                }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="
                                        fill-yellow-400
                                        text-yellow-400
                                        "
                                    />
                                ))}
                            </div>

                            <p
                                className="
                                mt-3
                                "
                            >
                                {review.comment}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className="
                    rounded-xl
                    border
                    p-10
                    text-center
                    "
                >
                    <MessageSquare
                        className="
                        mx-auto
                        mb-3
                        text-cyan-600
                        "
                        size={40}
                    />

                    <h2
                        className="
                        text-xl
                        font-semibold
                        "
                    >
                        No Reviews Found
                    </h2>
                </div>
            )}
        </div>
    );
};

export default TenantReviewPage;
