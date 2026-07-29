import { ISidebarItem } from '@/lib/types';
import { CircleUserRoundIcon, FileText, LayoutDashboard } from 'lucide-react';

export const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        label: 'My Posts',
        href: '/dashboard/my-posts',
        icon: FileText,
    },
    {
        label: 'Profile',
        href: '/dashboard/profile',
        icon: CircleUserRoundIcon,
    },
];
