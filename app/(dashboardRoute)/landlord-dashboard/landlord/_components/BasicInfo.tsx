/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Props {
    form: any;
}

const BasicInfo = ({ form }: Props) => {
    return (
        <div className="space-y-5">
            {/* Title */}

            <FormField
                control={form.control}
                name="title"
                rules={{
                    required: 'Title is required',
                    minLength: {
                        value: 3,
                        message: 'Title must be at least 3 characters',
                    },
                }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Property Title</FormLabel>

                        <FormControl>
                            <Input placeholder="Luxury Apartment" {...field} />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Description */}

            <FormField
                control={form.control}
                name="description"
                rules={{
                    required: 'Description is required',

                    minLength: {
                        value: 10,
                        message: 'Description minimum 10 characters',
                    },
                }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>

                        <FormControl>
                            <Textarea
                                placeholder="Write property description"
                                className="min-h-32"
                                {...field}
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default BasicInfo;
