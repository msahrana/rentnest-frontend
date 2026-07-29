import Image from 'next/image';
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
    address: string;
    rent: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
}

interface PropertyDetailsProps {
    property: Property;
}

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
    return (
        <Card className="mx-48 w-2/3">
            <Image
                src={property.thumbnail}
                alt={property.location}
                width={800}
                height={500}
                unoptimized
                className="w-screen h-96"
            />

            <CardHeader>
                <CardAction className="bg-yellow-500 py-1 px-2 rounded-2xl text-cyan-600">
                    {property.propertyType}
                </CardAction>

                <CardTitle className="font-bold">{property.location}</CardTitle>

                <CardDescription>{property.description}</CardDescription>
                <div className="pt-2">
                    <CardDescription>
                        <span className="font-bold text-black">Location: </span>
                        {property.address}, {property.location}
                    </CardDescription>
                </div>

                <div>
                    <CardDescription>
                        <span className="font-bold text-black">Rent: </span>
                        {property.rent}
                    </CardDescription>
                </div>

                <div className="grid w-full grid-cols-1 gap-20 pt-4 md:grid-cols-3 pl-20">
                    <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/30 p-6">
                        <p className="text-sm font-medium text-muted-foreground">
                            Bedrooms
                        </p>
                        <h3 className="mt-2 text-3xl font-bold">
                            {property.bedrooms}
                        </h3>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/30 p-6">
                        <p className="text-sm font-medium text-muted-foreground">
                            Bathrooms
                        </p>
                        <h3 className="mt-2 text-3xl font-bold">
                            {property.bathrooms}
                        </h3>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-xl border bg-muted/30 p-6">
                        <p className="text-sm font-medium text-muted-foreground">
                            Area
                        </p>
                        <h3 className="mt-2 text-3xl font-bold">
                            {property.area} sq ft
                        </h3>
                    </div>
                </div>
            </CardHeader>

            <CardFooter>
                <Button className="w-full">Book Now</Button>
            </CardFooter>
        </Card>
    );
};

export default PropertyDetails;
