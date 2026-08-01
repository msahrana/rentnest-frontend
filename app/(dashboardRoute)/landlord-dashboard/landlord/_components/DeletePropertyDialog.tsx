'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { deleteProperty } from '../actions';

interface Props {
    propertyId: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DeletePropertyDialog = ({ propertyId, open, setOpen }: Props) => {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleDelete = async () => {
        try {
            setLoading(true);

            await deleteProperty(propertyId);

            toast.success('Property deleted successfully');

            setOpen(false);

            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : 'Delete failed',
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete Property?</AlertDialogTitle>

                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your property.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={loading}>
                        Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700"
                    >
                        {loading ? 'Deleting...' : 'Delete'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeletePropertyDialog;
