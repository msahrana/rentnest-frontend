'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

import { PropertyFormInput } from '@/lib/types';

import { createProperty } from '../actions';
import BasicInfo from './BasicInfo';
import LocationInfo from './LocationInfo';
import PropertyDetails from './PropertyDetails';
import PropertyType from './PropertyType';
import ImageFields from './ImageFields';
import AmenitiesField from './AmenitiesField';

interface Props {
    onSuccess: () => void;

    initialData?: PropertyFormInput;

    propertyId?: string;
}

export default function PropertyForm({ onSuccess }: Props) {
    const router = useRouter();

    const form = useForm<PropertyFormInput>({
        defaultValues: {
            title: '',

            description: '',

            location: '',

            address: '',

            rent: 0,

            bedrooms: 1,

            bathrooms: 1,

            area: 0,

            propertyType: '',

            categoryId: '',

            thumbnail: '',

            images: ['', ''],

            amenities: [],
        },
    });

    const onSubmit = async (data: PropertyFormInput) => {
        try {
            await createProperty(data);

            toast.success('Property created successfully');

            form.reset();

            router.refresh();

            onSuccess();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : 'Failed to create property',
            );
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <BasicInfo form={form} />

                <LocationInfo form={form} />

                <PropertyDetails form={form} />

                <PropertyType form={form} />

                <ImageFields form={form} />

                <AmenitiesField form={form} />

                <div className="flex justify-end gap-3 pt-5">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                            form.reset();
                            onSuccess();
                        }}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting
                            ? 'Creating...'
                            : 'Create Property'}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
