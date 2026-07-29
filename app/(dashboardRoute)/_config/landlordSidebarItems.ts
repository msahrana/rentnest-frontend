import { ISidebarItem } from '@/lib/types';
import { CircleUserRoundIcon, FileText, LayoutDashboard } from 'lucide-react';

export const LANDLORD_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: 'Dashboard',
        href: '/author-dashboard',
        icon: LayoutDashboard,
    },
    {
        label: 'My Properties',
        href: '/author-dashboard/my-properties',
        icon: FileText,
    },
    {
        label: 'Profile',
        href: '/author-dashboard/profile',
        icon: CircleUserRoundIcon,
    },
];
