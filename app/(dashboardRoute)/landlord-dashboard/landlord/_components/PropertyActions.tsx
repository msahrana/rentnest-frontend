'use client';

import { MoreVertical, Trash2, Edit } from 'lucide-react';
import { useState } from 'react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

import { toast } from 'sonner';

import { deleteProperty } from '../actions';

import EditPropertyModal from './EditPropertyModal';

interface Props {
    propertyId: string;
}

const PropertyActions = ({ propertyId }: Props) => {
    const [editOpen, setEditOpen] = useState(false);

    const handleDelete = async () => {
        const confirmDelete = confirm(
            'Are you sure you want to delete this property?',
        );

        if (!confirmDelete) return;

        try {
            await deleteProperty(propertyId);

            toast.success('Property deleted successfully');
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : 'Delete failed',
            );
        }
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreVertical size={18} />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setEditOpen(true)}>
                        <Edit size={16} className="mr-2" />
                        Edit
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={handleDelete}
                        className="text-red-600"
                    >
                        <Trash2 size={16} className="mr-2" />
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
