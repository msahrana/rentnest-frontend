import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type IUser = {
    success: boolean;
    message: string;
    data: {
        profile: {
            id: string;
            name: string;
            email: string;
            activeStatus: string;
            role: string;
            createdAt: string;
            updatedAt: string;
            profile: {
                id: string;
                profilePhoto: string;
                bio: string | null;
                userId: string;
                createdAt: string;
                updatedAt: string;
            };
        };
    };
};

export type NavbarProps = {
    user: IUser;
};

export type ISidebarItem = {
    label: string;
    href: string;
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
    >;
};

export type RentalRequestStatus =
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED'
    | 'COMPLETED'
    | 'CANCELLED';

export interface IRentalProperty {
    id: string;
    title: string;
    rent: number;
    thumbnail?: string;
    location?: string;

    landlord?: {
        id: string;
        name: string;
        email: string;
    };

    category?: {
        id: string;
        name: string;
    };
}

export interface IPayment {
    id: string;
    amount: number;
    status: string;
    method: string;
}

export interface IRentalRequest {
    id: string;

    tenantId: string;

    propertyId: string;

    status: RentalRequestStatus;

    moveInDate: string;

    message?: string;

    property: IRentalProperty;

    payment?: IPayment | null;

    createdAt: string;

    updatedAt: string;
}

export interface IPaymentProperty {
    id: string;
    title: string;
    location: string;
    rent: number;
}

export interface IRentalRequestPayment {
    id: string;

    property: IPaymentProperty;
}

export interface IPayment {
    id: string;

    amount: number;

    transactionId: string;

    RentalRequestStatus: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';

    method: string;

    provider: string;

    paidAt?: string | null;

    rentalRequest: IRentalRequestPayment;
}
