'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { createRentalRequest } from '@/service/rental/createRentalRequest';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Property {
    id: string;
    title: string;
    location: string;
    rent: number;
}

interface Props {
    properties: Property[];
}

const CreateRentalDialog = ({ properties }: Props) => {
    const router = useRouter();

    const [open, setOpen] = useState(false);

    const [isPending, startTransition] = useTransition();

    const [propertyId, setPropertyId] = useState('');

    const [moveInDate, setMoveInDate] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (!propertyId) {
            toast.error('Please select a property');
            return;
        }

        if (!moveInDate) {
            toast.error('Please select move in date');
            return;
        }

        if (!message.trim()) {
            toast.error('Please write a message');
            return;
        }

        startTransition(async () => {
            try {
                const result = await createRentalRequest({
                    propertyId,
                    moveInDate: new Date(moveInDate).toISOString(),
                    message,
                });

                if (!result.success) {
                    toast.error(result.message || 'Rental request failed');

                    return;
                }

                toast.success('Rental request created successfully');

                setOpen(false);

                setPropertyId('');
                setMoveInDate('');
                setMessage('');

                router.refresh();
            } catch (error) {
                console.error(error);

                toast.error('Something went wrong');
            }
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Rental
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-125">
                <DialogHeader>
                    <DialogTitle>Create Rental Request</DialogTitle>
                </DialogHeader>

                <div className="space-y-5">
                    {/* Property Select */}

                    <div className="space-y-2">
                        <Label>Select Property</Label>

                        <Select
                            value={propertyId}
                            onValueChange={setPropertyId}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Choose property" />
                            </SelectTrigger>

                            <SelectContent>
                                {properties.map((property) => (
                                    <SelectItem
                                        key={property.id}
                                        value={property.id}
                                    >
                                        {property.title}

                                        {' - '}

                                        {property.location}

                                        {' (৳'}

                                        {property.rent}

                                        {')'}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Date */}

                    <div className="space-y-2">
                        <Label>Move In Date</Label>

                        <Input
                            type="date"
                            value={moveInDate}
                            onChange={(e) => setMoveInDate(e.target.value)}
                        />
                    </div>

                    {/* Message */}

                    <div className="space-y-2">
                        <Label>Message</Label>

                        <Textarea
                            placeholder="I would like to rent this property..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                        />
                    </div>

                    <Button
                        className="w-full"
                        disabled={isPending}
                        onClick={handleSubmit}
                    >
                        {isPending ? 'Creating...' : 'Create Rental Request'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreateRentalDialog;
