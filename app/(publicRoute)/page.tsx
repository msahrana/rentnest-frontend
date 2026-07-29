import Banner from '@/components/banner/Banner';
import { Button } from '@/components/ui/button';

export default function HomePage() {
    return (
        <div className="flex gap-2 justify-center items-center my-5 pl-5">
            <div className="w-2/5">
                <h1 className="text-6xl font-bold text-cyan-600">
                    Explore the Finest{' '}
                    <span className="text-yellow-500">Global</span> Offers
                </h1>
                <div className="mt-6 flex gap-4">
                    <div className="space-x-4">
                        <Button className="bg-yellow-500 hover:bg-cyan-600">
                            Book Now
                        </Button>
                        <Button className="hover:bg-yellow-500">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className="flex w-3/5 justify-end pr-1">
                <Banner />
            </div>
        </div>
    );
}
