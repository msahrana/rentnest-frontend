import { ISidebarItem } from '@/lib/types';
import { CircleUserRoundIcon, FileText, LayoutDashboard } from 'lucide-react';

export const LANDLORD_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: 'Dashboard',
        href: '/author-dashboard',
        icon: LayoutDashboard,
    },
    {
        label: 'My Posts',
        href: '/author-dashboard/my-posts',
        icon: FileText,
    },
    {
        label: 'Profile',
        href: '/author-dashboard/profile',
        icon: CircleUserRoundIcon,
    },
];
