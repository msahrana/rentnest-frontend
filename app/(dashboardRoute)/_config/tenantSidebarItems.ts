import { ISidebarItem } from '@/lib/types';
import { CircleUserRoundIcon, FileText, LayoutDashboard } from 'lucide-react';

export const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        label: 'My Requests',
        href: '/dashboard/my-requests',
        icon: FileText,
    },
    {
        label: 'Profile',
        href: '/dashboard/profile',
        icon: CircleUserRoundIcon,
    },
];
