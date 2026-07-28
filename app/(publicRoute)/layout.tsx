import Navbar from '@/components/shared/Navbar';

const PublicLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default PublicLayout;
