import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

interface Property {
    id: string;
    thumbnail: string;
    propertyType: string;
    location: string;
    description: string;
}

interface PropertyCardProps {
    property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <Card className="overflow-hidden pt-0 transition-all duration-300 hover:shadow-xl">
            <Image
                src={property.thumbnail}
                alt={property.location}
                width={600}
                height={400}
                unoptimized
                className="aspect-video w-full object-cover"
            />

            <CardHeader>
                <CardAction className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
                    {property.propertyType}
                </CardAction>

                <CardTitle>{property.location}</CardTitle>

                <CardDescription className="line-clamp-2">
                    {property.description}
                </CardDescription>
            </CardHeader>

            <CardFooter>
                <Button asChild className="w-full">
                    <Link href={`/properties/${property.id}`}>
                        View Details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PropertyCard;
