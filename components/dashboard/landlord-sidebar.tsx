'use client';

import Link from 'next/link';
import {
    Building2,
    ClipboardList,
    LayoutDashboard,
    PlusCircle,
    Settings,
    Wallet,
    Users,
} from 'lucide-react';

import { usePathname } from 'next/navigation';

const sidebarItems = [
    {
        title: 'Dashboard',
        href: '/landlord-dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'My Properties',
        href: '/landlord-dashboard/properties',
        icon: Building2,
    },
    {
        title: 'Add Property',
        href: '/landlord-dashboard/properties/new',
        icon: PlusCircle,
    },
    {
        title: 'Rental Requests',
        href: '/landlord-dashboard/requests',
        icon: ClipboardList,
    },
    {
        title: 'Tenants',
        href: '/landlord-dashboard/tenants',
        icon: Users,
    },
    {
        title: 'Earnings',
        href: '/landlord-dashboard/earnings',
        icon: Wallet,
    },
    {
        title: 'Settings',
        href: '/landlord-dashboard/settings',
        icon: Settings,
    },
];

const LandlordSidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="hidden h-screen w-64 border-r bg-background md:block">
            <div className="flex h-full flex-col">
                {/* Logo */}

                <div className="border-b p-6">
                    <Link href="/" className="text-2xl font-bold">
                        <span className="text-cyan-600">Rent</span>

                        <span className="text-yellow-500">Nest</span>
                    </Link>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Landlord Panel
                    </p>
                </div>

                {/* Menu */}

                <nav className="flex-1 space-y-2 p-4">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;

                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition
                                    ${
                                        active
                                            ? 'bg-cyan-600 text-white'
                                            : 'hover:bg-muted'
                                    }
                                `}
                            >
                                <Icon size={20} />

                                {item.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
};

export default LandlordSidebar;
