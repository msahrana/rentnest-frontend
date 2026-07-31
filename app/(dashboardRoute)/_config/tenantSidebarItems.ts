import { ISidebarItem } from '@/lib/types';
import { CircleUserRoundIcon, FileText, LayoutDashboard } from 'lucide-react';

export const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: 'Dashboard',
        href: '/tenant-dashboard',
        icon: LayoutDashboard,
    },
    {
        label: 'My Requests',
        href: '/tenant-dashboard/my-requests',
        icon: FileText,
    },
    {
        label: 'Profile',
        href: '/tenant-dashboard/profile',
        icon: CircleUserRoundIcon,
    },
];
