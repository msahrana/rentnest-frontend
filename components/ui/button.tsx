import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default:
                    'bg-cyan-600 text-white shadow-md hover:bg-yellow-500 hover:text-black hover:shadow-lg',

                outline:
                    'border border-cyan-600 bg-transparent text-cyan-600 hover:bg-cyan-600 hover:text-white',

                secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',

                ghost: 'hover:bg-cyan-100 hover:text-cyan-700',

                destructive: 'bg-red-600 text-white hover:bg-red-700',

                link: 'text-cyan-600 underline-offset-4 hover:underline',
            },

            size: {
                default: 'h-10 px-4 py-2',

                xs: 'h-7 rounded-md px-2 text-xs',

                sm: 'h-9 rounded-md px-3 text-sm',

                lg: 'h-11 rounded-md px-8 text-base',

                icon: 'h-10 w-10',

                'icon-xs': 'h-7 w-7 rounded-md',

                'icon-sm': 'h-9 w-9 rounded-md',

                'icon-lg': 'h-11 w-11 rounded-md',
            },
        },

        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';

        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            />
        );
    },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
