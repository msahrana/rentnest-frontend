/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {
    property: any;
}

const PropertyCard = ({ property }: Props) => {
    return (
        <div className="rounded-xl border overflow-hidden shadow">
            <Image
                src={property.thumbnail}
                alt={property.title}
                width={400}
                height={250}
                unoptimized
                className="w-full h-52 object-cover"
            />

            <div className="p-5 space-y-3">
                <h2 className="font-bold text-xl">{property.title}</h2>

                <p className="text-muted-foreground">{property.location}</p>

                <p className="font-semibold">৳ {property.rent}</p>

                <p className="text-sm line-clamp-2">{property.description}</p>

                <Link href={`/properties/${property.id}`}>
                    <Button className="w-full">View Details</Button>
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;
