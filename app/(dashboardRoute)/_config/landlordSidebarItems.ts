import { ISidebarItem } from '@/lib/types';
import { CircleUserRoundIcon, FileText, LayoutDashboard } from 'lucide-react';

export const LANDLORD_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label: 'Dashboard',
        href: '/landlord-dashboard',
        icon: LayoutDashboard,
    },
    {
        label: 'All Properties',
        href: '/landlord-dashboard/landlord',
        icon: FileText,
    },
    // {
    //     label: 'My Properties',
    //     href: '/landlord-dashboard/properties/new',
    //     icon: FileText,
    // },
    {
        label: 'Profile',
        href: '/landlord-dashboard/profile',
        icon: CircleUserRoundIcon,
    },
];
