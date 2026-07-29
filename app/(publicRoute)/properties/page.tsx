/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
import Link from 'next/link';

const Properties = async () => {
    const data = await fetch('http://localhost:5000/api/properties');
    const properties = await data.json();

    return (
        <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {properties.data.map((property: any) => (
                    <Card key={property.id} className="relative w-full pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

                        <Image
                            src={property.thumbnail}
                            alt="thumbnail"
                            unoptimized
                            width={400}
                            height={200}
                            className="aspect-video w-full object-cover"
                        />

                        <CardHeader>
                            <CardAction className="bg-yellow-500 py-1 px-2 rounded-2xl">
                                {property.propertyType}
                            </CardAction>
                            <CardTitle className="text-xm font-extrabold">
                                {property.location}
                            </CardTitle>
                            <CardDescription>
                                {property.description }
                            </CardDescription>
                        </CardHeader>

                        <CardFooter>
                            <Link
                                href={`/properties/${property.id}`}
                                className="w-full"
                            >
                                <Button className="w-full">View Details</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Properties;
