import './globals.css';
import React, { ReactNode } from 'react';

export const metadata = {
    title: 'Mini ERP',
    description: 'Mini ERP portfolio dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='fr' className='h-full'>
            <body className='min-h-screen'>
                <div className='container py-6'>{children}</div>
            </body>
        </html>
    );
}
