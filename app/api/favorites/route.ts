/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('accessToken')?.value;

        const response = await fetch(
            `${process.env.BACKEND_API_URL}/api/favorites`,
            {
                method: 'GET',

                headers: {
                    Authorization: `Bearer ${token}`,
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
                data: [],
            },
            {
                status: 500,
            },
        );
    }
}
