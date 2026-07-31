import { CheckCircle2, Clock3, FileText, XCircle } from 'lucide-react';

import RentalRequestTable from './_components/RentalRequestTable';
// import CreateRentalDialog from './_components/CreateRentalDialog';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { getMyRentalRequests } from '@/service/rental/getMyRentalRequests';
import { getAllProperties } from '@/service/property/getAllProperties';
import CreateRentalDialog from './_components/CreateRentalDialog';

const MyRequestsPage = async () => {
    const result = await getMyRentalRequests();

    const propertyResult = await getAllProperties();

    const requests = result.data ?? [];

    const properties = propertyResult.data ?? [];

    const totalRequests = requests.length;

    const pendingRequests = requests.filter(
        (request) => request.status === 'PENDING',
    ).length;

    const approvedRequests = requests.filter(
        (request) => request.status === 'APPROVED',
    ).length;

    const rejectedRequests = requests.filter(
        (request) => request.status === 'REJECTED',
    ).length;

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">My Rental Requests</h1>

                    <p className="text-muted-foreground">
                        Track all of your rental requests and payments.
                    </p>
                </div>

                <CreateRentalDialog properties={properties} />
            </div>

            {/* Statistics */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Requests
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalRequests}
                            </h2>
                        </div>

                        <FileText className="h-10 w-10 text-primary" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Pending
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-yellow-600">
                                {pendingRequests}
                            </h2>
                        </div>

                        <Clock3 className="h-10 w-10 text-yellow-600" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Approved
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-green-600">
                                {approvedRequests}
                            </h2>
                        </div>

                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Rejected
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-red-600">
                                {rejectedRequests}
                            </h2>
                        </div>

                        <XCircle className="h-10 w-10 text-red-600" />
                    </CardContent>
                </Card>
            </div>

            {/* Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Rental Request History</CardTitle>
                </CardHeader>

                <CardContent>
                    <RentalRequestTable requests={requests} />
                </CardContent>
            </Card>
        </div>
    );
};

export default MyRequestsPage;
