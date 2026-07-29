'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
    FacebookLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
    TwitterLogoIcon,
} from '@phosphor-icons/react';

const Footer = () => {
    return (
        <footer className="mt-20 border-t bg-muted/30">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">
                            <span className="text-cyan-600">Rent</span>
                            <span className="text-yellow-500">Nest</span>
                        </h2>

                        <p className="text-sm leading-6 text-muted-foreground">
                            Discover your perfect home with RentNest. Browse
                            thousands of verified rental properties across the
                            country with ease.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-cyan-600"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/properties"
                                    className="transition hover:text-cyan-600"
                                >
                                    Properties
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="transition hover:text-cyan-600"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="transition hover:text-cyan-600"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Property Types
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>🏠 Apartment</li>
                            <li>🏡 House</li>
                            <li>🏢 Office</li>
                            <li>🏬 Commercial</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-cyan-600" />
                                <span>Dhaka, Bangladesh</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-cyan-600" />
                                <span>+880 1700-000000</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-cyan-600" />
                                <span>support@rentnest.com</span>
                            </div>

                            <div className="flex gap-4 pt-2">
                                <Link href="#">
                                    <FacebookLogoIcon className="h-5 w-5 transition hover:text-blue-600" />
                                </Link>

                                <Link href="#">
                                    <TwitterLogoIcon className="h-5 w-5 transition hover:text-sky-500" />
                                </Link>

                                <Link href="#">
                                    <InstagramLogoIcon className="h-5 w-5 transition hover:text-pink-500" />
                                </Link>

                                <Link href="#">
                                    <LinkedinLogoIcon className="h-5 w-5 transition hover:text-blue-700" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()}{' '}
                    <span className="font-semibold text-cyan-600">
                        Rent<span className="text-yellow-500">Nest.</span>{' '}
                    </span>
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
