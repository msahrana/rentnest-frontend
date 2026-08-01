import Image from 'next/image';
import PropertyActions from './PropertyActions';
import { Eye, MapPin, BedDouble, Bath, Ruler } from 'lucide-react';

interface PropertyCardProps {
    property: {
        id: string;

        title: string;

        thumbnail: string;

        location: string;

        rent: number;

        status: string;

        bedrooms?: number;

        bathrooms?: number;

        area?: number;

        views?: number;
    };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <div
            className="
                overflow-hidden
                rounded-xl
                border
                bg-background
                transition
                hover:shadow-md
            "
        >
            {/* Image */}

            <div
                className="
                relative
                h-60
                w-full
            "
            >
                <Image
                    src={property.thumbnail || '/placeholder.png'}
                    alt={property.title}
                    fill
                    unoptimized
                    className="object-cover"
                />
            </div>

            <div className="p-5 space-y-4">
                {/* Title + Status */}

                <div
                    className="
                    flex
                    items-start
                    justify-between
                    gap-3
"
                >
                    <div>
                        <h3
                            className="
                            font-semibold
                            line-clamp-1
                            "
                        >
                            {property.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-1">
                        <span
                            className={`
                            rounded-full
                            px-3
                            py-1
                            text-xs
                            font-medium

                                ${
                                    property.status === 'AVAILABLE'
                                        ? 'bg-green-100 text-green-700'
                                        : property.status === 'RENTED'
                                          ? 'bg-blue-100 text-blue-700'
                                          : 'bg-yellow-100 text-yellow-700'
                                }

            `}
                        >
                            {property.status}
                        </span>

                        <PropertyActions propertyId={property.id} />
                    </div>
                </div>

                {/* Location */}

                <div
                    className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-muted-foreground
                "
                >
                    <MapPin size={16} />

                    {property.location}
                </div>

                {/* Rent */}

                <p
                    className="
                    text-xl
                    font-bold
                    text-cyan-600
                "
                >
                    ৳{property.rent}
                    <span
                        className="
                        text-sm
                        font-normal
                        text-muted-foreground
                    "
                    >
                        /month
                    </span>
                </p>

                {/* Details */}

                <div
                    className="
                    grid
                    grid-cols-3
                    gap-2
                    text-sm
                    text-muted-foreground
                "
                >
                    <div
                        className="
                        flex
                        items-center
                        gap-1
                    "
                    >
                        <BedDouble size={15} />

                        {property.bedrooms ?? 0}
                    </div>

                    <div
                        className="
                        flex
                        items-center
                        gap-1
                    "
                    >
                        <Bath size={15} />

                        {property.bathrooms ?? 0}
                    </div>

                    <div
                        className="
                        flex
                        items-center
                        gap-1
                    "
                    >
                        <Ruler size={15} />

                        {property.area ?? 0}
                    </div>
                </div>

                {/* Footer */}

                <div
                    className="
                    flex
                    items-center
                    justify-between
                    pt-3
                    border-t
                "
                >
                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-muted-foreground
                    "
                    >
                        <Eye size={16} />
                        {property.views ?? 0}
                        views
                    </div>

                    <button
                        className="
                            rounded-md
                            bg-cyan-600
                            px-3
                            py-2
                            text-sm
                            text-white
                            hover:bg-cyan-700
                        "
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
