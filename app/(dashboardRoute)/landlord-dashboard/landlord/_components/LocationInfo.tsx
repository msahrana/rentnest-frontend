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

const LocationInfo = ({ form }: Props) => {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {/* Location */}

            <FormField
                control={form.control}
                name="location"
                rules={{
                    required: 'Location is required',
                }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Location</FormLabel>

                        <FormControl>
                            <Input placeholder="Rajshahi" {...field} />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Address */}

            <FormField
                control={form.control}
                name="address"
                rules={{
                    required: 'Address is required',
                }}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Address</FormLabel>

                        <FormControl>
                            <Input placeholder="Full address" {...field} />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default LocationInfo;
