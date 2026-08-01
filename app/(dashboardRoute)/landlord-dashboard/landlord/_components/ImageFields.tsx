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

const ImageFields = ({ form }: Props) => {
    const images = [
        {
            name: 'thumbnail',
            label: 'Thumbnail URL',
            placeholder: 'https://example.com/image.jpg',
        },

        {
            name: 'images.0',
            label: 'Image URL 1',
            placeholder: 'https://example.com/image1.jpg',
        },

        {
            name: 'images.1',
            label: 'Image URL 2',
            placeholder: 'https://example.com/image2.jpg',
        },
    ] as const;

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {images.map((image) => (
                <FormField
                    key={image.name}
                    control={form.control}
                    name={image.name}
                    rules={
                        image.name === 'thumbnail'
                            ? {
                                  required: 'Thumbnail is required',
                              }
                            : undefined
                    }
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{image.label}</FormLabel>

                            <FormControl>
                                <Input
                                    placeholder={image.placeholder}
                                    {...field}
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

export default ImageFields;
