import {
    BadgeCheck,
    CheckCircle2,
    Crown,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
    'Unlimited property listings',
    'Priority placement in search results',
    'Verified Premium Landlord badge',
    'Advanced property analytics',
    'Featured property promotion',
    'Priority customer support',
];

const Premium = () => {
    return (
        <section className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 py-16">
            <div className="container mx-auto px-4">
                {/* Hero */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-700">
                        <Crown className="h-5 w-5" />
                        <span className="font-medium">RentNest Premium</span>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                        Unlock the Best Rental Experience
                    </h1>

                    <p className="mt-6 text-lg text-slate-600">
                        Upgrade to Premium and enjoy exclusive features designed
                        for landlords and tenants who want a faster, smarter,
                        and more professional rental experience.
                    </p>
                </div>

                {/* Pricing */}
                <div className="mx-auto mt-16 max-w-5xl grid gap-8 lg:grid-cols-2">
                    <Card className="border-2 border-amber-400 shadow-xl">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-3">
                                <Sparkles className="h-8 w-8 text-amber-500" />
                                <h2 className="text-2xl font-bold">
                                    Premium Membership
                                </h2>
                            </div>

                            <div className="mt-8">
                                <span className="text-5xl font-bold">
                                    $9.99
                                </span>
                                <span className="text-muted-foreground">
                                    {' '}
                                    / month
                                </span>
                            </div>

                            <p className="mt-4 text-muted-foreground">
                                Everything you need to maximize your property
                                visibility and rental success.
                            </p>

                            <Button className="mt-8 w-full h-11 text-base">
                                Upgrade Now
                            </Button>

                            <p className="mt-3 text-center text-sm text-muted-foreground">
                                Cancel anytime. No hidden fees.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Benefits */}
                    <Card className="shadow-lg">
                        <CardContent className="p-8">
                            <h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
                                <BadgeCheck className="text-green-600" />
                                Premium Benefits
                            </h3>

                            <div className="space-y-5">
                                {benefits.map((benefit) => (
                                    <div
                                        key={benefit}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 rounded-xl bg-slate-50 p-5">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="h-7 w-7 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">
                                            Secure & Trusted
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Your payments are processed securely
                                            with industry-standard encryption.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Bottom CTA */}
                <div className="mx-auto mt-20 max-w-4xl rounded-3xl bg-slate-900 p-10 text-center text-white">
                    <Crown className="mx-auto mb-5 h-12 w-12 text-amber-400" />

                    <h2 className="text-3xl font-bold">Ready to Go Premium?</h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Join hundreds of landlords and tenants using RentNest
                        Premium to discover better opportunities, gain more
                        visibility, and enjoy an enhanced rental experience.
                    </p>

                    <Button
                        size="lg"
                        className="mt-8 bg-amber-500 hover:bg-amber-600"
                    >
                        Get Premium
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Premium;
