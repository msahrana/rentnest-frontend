'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';



import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { createRentalRequest } from '@/service/rental/createRentalRequest';

interface RentalRequestFormProps {
    propertyId: string;
}

export default function RentalRequestForm({
    propertyId,
}: RentalRequestFormProps) {
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const [moveInDate, setMoveInDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!moveInDate) {
            toast.error('Please select a move in date.');
            return;
        }

        if (!message.trim()) {
            toast.error('Please enter a message.');
            return;
        }

        startTransition(async () => {
            try {
                const payload = {
                    propertyId,
                    moveInDate: new Date(moveInDate).toISOString(),
                    message,
                };

                const result = await createRentalRequest(payload);

                if (!result.success) {
                    toast.error(
                        result.message || 'Failed to submit request.'
                    );
                    return;
                }

                toast.success('Rental request submitted successfully.');

                router.push('/tenant-dashboard/my-requests');
                router.refresh();
            } catch (error) {
                console.error(error);

                toast.error('Something went wrong.');
            }
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border bg-background p-6"
        >
            <div className="space-y-2">
                <Label htmlFor="moveInDate">Move In Date</Label>

                <Input
                    id="moveInDate"
                    type="date"
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">
                    Message to Landlord
                </Label>

                <Textarea
                    id="message"
                    rows={5}
                    placeholder="Write your rental request..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="w-full"
            >
                {isPending
                    ? 'Submitting...'
                    : 'Submit Rental Request'}
            </Button>
        </form>
    );
}