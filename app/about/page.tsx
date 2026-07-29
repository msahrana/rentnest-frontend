import Image from 'next/image';
import Link from 'next/link';
import {
    Building2,
    CheckCircle2,
    Handshake,
    House,
    ShieldCheck,
    Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
    {
        title: 'Verified Properties',
        description:
            'Browse trusted rental properties verified by our platform.',
        icon: ShieldCheck,
    },
    {
        title: 'Trusted Landlords',
        description: 'Connect directly with genuine property owners.',
        icon: Users,
    },
    {
        title: 'Easy Booking',
        description: 'Submit rental requests quickly and securely.',
        icon: House,
    },
    {
        title: 'Secure Payments',
        description: 'Pay rent safely through our integrated payment system.',
        icon: Handshake,
    },
];

const stats = [
    {
        number: '500+',
        label: 'Properties',
    },
    {
        number: '250+',
        label: 'Happy Tenants',
    },
    {
        number: '120+',
        label: 'Trusted Landlords',
    },
    {
        number: '99%',
        label: 'Customer Satisfaction',
    },
];

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            {/* Hero */}
            <section className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                    <span className="inline-flex rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
                        About RentNest
                    </span>

                    <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                        Find Your Perfect Home With{' '}
                        <span className="text-cyan-600">RentNest</span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        RentNest is a modern rental property marketplace that
                        connects tenants with trusted landlords. Our mission is
                        to make finding, requesting, and renting homes simple,
                        secure, and hassle-free.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button asChild>
                            <Link href="/properties">Browse Properties</Link>
                        </Button>

                        <Button variant="outline" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
                        alt="Modern Apartment"
                        width={700}
                        height={500}
                        unoptimized
                        className="rounded-2xl object-cover"
                    />
                </div>
            </section>

            {/* Mission */}
            <section className="mt-24">
                <Card className="border-0 bg-cyan-50">
                    <CardContent className="p-10">
                        <div className="flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-cyan-600" />
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                        </div>

                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Our mission is to simplify the rental experience by
                            providing a secure platform where tenants can easily
                            discover quality homes and landlords can efficiently
                            manage their rental properties. We believe renting
                            should be transparent, convenient, and accessible
                            for everyone.
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Why Choose Us */}
            <section className="mt-24">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Why Choose{' '}
                        <span className="text-cyan-600">RentNest?</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        We provide everything you need for a smooth and secure
                        rental experience.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <Card
                                key={feature.title}
                                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <CardContent className="p-8 text-center">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                                        <Icon className="h-8 w-8 text-cyan-600" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Statistics */}
            <section className="mt-24 rounded-2xl bg-cyan-600 px-8 py-14 text-white">
                <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <h3 className="text-5xl font-bold">
                                {stat.number}
                            </h3>
                            <p className="mt-2 text-cyan-100">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="mt-24">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Our Core Values</h2>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {[
                        'Transparent rental process',
                        'Verified landlords and properties',
                        'Secure online payments',
                        'Customer-first support',
                        'Modern and responsive platform',
                        'Continuous innovation',
                    ].map((item) => (
                        <Card key={item}>
                            <CardContent className="flex items-center gap-4 p-6">
                                <CheckCircle2 className="h-6 w-6 text-cyan-600" />
                                <span className="font-medium">{item}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mt-24 rounded-2xl bg-linear-to-r from-cyan-600 to-sky-500 px-8 py-16 text-center text-white">
                <h2 className="text-4xl font-bold">
                    Ready to Find Your Next Home?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-cyan-100">
                    Explore hundreds of verified rental properties and connect
                    with trusted landlords today.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <Button
                        asChild
                        className="bg-white text-cyan-600 hover:bg-yellow-400 hover:text-black"
                    >
                        <Link href="/properties">Browse Properties</Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-cyan-600"
                    >
                        <Link href="/auth/register">Get Started</Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
