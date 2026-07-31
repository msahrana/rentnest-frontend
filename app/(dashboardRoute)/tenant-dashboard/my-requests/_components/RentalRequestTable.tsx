import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { RentalRequest } from '@/lib/types';

interface Props {
    requests: RentalRequest[];
}

const RentalRequestTable = ({ requests }: Props) => {
    if (requests.length === 0) {
        return (
            <div className="flex h-60 items-center justify-center rounded-lg border">
                <p className="text-muted-foreground">
                    No rental requests found.
                </p>
            </div>
        );
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Rent</TableHead>
                    <TableHead>Move In</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {requests.map((request) => (
                    <TableRow key={request.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Image
                                    src={request.property.thumbnail}
                                    alt={request.property.title}
                                    width={40}
                                    height={40}
                                    unoptimized
                                    className="rounded-2xl object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold">
                                        {request.property.title}
                                    </h4>

                                    <p className="text-sm text-muted-foreground">
                                        {request.property.propertyType}
                                    </p>
                                </div>
                            </div>
                        </TableCell>

                        <TableCell>{request.property.location}</TableCell>

                        <TableCell>
                            ৳{request.property.rent.toLocaleString()}
                        </TableCell>

                        <TableCell>
                            {new Date(request.moveInDate).toLocaleDateString()}
                        </TableCell>

                        <TableCell>
                            {request.status === 'PENDING' && (
                                <Badge className="bg-yellow-500">Pending</Badge>
                            )}

                            {request.status === 'APPROVED' && (
                                <Badge className="bg-green-600">Approved</Badge>
                            )}

                            {request.status === 'REJECTED' && (
                                <Badge variant="destructive">Rejected</Badge>
                            )}
                        </TableCell>

                        <TableCell>
                            {request.payment ? (
                                <Badge className="bg-emerald-600">Paid</Badge>
                            ) : request.status === 'APPROVED' ? (
                                <Button size="sm" asChild>
                                    <Link href={`/payment/${request.id}`}>
                                        Pay Now
                                    </Link>
                                </Button>
                            ) : (
                                <span className="text-muted-foreground">—</span>
                            )}
                        </TableCell>

                        <TableCell className="text-right">
                            <Button variant="outline" size="sm" asChild>
                                <Link
                                    href={`/properties/${request.property.id}`}
                                >
                                    View
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default RentalRequestTable;
