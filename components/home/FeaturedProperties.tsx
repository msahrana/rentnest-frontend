/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PropertyCard from '../property/PropertyCard';

const FeaturedProperties = async () => {
    const res = await fetch('http://localhost:5000/api/properties?limit=6', {
        cache: 'no-store',
    });

    const result = await res.json();

    return (
        <section className="container mx-auto py-16">
            <div className="mb-10 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold">Featured Properties</h2>

                    <p className="mt-2 text-muted-foreground">
                        Discover the latest rental properties available on
                        RentNest.
                    </p>
                </div>

                <Button asChild>
                    <Link href="/properties">View All</Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {result.data.map((property: any) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProperties;
