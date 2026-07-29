import Banner from '@/components/banner/Banner';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import { Button } from '@/components/ui/button';

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="container mx-auto my-8 flex flex-col items-center gap-10 lg:flex-row">
                <div className="w-full space-y-6 lg:w-2/5">
                    <h1 className="text-5xl font-bold leading-tight text-cyan-600 lg:text-6xl">
                        Explore the Finest{' '}
                        <span className="text-yellow-500">Global</span> Offers
                    </h1>

                    <p className="text-lg text-muted-foreground">
                        Discover apartments, houses, and commercial properties
                        that fit your lifestyle and budget with RentNest.
                    </p>

                    <div className="flex gap-4">
                        <Button className="bg-yellow-500 hover:bg-yellow-600">
                            Book Now
                        </Button>

                        <Button variant="outline">Learn More</Button>
                    </div>
                </div>

                <div className="flex w-full justify-center lg:w-3/5 lg:justify-end">
                    <Banner />
                </div>
            </section>

            {/* Featured Properties */}
            <FeaturedProperties />
        </>
    );
}
