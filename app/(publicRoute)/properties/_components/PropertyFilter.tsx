'use client';

import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const PropertyFilter = () => {
    const router = useRouter();

    const searchParams = useSearchParams();

    const search = useMemo(
        () => searchParams.get('search') || '',
        [searchParams],
    );

    const propertyType = useMemo(
        () => searchParams.get('propertyType') || '',
        [searchParams],
    );

    const sort = useMemo(() => searchParams.get('sort') || '', [searchParams]);

    const updateURL = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        // reset pagination

        params.set('page', '1');

        router.push(`/properties?${params.toString()}`);
    };

    const resetFilter = () => {
        router.push('/properties');
    };

    return (
        <div
            className="
                flex
                flex-col
                md:flex-row
                gap-4
            "
        >
            {/* Search */}

            <Input
                placeholder="Search property..."
                value={search}
                onChange={(e) => updateURL('search', e.target.value)}
            />

            {/* Property Type */}

            <Select
                value={propertyType || undefined}
                onValueChange={(value) => updateURL('propertyType', value)}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="Apartment">Apartment</SelectItem>

                    <SelectItem value="House">House</SelectItem>

                    <SelectItem value="Villa">Villa</SelectItem>
                </SelectContent>
            </Select>

            {/* Sort */}

            <Select
                value={sort || undefined}
                onValueChange={(value) => updateURL('sort', value)}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Sort By" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="price_asc">Price Low → High</SelectItem>

                    <SelectItem value="price_desc">Price High → Low</SelectItem>

                    <SelectItem value="latest">Latest</SelectItem>
                </SelectContent>
            </Select>

            <Button variant="outline" onClick={resetFilter}>
                Reset
            </Button>
        </div>
    );
};

export default PropertyFilter;
