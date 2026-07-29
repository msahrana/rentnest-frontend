'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import {
    ArrowUp,
    CheckCircle2,
    Clock3,
    Mail,
    MapPin,
    Phone,
    Send,
} from 'lucide-react';

import {
    FacebookLogoIcon,
    GithubLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    TwitterLogoIcon,
} from '@phosphor-icons/react';

import { toast } from 'sonner';
import Logo from '../../public/assets/logo.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const exploreLinks = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Premium', href: '/premium' },
];

const propertyTypes = ['Apartment', 'House', 'Villa', 'Office', 'Commercial'];

const supportLinks = [
    'Help Center',
    'FAQ',
    'Privacy Policy',
    'Terms & Conditions',
    'Cookie Policy',
];

const trustItems = [
    'Verified Properties',
    'Secure Payments',
    'Trusted Landlords',
    '24/7 Support',
];

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (!email) {
            toast.error('Please enter your email!');
            return;
        }

        toast.success('Thank you for subscribing!');

        setEmail('');
    };

    return (
        <footer className="mt-24">
            {/* CTA */}

            <section className="container mx-auto px-4">
                <div className="rounded-3xl bg-linear-to-r from-cyan-600 to-sky-500 px-6 py-16 text-center text-white md:px-20">
                    <h2 className="text-4xl font-bold md:text-5xl">
                        Find Your Dream Home Today
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-cyan-100">
                        Explore hundreds of verified rental properties and
                        connect with trusted landlords.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
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
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Main Footer */}

            <div className="mt-20 bg-slate-950 text-slate-300">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
                        {/* Brand */}

                        <div className="lg:col-span-1">
                            <Link href="/" className="flex items-center gap-3">
                                <Image
                                    src={Logo}
                                    alt="RentNest"
                                    width={45}
                                    height={45}
                                />

                                <h2 className="text-3xl font-bold">
                                    <span className="text-cyan-500">Rent</span>

                                    <span className="text-yellow-400">
                                        Nest
                                    </span>
                                </h2>
                            </Link>

                            <p className="mt-5 text-sm leading-7 text-slate-400">
                                RentNest is a modern rental marketplace
                                connecting tenants and landlords with safe and
                                verified properties.
                            </p>

                            <div className="mt-6 flex gap-3">
                                {[
                                    {
                                        icon: FacebookLogoIcon,
                                    },
                                    {
                                        icon: TwitterLogoIcon,
                                    },
                                    {
                                        icon: InstagramLogoIcon,
                                    },
                                    {
                                        icon: LinkedinLogoIcon,
                                    },
                                    {
                                        icon: GithubLogoIcon,
                                    },
                                ].map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={index}
                                            href="#"
                                            className="rounded-full bg-slate-800 p-2 transition hover:scale-110 hover:bg-cyan-600 hover:text-white"
                                        >
                                            <Icon size={18} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Explore */}

                        <div>
                            <h3 className="mb-6 text-lg font-bold text-white">
                                Explore
                            </h3>

                            <ul className="space-y-3">
                                {exploreLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="transition hover:translate-x-1 hover:text-cyan-400"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Property */}

                        <div>
                            <h3 className="mb-6 text-lg font-bold text-white">
                                Properties
                            </h3>

                            <ul className="space-y-3">
                                {propertyTypes.map((item) => (
                                    <li
                                        key={item}
                                        className="hover:text-yellow-400"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}

                        <div>
                            <h3 className="mb-6 text-lg font-bold text-white">
                                Support
                            </h3>

                            <ul className="space-y-3">
                                {supportLinks.map((item) => (
                                    <li
                                        key={item}
                                        className="hover:text-cyan-400"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}

                        <div>
                            <h3 className="mb-6 text-lg font-bold text-white">
                                Contact
                            </h3>

                            <div className="space-y-5 text-sm">
                                <p className="flex gap-3">
                                    <MapPin className="text-cyan-500" />
                                    Dhaka, Bangladesh
                                </p>

                                <p className="flex gap-3">
                                    <Phone className="text-cyan-500" />
                                    +880 1700-000000
                                </p>

                                <p className="flex gap-3">
                                    <Mail className="text-cyan-500" />
                                    support@rentnest.com
                                </p>

                                <p className="flex gap-3">
                                    <Clock3 className="text-cyan-500" />
                                    Sun-Thu 9AM-6PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}

                    <div className="mt-16 rounded-2xl border border-slate-800 p-8">
                        <h3 className="text-2xl font-bold text-white">
                            Subscribe Newsletter
                        </h3>

                        <p className="mt-2 text-slate-400">
                            Get new property updates directly in your inbox.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="bg-slate-900 border-slate-700"
                            />

                            <Button onClick={handleSubscribe}>
                                Subscribe
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Trust */}

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {trustItems.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 rounded-xl bg-slate-900 p-4"
                            >
                                <CheckCircle2 className="text-cyan-500" />

                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom */}

                    <div className="mt-12 flex flex-col gap-5 border-t border-slate-800 pt-8 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm text-slate-400">
                            © {new Date().getFullYear()}{' '}
                            <span className="font-bold text-cyan-500">
                                Rent
                                <span className="text-yellow-400">Nest</span>
                            </span>
                            . All rights reserved.
                        </p>

                        <div className="flex gap-5 text-sm">
                            <Link href="#">Privacy</Link>

                            <Link href="#">Terms</Link>

                            <Link href="#">Cookies</Link>
                        </div>

                        <button
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                })
                            }
                            className="rounded-full bg-cyan-600 p-3 text-white transition hover:bg-yellow-400 hover:text-black"
                        >
                            <ArrowUp size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
