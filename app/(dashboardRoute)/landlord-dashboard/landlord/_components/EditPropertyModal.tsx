/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

import { toast } from 'sonner';

import { getPropertyById } from '../actions';

import PropertyForm from './PropertyForm';

import { PropertyFormInput } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface Props {
    propertyId: string;

    open: boolean;

    setOpen: (value: boolean) => void;
}

const EditPropertyModal = ({ propertyId, open, setOpen }: Props) => {
    const [loading, setLoading] = useState(false);

    const [defaultData, setDefaultData] = useState<PropertyFormInput | null>(
        null,
    );

    const handleEdit = async () => {
        try {
            const result = await getPropertyById(propertyId);

            setDefaultData(result.data);

            setOpen(true);
        } catch (error: any) {
            toast.error(error.message || 'Failed to load property');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* This button is used from dropdown */}
            <Button
                onClick={handleEdit}
                disabled={loading}
                className="
                    text-left
                    px-2
                    py-1.5
                    text-sm
                "
            >
                {loading ? 'Loading...' : 'Edit'}
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
                            onSuccess={() => {
                                setOpen(false);
                                setDefaultData(null);
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditPropertyModal;
