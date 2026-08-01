'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

import { deleteProperty } from '../actions';
import EditPropertyModal from './EditPropertyModal';

interface Props {
    propertyId: string;
}

const PropertyActions = ({ propertyId }: Props) => {
    const router = useRouter();

    const [editOpen, setEditOpen] = useState(false);

    const handleDelete = async () => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this property?',
        );

        if (!confirmed) return;

        try {
            await deleteProperty(propertyId);

            toast.success('Property deleted successfully');

            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : 'Failed to delete property',
            );
        }
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => setEditOpen(true)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={handleDelete}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <EditPropertyModal
                propertyId={propertyId}
                open={editOpen}
                setOpen={setEditOpen}
            />
        </>
    );
};

export default PropertyActions;
