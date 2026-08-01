/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';

interface Props {
    form: any;
}

const PropertyDetails = ({ form }: Props) => {
    const fields = [
        {
            name: 'rent',
            label: 'Rent',
            placeholder: '30000',
        },

        {
            name: 'bedrooms',
            label: 'Bedrooms',
            placeholder: '2',
        },

        {
            name: 'bathrooms',
            label: 'Bathrooms',
            placeholder: '2',
        },

        {
            name: 'area',
            label: 'Area (sq ft)',
            placeholder: '1200',
        },
    ] as const;

    return (
        <div className="grid gap-4 md:grid-cols-4">
            {fields.map((item) => (
                <FormField
                    key={item.name}
                    control={form.control}
                    name={item.name}
                    rules={
                        item.name === 'rent'
                            ? {
                                  required: 'Rent is required',

                                  min: {
                                      value: 1,

                                      message: 'Rent must be greater than 0',
                                  },
                              }
                            : undefined
                    }
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{item.label}</FormLabel>

                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder={item.placeholder}
                                    value={field.value}
                                    onChange={(e) =>
                                        field.onChange(Number(e.target.value))
                                    }
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
            ))}
        </div>
    );
};

export default PropertyDetails;
