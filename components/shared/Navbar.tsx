'use client';

import Logo from '../../public/assets/logo.png';
import { logout } from '@/service/logout';
import { LayoutDashboard, LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { NavbarProps } from '@/lib/types';
import {
    DropdownMenuTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from '../ui/dropdown-menu';
import Image from 'next/image';

// Navigation items configuration
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Premium', href: '/premium' },
];

// User menu items configuration
const userMenuItems = [
    { label: 'Profile', icon: User, action: 'profile' },
    { label: 'Dashboard', icon: LayoutDashboard, action: 'dashboard' },
    { label: 'Settings', icon: Settings, action: 'settings' },
];

export function Navbar({ user }: NavbarProps) {
    const router = useRouter();

    const handleUserMenuAction = async (action: string) => {
        if (action === 'dashboard') {
            if (user.data.profile.role === 'TENANT') {
                router.push('/tenant-dashboard');
            } else if (user.data.profile.role === 'LANDLORD') {
                router.push('/landlord-dashboard');
            } else if (user.data.profile.role === 'ADMIN') {
                router.push('/admin-dashboard');
            }

            return;
        }

        if (action === 'logout') {
            await logout();
            toast.success('User Logged Out Successfully!');
            router.push('/auth/login');
        }
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-5 shrink-0">
                        {/* <CircleUserRound className="size-6 text-primary" /> */}
                        <Image src={Logo} width={40} height={40} alt="Logo" />
                        <span className="text-2xl font-extrabold text-cyan-600">
                            Rent<span className="text-yellow-500">Nest</span>
                        </span>
                    </Link>

                    {/* Nav Links */}
                    <div className="hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:items-center md:gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-foreground transition-colors text-sm font-medium hover:text-yellow-500"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* User Dropdown */}
                    {user.success ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="cursor-pointer justify-end">
                                    <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center">
                                        <User className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-medium">
                                            {user.data?.profile.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {user.data?.profile.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {userMenuItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <DropdownMenuItem
                                            key={item.action}
                                            onClick={() =>
                                                handleUserMenuAction(
                                                    item.action,
                                                )
                                            }
                                        >
                                            <Icon className="w-4 h-4 mr-2" />
                                            <span>{item.label}</span>
                                        </DropdownMenuItem>
                                    );
                                })}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={async () => {
                                        await handleUserMenuAction('logout');
                                    }}
                                >
                                    <LogOut className="w-4 h-4 mr-2 text-red-500 font-bold" />
                                    <span className="text-red-500 font-bold">
                                        Log out
                                    </span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href={'/auth/login'}>
                            <Button className="cursor-pointer bg-cyan-600 hover:bg-yellow-500">
                                Login
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
