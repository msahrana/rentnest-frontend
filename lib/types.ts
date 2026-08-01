import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

/* ==========================
   Navbar
========================== */

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

/* ==========================
   Enums
========================== */

export type RentalRequestStatus =
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED'
    | 'COMPLETED'
    | 'CANCELLED';

export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';

/* ==========================
   Property
========================== */

export interface Category {
    id: string;
    name: string;
    description: string;
}

export interface Landlord {
    id: string;
    name: string;
    email: string;
    role?: string;
    status?: string;
}

export interface Property {
    id: string;
    title: string;
    description: string;
    location: string;
    address: string;
    rent: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    propertyType: string;

    amenities: string[];

    thumbnail: string;

    images: string[];

    status: string;

    landlordId: string;

    categoryId: string;

    createdAt: string;

    updatedAt: string;

    landlord: Landlord;

    category: Category;
}

export interface PropertyResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: Property[];
}

/* ==========================
   Rental Request
========================== */

export interface IRentalProperty {
    id: string;
    title: string;
    rent: number;
    thumbnail?: string;
    location?: string;

    landlord?: Landlord;

    category?: Category;
}

export interface IRentalRequestPayment {
    id: string;

    property: {
        id: string;
        title: string;
        location: string;
        rent: number;
    };
}

export interface IPayment {
    id: string;

    amount: number;

    transactionId: string;

    status: PaymentStatus;

    method: string;

    provider: string;

    paidAt?: string | null;

    rentalRequest: IRentalRequestPayment;
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

export interface RentalRequest {
    id: string;

    tenantId: string;

    propertyId: string;

    moveInDate: string;

    message: string;

    status: RentalRequestStatus;

    createdAt: string;

    updatedAt: string;

    property: Property;

    payment: {
        id: string;
        rentalRequestId: string;
        userId: string;
        transactionId: string;
        amount: number;
        method: string;
        provider: string;
        status: PaymentStatus;
        paidAt: string;
        stripeCustomerId: string;
        currentPeriodEnd: string;
        createdAt: string;
        updatedAt: string;
    } | null;
}

export interface RentalResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: RentalRequest[];
}

/* ==========================
   Property Form
========================== */

export interface PropertyFormInput {
    title: string;

    description: string;

    location: string;

    address: string;

    rent: number;

    bedrooms: number;

    bathrooms: number;

    area: number;

    propertyType: string;

    categoryId: string;

    thumbnail: string;

    images: string[];

    amenities: string[];
}
