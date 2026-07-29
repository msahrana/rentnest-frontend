import Footer from "@/components/shared/Footer";

const PublicLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div>
        {children}
        <Footer/>
        </div>;
};

export default PublicLayout;
