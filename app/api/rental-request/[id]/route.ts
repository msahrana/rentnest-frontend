/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    context: {
        params: {
            id: string;
        };
    },
) {
    try {
        const token = request.cookies.get('accessToken')?.value;

        const { id } = context.params;

        const response = await fetch(
            `${process.env.BACKEND_API_URL}/api/rentals/${id}`,

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
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch rental details',
            },

            {
                status: 500,
            },
        );
    }
}
