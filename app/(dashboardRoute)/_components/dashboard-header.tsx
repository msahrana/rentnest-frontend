import { ReactNode } from 'react';

interface DashboardHeaderProps {
    title: React.ReactNode;
    description: string;
    action?: ReactNode;
}
const DashboardHeader = ({
    title,
    description,
    action,
}: DashboardHeaderProps) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-2">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-green-500">
                    {title}
                </h1>

                {description && (
                    <p className="mt-1 text-muted-foreground">{description}</p>
                )}
            </div>

            {action}
        </div>
    );
};

export default DashboardHeader;
