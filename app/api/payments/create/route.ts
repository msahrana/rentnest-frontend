/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get('accessToken')?.value;

        const body = await request.json();

        const response = await fetch(
            `${process.env.BACKEND_API_URL}/api/payments/create`,
            {
                method: 'POST',

                headers: {
                    Authorization: `Bearer ${token}`,

                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(body),
            },
        );

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'Payment create failed',
            },
            {
                status: 500,
            },
        );
    }
}
