import Link from 'next/link';
import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
    {
        title: 'Email Address',
        value: 'support@rentnest.com',
        description: 'Send us your questions anytime.',
        icon: Mail,
    },
    {
        title: 'Phone Number',
        value: '+880 1722-445288',
        description: 'Available Sunday - Thursday',
        icon: Phone,
    },
    {
        title: 'Office Address',
        value: 'Dhaka, Bangladesh',
        description: 'Visit our support center.',
        icon: MapPin,
    },
    {
        title: 'Working Hours',
        value: '9:00 AM - 6:00 PM',
        description: 'Sunday - Thursday',
        icon: Clock3,
    },
];

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <section className="mx-auto max-w-3xl text-center">
                <span className="inline-flex rounded-full bg-cyan-100 px-4 py-1 text-sm font-semibold text-cyan-700">
                    Contact RentNest
                </span>

                <h1 className="mt-6 text-4xl font-bold md:text-5xl">
                    We`d Love to Hear From You
                </h1>

                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                    Whether you`re looking for your next home, need help with a
                    rental, or have questions about our platform, our team is
                    ready to assist you.
                </p>
            </section>

            {/* Contact Cards */}
            <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Card
                            key={item.title}
                            className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <CardContent className="p-8 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100">
                                    <Icon className="h-7 w-7 text-cyan-600" />
                                </div>

                                <h3 className="mt-5 text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-2 font-medium text-cyan-600">
                                    {item.value}
                                </p>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </section>

            {/* Contact Form */}
            <section className="mt-20 grid gap-10 lg:grid-cols-2">
                {/* Left Side */}
                <div className="rounded-2xl bg-cyan-600 p-10 text-white">
                    <MessageCircle className="h-14 w-14" />

                    <h2 className="mt-6 text-3xl font-bold">
                        Let`s Start a Conversation
                    </h2>

                    <p className="mt-5 leading-8 text-cyan-100">
                        Have questions about renting, listing your property, or
                        using RentNest? Fill out the form and our support team
                        will get back to you as soon as possible.
                    </p>

                    <div className="mt-10 space-y-6">
                        <div>
                            <h4 className="font-semibold">Customer Support</h4>
                            <p className="text-cyan-100">
                                support@rentnest.com
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Call Us</h4>
                            <p className="text-cyan-100">+880 1700-000000</p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Office</h4>
                            <p className="text-cyan-100">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <Card>
                    <CardContent className="p-8">
                        <h2 className="text-3xl font-bold">
                            Send Us a Message
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            We`ll respond within 24 hours.
                        </p>

                        <form className="mt-8 space-y-6">
                            <div>
                                <Label htmlFor="name">Full Name</Label>

                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Label htmlFor="email">Email Address</Label>

                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Label htmlFor="subject">Subject</Label>

                                <Input
                                    id="subject"
                                    placeholder="How can we help you?"
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <Label htmlFor="message">Message</Label>

                                <Textarea
                                    id="message"
                                    rows={6}
                                    className="mt-2"
                                    placeholder="Write your message here..."
                                />
                            </div>

                            <Button className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </section>

            {/* CTA */}
            <section className="mt-20 rounded-2xl bg-linear-to-r from-cyan-600 to-sky-500 px-8 py-16 text-center text-white">
                <h2 className="text-4xl font-bold">
                    Looking for Your Next Home?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-cyan-100">
                    Explore hundreds of verified rental properties and connect
                    with trusted landlords across Bangladesh.
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
                        <Link href="/auth/register">Join RentNest</Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
