/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import { Checkbox } from '@/components/ui/checkbox';

interface Props {
    form: any;
}

const amenitiesList = [
    'WiFi',

    'Parking',

    'Lift',

    'Generator',

    'Security',

    'CCTV',
];

const AmenitiesField = ({ form }: Props) => {
    return (
        <FormField
            control={form.control}
            name="amenities"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Amenities</FormLabel>

                    <FormControl>
                        <div
                            className="
                                grid
                                grid-cols-2
                                md:grid-cols-3
                                gap-4
                                mt-3
                            "
                        >
                            {amenitiesList.map((item) => (
                                <div
                                    key={item}
                                    className="
                                            flex
                                            items-center
                                            gap-2
                                        "
                                >
                                    <Checkbox
                                        checked={field.value?.includes(item)}
                                        onCheckedChange={(checked) => {
                                            const current = field.value ?? [];

                                            if (checked) {
                                                field.onChange([
                                                    ...current,

                                                    item,
                                                ]);
                                            } else {
                                                field.onChange(
                                                    current.filter(
                                                        (value: string) =>
                                                            value !== item,
                                                    ),
                                                );
                                            }
                                        }}
                                    />

                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default AmenitiesField;
