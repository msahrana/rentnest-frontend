/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { updateUserStatus } from '../actions';

import { Button } from '@/components/ui/button';

import { toast } from 'sonner';

type UserStatus = 'ACTIVE' | 'BANNED';

interface User {
    id: string;

    name: string;

    email: string;

    role: string;

    status: UserStatus;
}

interface Props {
    users: User[];
}

export default function UserTable({ users }: Props) {
    const router = useRouter();

    const [loadingId, setLoadingId] = useState<string | null>(null);

    async function handleStatus(id: string, currentStatus: UserStatus) {
        const nextStatus: UserStatus =
            currentStatus === 'ACTIVE' ? 'BANNED' : 'ACTIVE';

        try {
            setLoadingId(id);

            const result = await updateUserStatus(id, nextStatus);

            if (result.success) {
                toast.success(
                    nextStatus === 'BANNED'
                        ? 'User banned successfully'
                        : 'User unbanned successfully',
                );

                router.refresh();
            } else {
                toast.error(result.message || 'Failed to update user status');
            }
        } catch (error: any) {
            toast.error('Something went wrong', error);
        } finally {
            setLoadingId(null);
        }
    }

    return (
        <div
            className="
            rounded-xl
            border
            overflow-hidden
            "
        >
            <table
                className="
                w-full
                text-sm
                "
            >
                <thead
                    className="
                    bg-muted
                    "
                >
                    <tr>
                        <th className="p-4 text-left">Name</th>

                        <th className="p-4 text-left">Email</th>

                        <th className="p-4 text-left">Role</th>

                        <th className="p-4 text-left">Status</th>

                        <th className="p-4 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td
                                colSpan={5}
                                className="
                                    p-6
                                    text-center
                                    text-muted-foreground
                                    "
                            >
                                No users found
                            </td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr
                                key={user.id}
                                className="
                                    border-t
                                    "
                            >
                                <td className="p-4 font-medium">{user.name}</td>

                                <td className="p-4">{user.email}</td>

                                <td className="p-4">{user.role}</td>

                                <td className="p-4">
                                    <span
                                        className={`
                                            rounded-full
                                            px-3
                                            py-1
                                            text-xs
                                            font-medium

                                            ${
                                                user.status === 'ACTIVE'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                            }
                                            `}
                                    >
                                        {user.status}
                                    </span>
                                </td>

                                <td className="p-4">
                                    <Button
                                        size="sm"
                                        variant={
                                            user.status === 'ACTIVE'
                                                ? 'destructive'
                                                : 'default'
                                        }
                                        disabled={loadingId === user.id}
                                        onClick={() =>
                                            handleStatus(user.id, user.status)
                                        }
                                    >
                                        {loadingId === user.id
                                            ? 'Updating...'
                                            : user.status === 'ACTIVE'
                                              ? 'Ban'
                                              : 'Unban'}
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
