/* eslint-disable @typescript-eslint/no-explicit-any */

import PropertyFilter from './_components/PropertyFilter';
import PropertyCard from './_components/PropertyCard';
import Pagination from './_components/Pagination';

interface PropertiesPageProps {
    searchParams: Promise<{
        search?: string;
        propertyType?: string;
        sort?: string;
        page?: string;
    }>;
}

const Properties = async ({ searchParams }: PropertiesPageProps) => {
    const params = await searchParams;

    const query = new URLSearchParams();

    query.set('page', params.page || '1');

    query.set('limit', '2');

    if (params.search) {
        query.set('search', params.search);
    }

    if (params.propertyType) {
        query.set('propertyType', params.propertyType);
    }

    if (params.sort) {
        query.set('sort', params.sort);
    }

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/properties?${query.toString()}`,

        {
            cache: 'no-store',
        },
    );

    const result = await res.json();

    return (
        <div className="container mx-auto py-10 space-y-8">
            <PropertyFilter />

            <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
            "
            >
                {result.data?.map((property: any) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            <Pagination
                meta={
                    result.meta || {
                        page: 1,
                        totalPage: 1,
                    }
                }
            />
        </div>
    );
};

export default Properties;
