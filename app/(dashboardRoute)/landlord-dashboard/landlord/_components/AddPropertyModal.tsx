'use client';

import { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import PropertyForm from './PropertyForm';

const AddPropertyModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="
                    bg-cyan-600
                    hover:bg-yellow-500
                    hover:text-black
                    "
                >
                    Add Property
                </Button>
            </DialogTrigger>

            <DialogContent
                className="
                max-w-3xl
                max-h-[90vh]
                overflow-y-auto
                "
            >
                <DialogHeader>
                    <DialogTitle>Create New Property</DialogTitle>
                </DialogHeader>

                <PropertyForm onSuccess={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
};

export default AddPropertyModal;
