import { Check, Crown, Sparkles, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const plans = [
    {
        name: 'Free',
        price: '$0',
        description: 'Perfect for users exploring RentNest.',
        icon: Zap,
        features: [
            'Browse unlimited properties',
            'Send rental requests',
            'Basic profile management',
            'Standard support',
        ],
        button: 'Get Started',
    },

    {
        name: 'Premium',
        price: '$9.99',
        description: 'Best choice for active landlords.',
        icon: Crown,
        popular: true,
        features: [
            'Unlimited property listings',
            'Featured property placement',
            'Premium landlord badge',
            'Advanced analytics',
            'Priority support',
            'More tenant visibility',
        ],
        button: 'Upgrade Premium',
    },

    {
        name: 'Business',
        price: '$29.99',
        description: 'For professional property managers.',
        icon: Sparkles,
        features: [
            'Everything in Premium',
            'Multiple landlord accounts',
            'Advanced reporting',
            'Dedicated support',
            'Marketing promotion',
        ],
        button: 'Contact Sales',
    },
];

const Pricing = () => {
    return (
        <section className="min-h-screen bg-linear-to-b from-slate-50 to-white py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-700">
                        <Crown className="h-5 w-5" />
                        RentNest Pricing
                    </div>

                    <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">
                        Choose The Perfect Plan
                    </h1>

                    <p className="mt-5 text-lg text-slate-600">
                        Select a plan that fits your rental journey. Whether you
                        are a tenant or landlord, RentNest has the right
                        solution for you.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => {
                        const Icon = plan.icon;

                        return (
                            <Card
                                key={plan.name}
                                className={`relative flex flex-col ${
                                    plan.popular
                                        ? 'border-2 border-amber-400 shadow-2xl scale-105'
                                        : 'shadow-lg'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-5 py-1 text-sm font-semibold text-white">
                                        Most Popular
                                    </div>
                                )}

                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-lg bg-slate-100 p-3">
                                            <Icon className="h-6 w-6 text-amber-500" />
                                        </div>

                                        <CardTitle className="text-2xl">
                                            {plan.name}
                                        </CardTitle>
                                    </div>

                                    <div className="mt-6">
                                        <span className="text-5xl font-bold">
                                            {plan.price}
                                        </span>

                                        {plan.price !== '$0' && (
                                            <span className="text-muted-foreground">
                                                /month
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-3 text-muted-foreground">
                                        {plan.description}
                                    </p>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-3"
                                            >
                                                <Check className="mt-1 h-5 w-5 text-green-600" />

                                                <span className="text-slate-700">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        className={`w-full ${
                                            plan.popular
                                                ? 'bg-amber-500 hover:bg-amber-600'
                                                : ''
                                        }`}
                                    >
                                        {plan.button}
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 rounded-3xl bg-slate-900 px-6 py-12 text-center text-white">
                    <h2 className="text-3xl font-bold">
                        Start Your Better Rental Journey Today
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Join RentNest and experience smarter property discovery,
                        easier management, and secure rental transactions.
                    </p>

                    <Button
                        size="lg"
                        className="mt-8 bg-white text-slate-900 hover:bg-slate-200"
                    >
                        Create Account
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
