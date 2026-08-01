/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import { toast } from 'sonner';

import { getPropertyById } from '../actions';

import PropertyForm from './PropertyForm';

import { PropertyFormInput } from '@/lib/types';

interface Props {
    propertyId: string;
}

const EditPropertyModal = ({ propertyId }: Props) => {
    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const [defaultData, setDefaultData] = useState<PropertyFormInput | null>(
        null,
    );

    const loadProperty = async () => {
        try {
            setLoading(true);

            const result = await getPropertyById(propertyId);

            setDefaultData(result.data);

            setOpen(true);
        } catch (error: any) {
            toast.error('Failed to load property', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button variant="ghost" onClick={loadProperty} disabled={loading}>
                Edit
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="
                max-w-3xl
                max-h-[90vh]
                overflow-y-auto
                "
                >
                    <DialogHeader>
                        <DialogTitle>Edit Property</DialogTitle>
                    </DialogHeader>

                    {defaultData && (
                        <PropertyForm
                            initialData={defaultData}
                            propertyId={propertyId}
                            onSuccess={() => setOpen(false)}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditPropertyModal;
