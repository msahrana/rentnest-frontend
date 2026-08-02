'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { registerAction } from '../_actions/authActions';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type RegisterFormData = {
    name: string;
    email: string;
    password: string;
    phone: string;
    profilePhoto: string;
    role: 'TENANT' | 'LANDLORD';
};

const initialState = {
    success: false,
    message: '',
};

export default function RegisterForm() {
    const router = useRouter();

    const form = useForm<RegisterFormData>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            profilePhoto: '',
            role: 'TENANT',
        },
    });

    const [state, formAction, pending] = useActionState(
        registerAction,
        initialState,
    );

    useEffect(() => {
        if (!state.message) return;

        if (state.success) {
            toast.success(state.message);

            form.reset();

            setTimeout(() => {
                router.push('/auth/login');
            }, 1000);
        } else {
            toast.error(state.message);
        }
    }, [state, form, router]);

    return (
        <Card className="mx-auto max-w-lg">
            <CardContent className="pt-6">
                <Form {...form}>
                    <form action={formAction} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="name"
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            name="name"
                                            placeholder="Enter Your Full Name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            rules={{ required: 'Email is required' }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            name="email"
                                            type="email"
                                            placeholder="Enter Your Email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            rules={{
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password must be at least 6 characters',
                                },
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            name="password"
                                            type="password"
                                            placeholder="Enter Your Password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            rules={{
                                required: 'Phone number is required',
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            name="phone"
                                            placeholder="01XXXXXXXXX"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="profilePhoto"
                            rules={{
                                required: 'Profile Photo URL is Required',
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Profile Photo URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            name="profilePhoto"
                                            type="url"
                                            placeholder="https://i.pravatar.cc/300?img=13"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>

                                    {/* Hidden input is submitted to the Server Action */}
                                    <input
                                        type="hidden"
                                        name="role"
                                        value={field.value}
                                    />

                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Role" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="TENANT">
                                                Tenant
                                            </SelectItem>
                                            <SelectItem value="LANDLORD">
                                                Landlord
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={pending}
                        >
                            {pending ? 'Registering...' : 'Register'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
