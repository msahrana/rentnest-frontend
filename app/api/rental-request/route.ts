import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('accessToken')?.value;

        const response = await fetch(
            `${process.env.BACKEND_API_URL}/api/rentals`,
            {
                method: 'GET',

                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },

                cache: 'no-store',
            },
        );

        const result = await response.json();

        return NextResponse.json(result, {
            status: response.status,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch rental requests',
                data: [],
            },
            {
                status: 500,
            },
        );
    }
}
