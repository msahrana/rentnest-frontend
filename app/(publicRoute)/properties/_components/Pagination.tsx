'use client';

import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
    meta?: {
        page: number;

        totalPage: number;
    };
}

const Pagination = ({
    meta = {
        page: 1,
        totalPage: 1,
    },
}: PaginationProps) => {
    const router = useRouter();

    const params = useSearchParams();

    const changePage = (page: number) => {
        const query = new URLSearchParams(params.toString());

        query.set('page', String(page));

        router.push(`/properties?${query.toString()}`);
    };

    return (
        <div
            className="
            flex
            justify-center
            gap-3
        "
        >
            <Button
                disabled={meta.page <= 1}
                onClick={() => changePage(meta.page - 1)}
            >
                Previous
            </Button>

            <span
                className="
                border
                rounded
                px-4
                py-2
            "
            >
                {meta.page}
                {' / '}
                {meta.totalPage}
            </span>

            <Button
                disabled={meta.page >= meta.totalPage}
                onClick={() => changePage(meta.page + 1)}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
