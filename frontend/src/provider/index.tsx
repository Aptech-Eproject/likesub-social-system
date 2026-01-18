'use client';

import { ReactNode } from 'react';
import QueryProvider from './QueryProvider';
import { SidebarProvider } from '@/contexts/common/SidebarContext';

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <QueryProvider>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </QueryProvider>
    );
}