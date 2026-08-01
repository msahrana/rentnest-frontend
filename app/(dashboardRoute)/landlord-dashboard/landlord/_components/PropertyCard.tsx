'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Eye, MapPin, BedDouble, Bath, Ruler } from 'lucide-react';

import { Button } from '@/components/ui/button';
import PropertyActions from './PropertyActions';
import { deleteProperty } from '../actions';

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
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this property?',
        );

        if (!confirmed) return;

        try {
            await deleteProperty(property.id);

            toast.success('Property deleted successfully');

            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : 'Failed to delete property',
            );
        }
    };

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

            <div className="space-y-4 p-5">
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
                                line-clamp-1
                                font-semibold
                            "
                        >
                            {property.title}
                        </h3>
                    </div>

                    <div className="flex items-center gap-2">
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
                    <div className="flex items-center gap-1">
                        <BedDouble size={15} />
                        {property.bedrooms ?? 0}
                    </div>

                    <div className="flex items-center gap-1">
                        <Bath size={15} />
                        {property.bathrooms ?? 0}
                    </div>

                    <div className="flex items-center gap-1">
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
                        border-t
                        pt-3
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
                        {property.views ?? 0} views
                    </div>

                    <Button
                        onClick={handleDelete}
                        className="
                            bg-red-600
                            text-white
                            hover:bg-red-700
                        "
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
