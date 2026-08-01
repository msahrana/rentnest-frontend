/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Building2,
    DollarSign,
    Home,
    PlusCircle,
    Users,
    FileText,
    CheckCircle,
} from 'lucide-react';

import StatCard from '../_components/stat-card';
import DashboardHeader from '../_components/dashboard-header';
import AddPropertyModal from './landlord/_components/AddPropertyModal';
import { getLandlordProperties, getLandlordRequests } from './landlord/actions';
import PropertyCard from './landlord/_components/PropertyCard';

const LandlordDashboardPage = async () => {
    const propertyResponse = await getLandlordProperties();

    const requestResponse = await getLandlordRequests();

    const properties = propertyResponse.data ?? [];

    const requests = requestResponse.data ?? [];

    const rentedProperties = properties.filter(
        (property: any) => property.status === 'RENTED',
    ).length;

    return (
        <div className="space-y-6">
            {/* Header */}

            <DashboardHeader
                title={
                    <>
                        Welcome to{' '}
                        <span className="text-yellow-500">Landlord</span>{' '}
                        Dashboard
                    </>
                }
                description="
                    Manage your properties, rental requests and earnings
                "
            />

            {/* Statistics */}

            <div
                className="
                grid
                gap-4
                md:grid-cols-2
                lg:grid-cols-4
            "
            >
                <StatCard
                    title="Total Properties"
                    value={String(properties.length)}
                    icon={Building2}
                    description="Listed properties"
                />

                <StatCard
                    title="Active Rentals"
                    value={String(rentedProperties)}
                    icon={Home}
                    description="Currently rented"
                />

                <StatCard
                    title="Rental Requests"
                    value={String(requests.length)}
                    icon={Users}
                    description="Total requests"
                />

                <StatCard
                    title="Total Earnings"
                    value="$0"
                    icon={DollarSign}
                    description="Monthly income"
                />
            </div>

            {/* Properties */}

            <div className="rounded-xl border p-6">
                <div
                    className="
                    flex
                    items-center
                    justify-between
                "
                >
                    <h2 className="text-xl font-semibold">My Properties</h2>

                    <AddPropertyModal />
                </div>

                <div
                    className="mt-5 space-y-4 grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6"
                >
                    {properties.length > 0 ? (
                        properties.map((property: any) => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
                        ))
                    ) : (
                        <p
                            className="
                                text-sm
                                text-muted-foreground
                            "
                        >
                            No properties found
                        </p>
                    )}
                </div>
            </div>

            {/* Rental Requests */}

            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">
                    Recent Rental Requests
                </h2>

                <div className="mt-5 space-y-4">
                    {requests.length > 0 ? (
                        requests.map((request: any) => (
                            <div
                                key={request.id}
                                className="
                                        flex
                                        items-center
                                        justify-between
                                        rounded-lg
                                        border
                                        p-4
                                    "
                            >
                                <div>
                                    <h3 className="font-medium">
                                        {request.tenant?.profile?.fullName ??
                                            'Unknown Tenant'}
                                    </h3>

                                    <p
                                        className="
                                            text-sm
                                            text-muted-foreground
                                        "
                                    >
                                        {request.property?.title ??
                                            'Unknown Property'}
                                    </p>
                                </div>

                                <span
                                    className={`

                                            rounded-full
                                            px-3
                                            py-1
                                            text-xs
                                            font-medium


                                            ${
                                                request.status === 'APPROVED'
                                                    ? 'bg-green-100 text-green-700'
                                                    : request.status ===
                                                        'REJECTED'
                                                      ? 'bg-red-100 text-red-700'
                                                      : 'bg-yellow-100 text-yellow-700'
                                            }

                                        `}
                                >
                                    {request.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p
                            className="
                                text-sm
                                text-muted-foreground
                            "
                        >
                            No rental requests found
                        </p>
                    )}
                </div>
            </div>

            {/* Quick Actions */}

            <div className="rounded-xl border p-6">
                <h2 className="text-xl font-semibold">Quick Actions</h2>

                <div
                    className="
                    mt-4
                    grid
                    gap-4
                    md:grid-cols-3
                "
                >
                    <div
                        className="
                        cursor-pointer
                        rounded-lg
                        border
                        p-5
                        transition
                        hover:bg-muted
                    "
                    >
                        <PlusCircle className="mb-3 text-cyan-600" size={24} />

                        <h3 className="font-medium">Add New Property</h3>

                        <p
                            className="
                            text-sm
                            text-muted-foreground
                        "
                        >
                            Create a new rental listing
                        </p>
                    </div>

                    <div
                        className="
                        cursor-pointer
                        rounded-lg
                        border
                        p-5
                        transition
                        hover:bg-muted
                    "
                    >
                        <FileText className="mb-3 text-cyan-600" size={24} />

                        <h3 className="font-medium">Manage Properties</h3>

                        <p
                            className="
                            text-sm
                            text-muted-foreground
                        "
                        >
                            Edit or remove listings
                        </p>
                    </div>

                    <div
                        className="
                        cursor-pointer
                        rounded-lg
                        border
                        p-5
                        transition
                        hover:bg-muted
                    "
                    >
                        <CheckCircle className="mb-3 text-cyan-600" size={24} />

                        <h3 className="font-medium">Manage Requests</h3>

                        <p
                            className="
                            text-sm
                            text-muted-foreground
                        "
                        >
                            Approve or reject tenants
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandlordDashboardPage;
