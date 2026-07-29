import Link from 'next/link';
import { Building2, Home, Search, ShieldCheck, Users } from 'lucide-react';

import Banner from '@/components/banner/Banner';
import FeaturedProperties from '@/components/home/FeaturedProperties';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
    {
        title: 'Apartment',
        icon: Building2,
        description: 'Modern apartments for comfortable living.',
    },
    {
        title: 'House',
        icon: Home,
        description: 'Beautiful houses for families.',
    },
    {
        title: 'Commercial',
        icon: Building2,
        description: 'Office and business spaces.',
    },
];

const features = [
    {
        title: 'Verified Properties',
        icon: ShieldCheck,
        description: 'All properties are reviewed to ensure safe renting.',
    },
    {
        title: 'Trusted Landlords',
        icon: Users,
        description: 'Connect with reliable and verified property owners.',
    },
    {
        title: 'Easy Search',
        icon: Search,
        description: 'Find your perfect home with smart filters.',
    },
];

const stats = [
    {
        value: '500+',
        label: 'Properties',
    },
    {
        value: '250+',
        label: 'Happy Tenants',
    },
    {
        value: '120+',
        label: 'Landlords',
    },
    {
        value: '99%',
        label: 'Satisfaction',
    },
];

export default function HomePage() {
    return (
        <main>
            {/* Hero Section */}

            <section className="container mx-auto my-10 flex flex-col items-center gap-12 px-4 lg:flex-row">
                <div className="w-full space-y-7 lg:w-2/5">
                    <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                        #1 Rental Marketplace
                    </span>

                    <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
                        Find Your
                        <span className="text-cyan-600"> Perfect Home</span>
                        <br />
                        With
                        <span className="text-yellow-500"> RentNest</span>
                    </h1>

                    <p className="text-lg leading-8 text-muted-foreground">
                        Discover apartments, houses, and commercial properties
                        that match your lifestyle and budget. Rent easily with
                        trusted landlords.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            asChild
                            className="bg-cyan-600 hover:bg-yellow-500 hover:text-black"
                        >
                            <Link href="/properties">Explore Properties</Link>
                        </Button>

                        <Button
                            asChild
                            className="bg-yellow-500 text-white hover:bg-cyan-600"
                        >
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                </div>

                <div className="flex w-full justify-center lg:w-3/5">
                    <Banner />
                </div>
            </section>

            {/* Search Section */}

            <section className="container mx-auto px-4">
                <Card className="border-0 bg-cyan-50 shadow-lg">
                    <CardContent className="flex flex-col gap-5 p-8 md:flex-row md:items-center">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold">
                                Find your next home
                            </h2>

                            <p className="mt-2 text-muted-foreground">
                                Search properties by location, category, and
                                price.
                            </p>
                        </div>

                        <Button asChild>
                            <Link href="/properties">
                                <Search className="mr-2 h-4 w-4" />
                                Search Now
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* Featured Properties */}

            <section className="container mx-auto mt-20 px-4">
                <FeaturedProperties />
            </section>

            {/* Categories */}

            <section className="container mx-auto mt-24 px-4">
                <h2 className="text-center text-4xl font-bold">
                    Explore Property Categories
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {categories.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Card
                                key={item.title}
                                className="transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <CardContent className="p-8 text-center">
                                    <Icon className="mx-auto h-12 w-12 text-cyan-600" />

                                    <h3 className="mt-5 text-xl font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Why Choose Us */}

            <section className="container mx-auto mt-24 px-4">
                <h2 className="text-center text-4xl font-bold">
                    Why Choose RentNest?
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {features.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Card key={item.title}>
                                <CardContent className="p-8">
                                    <Icon className="h-10 w-10 text-cyan-600" />

                                    <h3 className="mt-5 text-xl font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Statistics */}

            <section className="container mx-auto mt-24 px-4">
                <div className="grid gap-6 rounded-2xl bg-cyan-600 p-10 text-center text-white sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item) => (
                        <div key={item.label}>
                            <h3 className="text-5xl font-bold">{item.value}</h3>

                            <p className="mt-2 text-cyan-100">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}

            <section className="container mx-auto my-24 px-4">
                <div className="rounded-3xl bg-linear-to-r from-cyan-600 to-sky-500 p-12 text-center text-white">
                    <h2 className="text-4xl font-bold">
                        Ready To Find Your New Home?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-cyan-100">
                        Join thousands of tenants and landlords using RentNest
                        today.
                    </p>

                    <Button
                        asChild
                        className="mt-8 bg-white text-cyan-600 hover:bg-yellow-400 hover:text-black"
                    >
                        <Link href="/auth/register">Get Started</Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
