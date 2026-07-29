import { LucideIcon } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
    title: string;
    value: number | string;
    icon: LucideIcon;
    description?: string;
}

const StatCard = ({ title, value, icon: Icon, description }: StatCardProps) => {
    return (
        <Card>
            <CardContent className="flex items-center justify-between p-6">
                <div>
                    <p className="text-sm text-muted-foreground">{title}</p>

                    <h2 className="mt-2 text-3xl font-bold">{value}</h2>

                    {description && (
                        <p className="mt-1 text-xs text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>

                <div className="rounded-full bg-primary/10 p-4">
                    <Icon className="h-7 w-7 text-primary" />
                </div>
            </CardContent>
        </Card>
    );
};

export default StatCard;
