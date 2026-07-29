import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from './_components/DashboardSidebar';
import { getMe } from '@/service/getMe';

const DashboardLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const user = await getMe();

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                {/* Sidebar */}
                <DashboardSidebar user={user} />

                {/* Main Content */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;
