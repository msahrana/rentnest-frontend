// import PropertyDetails from "@/components/PropertyDetails";

import PropertyDetails from '../details/page';

interface Props {
    params: Promise<{
        id: string;
    }>;
}

const PropertyDetailsPage = async ({ params }: Props) => {
    const { id } = await params;

    const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/properties/${id}`,
        {
            cache: 'no-store',
        },
    );

    const result = await res.json();

    return (
        <div className="container mx-auto py-10">
            <PropertyDetails property={result.data} />
        </div>
    );
};

export default PropertyDetailsPage;
