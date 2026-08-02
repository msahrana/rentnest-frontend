'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';

type LoginState = {
    success: true;
    statusCode: number;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
    };
};

export const loginAction = async (
    redirectTo: string,
    prevState: LoginState,
    formData: FormData,
) => {
    const email = formData.get('email');
    const password = formData.get('password');

    const payload = { email, password };

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success) {
        const cookieStore = await cookies();

        cookieStore.set('accessToken', result.data.accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: 'lax',
        });

        cookieStore.set('refreshToken', result.data.refreshToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: 'lax',
        });

        const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

        if (
            redirectTo &&
            typeof redirectTo === 'string' &&
            redirectTo.startsWith('/') &&
            !redirectTo.startsWith('//')
        ) {
            redirect(redirectTo);
        }

        if (decodedToken.role === 'TENANT') {
            redirect('/tenant-dashboard');
        } else if (decodedToken.role === 'LANDLORD') {
            redirect('/landlord-dashboard');
        } else if (decodedToken.role === 'ADMIN') {
            redirect('/admin-dashboard');
        }
    }

    return result;
};

type RegisterState = {
    success: boolean;
    message: string;
};

export const registerAction = async (
    prevState: RegisterState,
    formData: FormData,
): Promise<RegisterState> => {
    try {
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            phone: formData.get('phone'),
            profilePhoto: formData.get('profilePhoto'),
            role: formData.get('role'),
        };

        const res = await fetch(
            `${process.env.BACKEND_API_URL}/api/auth/register`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                cache: 'no-store',
            },
        );

        const result = await res.json();

        if (!res.ok) {
            return {
                success: false,
                message: result.message || 'Registration failed',
            };
        }

        return {
            success: true,
            message: result.message || 'Registration successful!',
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: 'Something went wrong!',
        };
    }
};
