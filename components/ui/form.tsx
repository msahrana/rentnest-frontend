import * as React from 'react';

import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
    FormProvider,
    useFormContext,
} from 'react-hook-form';

import { Label } from '@/components/ui/label';

import { cn } from '@/lib/utils';

const Form = FormProvider;

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => {
    return <Controller {...props} />;
};

const FormItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-2', className)} {...props} />
));

FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<
    React.ElementRef<typeof Label>,
    React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
    <Label ref={ref} className={className} {...props} />
));

FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => <div ref={ref} {...props} />);

FormControl.displayName = 'FormControl';

const FormMessage = () => {
    const {
        formState: { errors },
    } = useFormContext();

    return (
        <p className="text-sm font-medium text-destructive">
            {errors && (Object.values(errors)[0]?.message as string)}
        </p>
    );
};

export { Form, FormField, FormItem, FormLabel, FormControl, FormMessage };
