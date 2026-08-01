/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { getCategories } from '../actions';

interface Props {
    form: any;
}

interface Category {
    id: string;

    name: string;
}

const PropertyType = ({ form }: Props) => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const result = await getCategories();

                setCategories(result?.data ?? []);
            } catch (error) {
                toast.error(
                    error instanceof Error
                        ? error.message
                        : 'Failed to load categories',
                );
            }
        };

        loadCategories();
    }, []);

    return (
        <div className="space-y-5">
            {/* Property Type */}

            <FormField
                control={form.control}
                name="propertyType"
                rules={{
                    required: 'Property type is required',
                }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Property Type</FormLabel>

                        <Select
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select property type" />
                                </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                                {['Apartment', 'House', 'Villa', 'Studio'].map(
                                    (type) => (
                                        <SelectItem key={type} value={type}>
                                            {type}
                                        </SelectItem>
                                    ),
                                )}
                            </SelectContent>
                        </Select>

                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Category */}

            <FormField
                control={form.control}
                name="categoryId"
                rules={{
                    required: 'Category is required',
                }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>

                        <Select
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default PropertyType;
